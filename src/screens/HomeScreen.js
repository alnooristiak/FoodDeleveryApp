import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/Styles'

const HomeScreen = () => {
  const [delevery, setDelevery] = useState(true);
  return (
    <View>
      {/* Home Header sec */}
      <HomeHeader />
      {/* Delevery and pick up sec */}
      <View style={styles.btnConatiner}>
        <TouchableOpacity
          onPress={() => { setDelevery(true) }}
          style={styles.deleveryBtn}>
          <Text style={styles.btnTxt}>Delevery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.deleveryBtn, backgroundColor: colors.orange_dark }}>
          <Text style={styles.btnTxt}>Pick Up</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.mapDetail}>
          <View style={styles.detailContainers}>
            <View style={styles.iconTxt}>
              <Text style={styles.tests}>icon</Text>
              <Text style={styles.tests}>Barabkund-4312</Text>
            </View>
            <View style={styles.another}>
              <Text style={styles.tests}>icon</Text>
              <Text style={styles.tests}>NOW</Text>
            </View>
          </View>
          {/* icon */}
          <View style={styles.rightIcon}>
            <Text>icon</Text>
          </View>
        </View>
        {/* Category text sec */}
        <View style={styles.category}>
          <Text style={styles.categoryTxt}>CATEGORY</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  btnConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 18
  },
  deleveryBtn: {
    backgroundColor: colors.greay_dark,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15
  },
  btnTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white
  },
  mapDetail: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  detailContainers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.orange_light,
    padding: 4,
    borderRadius: 10
  },
  iconTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  another: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 3,
    marginLeft: 8,
    borderRadius: 10
  }, 
  tests: {
    fontSize: 17,
    marginLeft: 4
  },
  rightIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.green,
    padding: 8,
    paddingHorizontal: 25,
    // marginLeft: 8,
    borderRadius: 10
  },
  category: {
    marginVertical: 10,
    padding: 8,
    backgroundColor: colors.green_light
  },
  categoryTxt: {
    fontWeight: '800',
    fontSize: 18
  }
})