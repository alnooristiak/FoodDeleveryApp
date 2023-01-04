import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { colors } from '../global/Styles'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <Icon /> */}
        <Text>HomeHeader hi</Text>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.orange_dark,
    }
})