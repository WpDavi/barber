import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native'


export default function Infos({data}) {
    return(
        <TouchableOpacity style={styles.Container} >
            <Image style={styles.perfilemg} source={{uri: data.avatar}}/>

               <View style={styles.containerinfo}>                        
                    <Text style={styles.txtname} > {data.name} </Text>  
    
                    <View style={styles.containertxtverperfil}>
                       <Text style={styles.txtverperfil}> Ver Perfil</Text>
                    </View>
               </View>
    
               
               

        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({

    Container:{
        flexDirection:'row',
        backgroundColor:'white',
        marginTop:20,
        height:115,
        borderRadius: 25,
        alignItems:'center',
        
    },

    perfilemg:{
        width:90,
        height:90,
        borderRadius:20,
        marginLeft: 12,
       
    },

    containerinfo:{     
             
        marginLeft: 20,
        
        
          
    },

    txtname:{
        fontSize: 20,
        fontWeight:'bold',
        color:'black',
        
    },

    containertxtverperfil:{
        width:90,
        borderColor:'red',
        borderWidth: 3,
        borderRadius:10,
        alignItems:'center',
        borderColor:'#63c2d1',
        
    },

    txtverperfil:{
        color:'#63c2d1'       
        
    }


})