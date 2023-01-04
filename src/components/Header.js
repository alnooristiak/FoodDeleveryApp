import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/Styles'
import { Icon } from 'react-native-elements'

const Header = ({ tittle, type, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Icon
            name='arrow-left'
            type={type}
            color={colors.white}
            size={24}
            onPress={() => {navigation.goBack()}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{tittle}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.orange_dark,
        height: parameters.headerheight,
    },
    iconContainer: {
        marginLeft: 12
    },
    textContainer: {
        marginLeft: 12
    },
    headerText: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 23
    }
})