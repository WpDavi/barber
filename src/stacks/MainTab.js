import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from './csstabBar'

import Appointments from "../screens/Tabscreen/Appointments";
import Favorites from "../screens/Tabscreen/Favorites";
import Home from "../screens/Tabscreen/Home";
import Profile from "../screens/Tabscreen/Profile";
import Search from "../screens/Tabscreen/Search";

const Tab = createBottomTabNavigator();


export default function MainTab() {
    return(
        <Tab.Navigator
        tabBar={ props=><CustomTabBar {...props} /> }
        screenOptions={{
            
            headerShown:false    
             
        }}

        >

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Appointments" component={Appointments} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>

    )
}