import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchIcon from '../../assets/search.svg'
import MylocationIocn from '../../assets/my_location.svg'
import { TextInput } from "react-native-gesture-handler";


export default function Home() {
    
    const navigation = useNavigation();

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
                    placeholderTextColor={'white'}/>
                    <TouchableOpacity>
                        <MylocationIocn width='24' heigth='24' fill='white' />
                    </TouchableOpacity>

                    
                </View>
                


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