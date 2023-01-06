import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/Styles';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOdersScreen from '../screens/MyOdersScreen';

const Tab = createBottomTabNavigator();
const ClientTabs = () => {
  return (
    <>
      <Tab.Navigator
      tabBarOptions={{
        activeTimeColor: colors.green_light
      }}
      >
        {/* home section */}
        <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={
            {   headerShown: false,
                tabBarLabel : 'Home',
                tabBarIcon : ({color, size}) => (
                    <Icon 
                    name='home'
                    type='material'
                    color={color}
                    size={size}
                    />
                )
            }
        }
        />
        {/* Search section */}
        <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen}
        options={
            {
                tabBarLabel : 'Search',
                tabBarIcon : ({color, size}) => (
                    <Icon 
                    name='home'
                    type='material'
                    color={color}
                    size={size}
                    />
                )
            }
        }
        />
         {/* My Accound section */}
         <Tab.Screen 
        name="MyAccountScreen" 
        component={MyAccountScreen}
        options={
            {
                tabBarLabel : 'My Accound',
                tabBarIcon : ({color, size}) => (
                    <Icon 
                    name='home'
                    type='material'
                    color={color}
                    size={size}
                    />
                )
            }
        }
        />
        {/* My oder section */}
        <Tab.Screen 
        name="MyOdersScreen" 
        component={MyOdersScreen}
        options={
            {
                tabBarLabel : 'My Oder',
                tabBarIcon : ({color, size}) => (
                    <Icon 
                    name='home'
                    type='material'
                    color={color}
                    size={size}
                    />
                )
            }
        }
        />
      </Tab.Navigator>
    </>
  )
}

export default ClientTabs

const styles = StyleSheet.create({})