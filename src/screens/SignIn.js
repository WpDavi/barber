import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserContext } from '../contexts/UserContext'

import Api from '../Api'


import Logo from '../assets/barber.svg'
import EmailSvg from '../assets/email.svg'
import LockSvg from '../assets/lock.svg'




export default function Preload() {
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation();

    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')

    const handleSignClick = async () => {
        if ( emailField != '' & passwordField != '' ) {

            let json = await Api.signIn(emailField, passwordField);

            if (json.token ) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar:json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{ name:'MainTab'}]
                });

            } else {
                alert ('E=mail e/ou senha errados!')
            }

        } else {
            alert('Preencha os campos')
        }

    }

    const handleMessageButtonClick = () => {
        navigation.navigate('SignUp')
        
    }


    return(
        <View style={styles.Container} >
            <Logo style={{marginBottom: 20}} width='100%' height='160' />

            <View style={styles.Viewinput}>
                <EmailSvg  width='25' height='25'  fill='#268597'/>
                <TextInput  style={styles.txtimput} 
                placeholderTextColor= '#268597'               
                placeholder="Digite seu e-mail"   
                value={emailField}     
                onChangeText={t=>setEmailField(t)}                       
                />            
            </View>

            <View style={styles.Viewinput}>
                <LockSvg width='25' height='25' fill='#268597' />
                <TextInput  style={styles.txtimput} 
                placeholderTextColor= '#268597'                  
                placeholder="Digite sua senha"  
                value={passwordField} 
                onChangeText={t=>setPasswordField(t)}
                secureTextEntry={true}                        
                />            
            </View>

            <TouchableOpacity 
            onPress={handleSignClick}                 
             style={styles.Button} >
                <Text style={styles.txtbutton} > LOGIN </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ handleMessageButtonClick  }            
             style={styles.buttoncadastro}>
                <Text style={{fontSize: 18, color: '#268597' }} > Ainda não possui uma conta?</Text>
                <Text style={{fontSize: 18, fontWeight:'bold', color: '#268597'}} > Cadastre-se</Text>
            </TouchableOpacity>            
            
        </View>

    )
}

const styles = StyleSheet.create ({
    Container:{
        flex:1,
        backgroundColor:'#62C2D1',
        justifyContent:'center',
        alignItems:'center'
    },

    Viewinput:{
        backgroundColor:'#83D6E5',
        flexDirection:'row',
        borderRadius: 30,
        paddingLeft: 20,
        alignItems:'center',
        marginTop:25,
        width:'80%',
        height:60,        
    },

    txtimput:{
        marginLeft:5,
        fontSize:17,   
        flex:1        
    },
    Button:{
        backgroundColor:'#268597',
        width: '80%',
        height: 60,
        borderRadius: 30,
        marginTop: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    txtbutton:{
        fontSize: 20,
        color: 'white'
    },

    buttoncadastro:{
        flexDirection:'row',
        marginTop: 80,
        
    }


})