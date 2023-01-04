import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import AuthNavigatiors from './AuthNavigatiors';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigatiors />
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})