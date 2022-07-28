import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'


import { UserContext } from '../contexts/UserContext'



import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import TodayIcon from '../assets/today.svg'
import FavoriteIcon from '../assets/favorite.svg'
import AccountIcon from '../assets/account.svg'


export default function tabBar({ state, navigation }) {
    const { state:user } = useContext(UserContext)
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.ccontainer}>   
            
         <View style={styles.containertab}>
            

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Home') } >                
                <HomeIcon style={{opacity: state.index ===0? 1 :0.5}} widht='24' height='24' fill='white' />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Search')} >
                <SearchIcon style={{opacity: state.index === 1? 1 : 0.5}} widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttoncenter}
            onPress={()=>goTo('Appointments') }>
                <TodayIcon fill={ state.index ===2? 'red' : 'blue' } widht='32' height='32'  />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Favorites') }>
                <FavoriteIcon style={{opacity: state.index === 3? 1 : 0.5}} widht='24' height='24' fill='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>goTo('Profile') }>
                {user.avatar != '' ?
                <Image  style={styles.imguser} source={{ uri: user.avatar }} />
                :  
                <AccountIcon style={{opacity: state.index === 4? 1 : 0.5}} widht='24' height='24' fill='white' />
                 }
               
            </TouchableOpacity>
            

         </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    ccontainer:{
        backgroundColor:'#63c2d1'
    },

    containertab:{
        height:70,    
        backgroundColor: '#4eadbe',
        flexDirection:'row',   
        borderRadius:50,
        margin:10,    
        
        shadowColor:'red'  
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttoncenter:{
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
        borderRadius: 35,
        borderWidth:3,
        borderColor:'#4eadbe',           
        marginTop: -20,
    },
    imguser:{
        width: 27,
        height: 27,
        borderRadius: 12,
    }


})