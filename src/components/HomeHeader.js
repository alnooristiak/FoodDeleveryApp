import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/Styles'
import { parameters } from '../global/Styles'
import { Icon, withBadge } from 'react-native-elements'

const HomeHeader = () => {
  const BadgeIcon = withBadge(3)(Icon)
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>MENU</Text>
        </View>
        <View>
          <Text style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>FOOD Express</Text>
        </View>
        <View>
          <BadgeIcon 
          type="material-community"
          name="cart"
          size={32}
          color={colors.white}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  menuBar: {
    color: colors.white,
    fontSize: 30
  },
    container: {
        backgroundColor: colors.orange_dark,
        height: parameters.headerheight,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})