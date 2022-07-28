import React, {useEffect, useState} from "react";
import { ActivityIndicator, Platform } from "react-native";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation  from "@react-native-community/geolocation";

import Api from '../../Api'

import SearchIcon from '../../assets/search.svg'
import MylocationIocn from '../../assets/my_location.svg'
import { TextInput } from "react-native-gesture-handler";


export default function Home() {
    const navigation = useNavigation();

    const [ locationText, setLocationText ] = useState('');    
    const [coords, setCoords] = useState(null);
    const [ loading, setLoading] = useState(false);
    const [list, setlist ] = useState([]);
    

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
        if (result == 'granted') {

            setLoading(true);
            setLocationText('');  
            setlist([]);      

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getBarbers();
            } );
        }
    }
    const getBarbers = async () => {
        setLoading(true);
        setlist([]);

        let res = await Api.getBarbers();
        console.log(res)
        if(res.error == '') {
            
            setlist(res.data);
        } else {
            alert("error: "+res.error ); 
        }
        setLoading(false)

    }

    useEffect(()=>{
        getBarbers();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollV}>

                <View style={styles.header}>
                    <Text style={styles.txtheader}> Encontre o seu Barbeiro favorito </Text>
                    
                    <TouchableOpacity onPress={ () => navigation.navigate('Search') } >
                        <SearchIcon width='26' heigth='26' fill='white' /> 
                    </TouchableOpacity>
                </View>

                <View style={styles.location} >
                    <TextInput style={styles.txtinput}
                    placeholder="Onde você está"
                    placeholderTextColor={'white'}
                    value={locationText}
                    onChangeText={t=> setLocationText (t) }
                    />

                    <TouchableOpacity onPress={handleLocationFinder}>
                        <MylocationIocn width='24' heigth='24' fill='white' />
                    </TouchableOpacity>

                    
                </View>
                
                {loading &&
                <ActivityIndicator style={{marginTop:50}} size='large' color={'white'}/>              
            }   


            </ScrollView>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#63c2d1',        
    },
    scrollV:{
        flex: 1,
        padding:20,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    txtheader:{
        fontSize: 25,
        color:'white',
        width: 250,
        fontWeight:'bold'
    },

    location:{
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#268597',
        borderRadius: 50,
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        padding:7,
    },
    txtinput:{
        fontSize: 16,
        flex:1
    }

    
})