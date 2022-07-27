import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from "react-native";


import Logo from '../assets/barber.svg'
import EmailSvg from '../assets/email.svg'
import LockSvg from '../assets/lock.svg'

export default function Preload() {
    return(
        <View style={styles.Container} >
            <Logo style={{marginBottom: 20}} width='100%' height='160' />

            <View style={styles.Viewinput}>
                <EmailSvg  width='25' height='25' />
                <TextInput  style={styles.txtimput} 
                placeholderTextColor= '#268597'               
                placeholder="Difite seu e-mail"                               
                />            
            </View>

            <View style={styles.Viewinput}>
                <LockSvg width='25' height='25' />
                <TextInput  style={styles.txtimput} 
                placeholderTextColor= '#268597'                  
                placeholder="Difite sua senha"                               
                />            
            </View>

            <TouchableOpacity style={styles.Button} >
                <Text style={styles.txtbutton} > LOGIN </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttoncadastro}>
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