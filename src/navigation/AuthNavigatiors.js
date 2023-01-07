import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomScreen from '../screens/authScreen/SignInWelcomScreen';
import SignInScreen from '../screens/authScreen/SignInScreen';
// import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';
import ResturentsMapScreen from '../screens/ResturentsMapScreen';
// import DrawerNavigation from '../screens/authScreen/DrawerNavigation';


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

                {/* <Stack.Screen 
                name="HomeScreen" 
                options={{ headerShown: false }}
                component={HomeScreen} /> */}

                <Stack.Screen 
                name="ClientTabs" 
                options={{ headerShown: false }}
                component={ClientTabs} />

                {/* <Stack.Screen 
                name="DrawerNavigation" 
                options={{ headerShown: false }}
                component={DrawerNavigation} /> */}

                <Stack.Screen 
                name="ResturentsMapScreen" 
                options={{ headerShown: false }}
                component={ResturentsMapScreen} />
            </Stack.Navigator>
        </>
    )
}

export default AuthNavigatiors

const styles = StyleSheet.create({})