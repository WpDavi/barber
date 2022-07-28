import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

import Api from '../Api'


import { UserContext } from '../contexts/UserContext'
import Logo from '../assets/barber.svg'

export default function Preload() {
    
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation();
    
    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
                if(res.token) {

                    await AsyncStorage.setItem('token', res.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });

                } else {
                    navigation.navigate('SignIn');
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

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