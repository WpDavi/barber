import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Api from "../../Api";


export default function Profile() {

     const navigation = useNavigation (); 

     const handleLogout = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        })
        
     }


    return(
        <View>
            <Text> Profile</Text>

            <Button title="sair" onPress={handleLogout} />
        </View>
    )
}