import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import UserContextProvider from './src/contexts/UserContext'
import MainStack from './src/stacks/MainStack'

export default function app () {
  return(
    <UserContextProvider>
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
    </UserContextProvider>
  )
}