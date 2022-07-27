import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

import Logo from '../assets/barber.svg'

export default function Preload() {
    
    const navigation = useNavigation();
    
    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token !== null) {
                //validar o token
            } else {
                navigation.navigate('SignIn')
            }
        }        
        checkToken();
    }), [];

    return(
        <View style={styles.Container}>            
            <Logo width="100%" height="160" />

            <ActivityIndicator size={"large"} color={'white'} style={styles.Load} />
        </View>

    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#62C2D1',
        justifyContent:'center',
    },
    Load:{
        marginTop:50,       
    }
    
})