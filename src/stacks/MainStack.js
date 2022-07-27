import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";


const Stack = createNativeStackNavigator();

export default function MainStack () {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false           
        }}>

            
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignUp" component={SignUp} />
            
        </Stack.Navigator>
    )
}