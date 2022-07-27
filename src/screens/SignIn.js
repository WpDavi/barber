import React from "react";
import { View, StyleSheet, TextInput  } from "react-native";

import Logo from '../assets/barber.svg'
import EmailSvg from '../assets/email.svg'
import LockSvg from '../assets/lock.svg'

export default function Preload() {
    return(
        <View style={styles.Container} >
            <Logo width='100%' height='160' />

            <View style={styles.Viewinput}>
                <EmailSvg width='25' height='25' />

                <TextInput 
                
                />
                

            </View>
            
        </View>

    )
}

const styles = StyleSheet.create ({
    Container:{
        flex:1,
        backgroundColor:'#62C2D1',
        justifyContent:'center',
    },

    Viewinput:{
        backgroundColor:'#83D6E5',
        flexdirection:'row',
        
    },

})