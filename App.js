import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from './src/global/Styles';
import SignInScreen from './src/screens/authScreen/SignInScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor = {colors.orange_dark}
      />
      {/* <Text>App</Text> */}
      <SignInScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
})