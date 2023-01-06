import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomScreen from '../screens/authScreen/SignInWelcomScreen';
import SignInScreen from '../screens/authScreen/SignInScreen';
// import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';


const Stack = createNativeStackNavigator();

const AuthNavigatiors = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="SignInWelcomScreen" 
                options={{ headerShown: false }}
                component={SignInWelcomScreen} />

                <Stack.Screen 
                name="SignInScreen" 
                options={{ headerShown: false }}
                component={SignInScreen} />

                <Stack.Screen 
                name="ClientTabs" 
                options={{ headerShown: false }}
                component={ClientTabs} />
            </Stack.Navigator>
        </>
    )
}

export default AuthNavigatiors

const styles = StyleSheet.create({})