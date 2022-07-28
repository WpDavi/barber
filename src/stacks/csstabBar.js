import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'



import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import TodayIcon from '../assets/today.svg'
import FavoriteIcon from '../assets/favorite.svg'
import AccountIcon from '../assets/account.svg'

export default function tabBar({ state, navigation }) {
    
    const goTo = (screenName) => {
        navigation.navigation(screenName);
    }

    return (
        <View style={styles.containertab}>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo(Home) } >                
                <HomeIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
            onPress={()=>goTo(Search) } >
                <SearchIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <TodayIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <FavoriteIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <AccountIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({
    containertab:{
        height: 60,
        backgroundColor: '#4eadbe',
        flexDirection:'row',        
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }


})