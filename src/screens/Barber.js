import React, { useState, useEffect} from "react";
import { View, ScrollView, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native'
import Swiper from "react-native-swiper";


import Api from "../Api";
import Star from '../assets/star_empty.svg'
import FavorityIcon from '../assets/favorite.svg'
import BackButoon from '../assets/back.svg'




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
                        <View style={{flex:1, backgroundColor:'#63c2d1'}} key={key}>
                            <Image style={{width:'100%', height:240}}
                            source={{uri:item.url}} resizeMode='cover' />
                        </View>
                    ))}
                </Swiper>
                :
                <View style={{ height: 140, backgroundColor:'#63c2d1' }}>

                </View>
                }    

                <View style={styles.containerinfo}>

                    <View style={styles.headerInfo}>
                         <Image style={styles.perfilemg} source={{uri: userInfo.avatar}} />

                         <View>
                            <Text style={styles.txtname} > {userInfo.name} </Text>

                             <View style={{flexDirection:'row', marginTop:10,alignItems:'center' }}>
                    
                                <Star width={12} height={12} fill={'#ff9200'} />
                                <Star width={12} height={12} fill={'#ff9200'} />
                                <Star width={12} height={12} fill={'#ff9200'} />
                                <Star width={12} height={12} fill={'#ff9200'} />
                                <Star width={12} height={12} fill={'#ff9200'} />
                                <Star width={12} height={12} fill={'#ff9200'} />
                    
                                <Text style={{ marginLeft:10, color:'black', fontSize:12, fontWeight:'bold' }} > {userInfo.stars} </Text>
                             </View>
                         </View>

                         <TouchableOpacity style={styles.containerFavorit}>
                            <FavorityIcon width='24' height='24' fill='black' />
                         </TouchableOpacity>                       
                    </View>

                    {loading &&
                   <ActivityIndicator style={{marginTop:50}} size='large' color={'black'}/>}

                   <Text> {userInfo.name} </Text>

                   

                    <View></View>                 

                </View>

            </ScrollView>   

            <TouchableOpacity style={{position:'absolute'}}
             onPress={() => navigation.navigate('Home')}>
                <BackButoon width='44' height='44' fill='white' />                 
            </TouchableOpacity>
            

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
    containerinfo:{
        backgroundColor:'#fff',
        borderTopLeftRadius: 50,
        marginTop: -50,
        minHeight: 790,
    },
    perfilemg:{
        width:110,
        height:110,
        borderRadius:20,        
        marginTop: -27,
        borderWidth: 2,
        borderColor: '#fff'
    },

    headerInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft: 25,
        marginRight: 25,
    },
    txtname:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:15,
        color:'#000000'
    },
    containerFavorit:{
        backgroundColor:'white', 
        borderRadius:50, 
        width:40,
        height: 40,
        alignItems:'center',
        justifyContent:'center' ,
        marginTop: -20,
        borderWidth: 2,
        borderColor: '#999999',
              
    }


})