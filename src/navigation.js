import React from 'react'
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { LogBox } from 'react-native'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation