import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserContext } from '../contexts/UserContext'


import Api from '../Api'

import Logo from '../assets/barber.svg'
import EmailSvg from '../assets/email.svg'
import LockSvg from '../assets/lock.svg'
import PersonSvg from '../assets/person.svg'




export default function Preload() {
    
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation();
    
    const [ nameField, setnameField] = useState('')
    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')
   
    


    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            
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
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.navigate('SignIn')
        
    }


    return(
        <View style={styles.Container} >
            <Logo style={{marginBottom: 20}} width='100%' height='160' />

            <View style={styles.Viewinput}>
                <PersonSvg  width='25' height='25'  fill='#268597'/>
                <TextInput  style={styles.txtimput} 
                placeholderTextColor= '#268597'               
                placeholder="Digite seu nome"   
                value={nameField}     
                onChangeText={t=>setnameField(t)}                       
                />            
            </View>

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
                <Text style={styles.txtbutton} > CADASTRAR </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ handleMessageButtonClick  }            
             style={styles.buttoncadastro}>
                <Text style={{fontSize: 18, color: '#268597' }} > Ja possui uma conta?</Text>
                <Text style={{fontSize: 18, fontWeight:'bold', color: '#268597'}} > Faça Login</Text>
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
        
    },
    


})