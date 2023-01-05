import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/Styles'

const NameTittle = ({ nameTitle }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryTxt}>{nameTitle}</Text>
    </View>
  )
}

export default NameTittle

const styles = StyleSheet.create({
    category: {
        marginVertical: 10,
        padding: 8,
        backgroundColor: colors.green_light
      },
      categoryTxt: {
        fontWeight: '800',
        fontSize: 18
      },
})