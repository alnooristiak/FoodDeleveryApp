import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import { colors } from './src/global/Styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor = {colors.orange_dark}
      />
      {/* <Text>App</Text> */}
      <Header />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
})