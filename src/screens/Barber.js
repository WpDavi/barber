import React, { useState, useEffect} from "react";
import { View, ScrollView, Image, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native'
import Swiper from "react-native-swiper";


import Api from "../Api";



export default function Barber(){

    const navigation = useNavigation();
    const route = useRoute();
    

    const [ userInfo, setUserInfo] =useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars,
    });

    const [loading, setLoading ] = useState(false);

    useEffect(() =>{
        const getBarberInfo = async () => {
            setLoading(true);

            let json = await Api.getBarber(userInfo.id);
            if(json.error === ''){
                setUserInfo(json.data);

            }else {
                alert("Erro:"+json.error );
            }
            setLoading(false);
        }
        getBarberInfo();
    },[]);

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <ScrollView style={{flex:1}}>
                {userInfo.photos && userInfo.photos.length > 0 ?
                <Swiper
                style={{height: 240}}
                dot={<View style={styles.SwipeDot} />}
                activeDot={<View style={styles.SwipeDotActive}/>}
                paginationStyle={{top: 15, right:15, bottom: null, left: null}}
                autoplay={true}
                >
                    {userInfo.photos.map((item, key)=>(
                        <View style={{flex:1, backgroundColor:'#63c2d1'}} kay={key}>
                            <Image style={{width:'100%', height:240}}
                            source={{uri:item.url}} resizeMode='cover' />
                        </View>
                    ))}
                </Swiper>
                :
                <View></View>
                }    

                <View>

                    <View></View>
                    <View></View>
                    <View></View>                 

                </View>

            </ScrollView>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    SwipeDot:{
        width: 10,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin:3
    },
    SwipeDotActive:{
        width: 10,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        margin:3
    },


})