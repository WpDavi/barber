import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'



import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import TodayIcon from '../assets/today.svg'
import FavoriteIcon from '../assets/favorite.svg'
import AccountIcon from '../assets/account.svg'

export default function tabBar({ state, navigation }) {
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.containertab}>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Home') } >                
                <HomeIcon style={{opacity: 0.7}} widht='24' height='24' fill='white' />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Search')} >
                <SearchIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Appointments') }>
                <TodayIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Favorites') }>
                <FavoriteIcon widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Profile') }>
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