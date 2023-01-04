import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from './src/global/Styles';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor = {colors.orange_dark}
      />
      <RootNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
})