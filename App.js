import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SignInWelcomScreen from './src/screens/authScreen/SignInWelcomScreen';
import { colors } from './src/global/Styles';
// import SignInWelcomScreen from './src/screens/authScreen/SignInWelcomScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor = {colors.orange_dark}
      />
      {/* <Text>App</Text> */}
      <SignInWelcomScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
})