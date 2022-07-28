import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import Appointments from "../screens/Tabscreen/Appointments";
import Favorites from "../screens/Tabscreen/Favorites";
import Home from "../screens/Tabscreen/Home";
import Profile from "../screens/Tabscreen/Profile";
import Search from "../screens/Tabscreen/Search";

export default function MainTab() {
    return(
        <Tab.Navigator>

            <Tab.Screen />

        </Tab.Navigator>

    )
}