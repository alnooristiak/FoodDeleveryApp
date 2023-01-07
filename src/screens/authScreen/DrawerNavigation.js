import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientTabs from '../../navigation/ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../../global/Styles';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Screen 
      name="ClientTabs" 
      component={ClientTabs}
      options={{
        title: 'Client',
        drawerIcon: ({focussed, size}) => (
            <Icon 
            name='home'
            type='material-community'
            color={focussed ? 
              '#7cc' : colors.green}
            size={size}
            />
        )
      }} />
    </>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})