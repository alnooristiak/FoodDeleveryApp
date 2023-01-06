import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/Styles'
import { datas } from '../global/Data'
import NameTittle from '../components/NameTittle'
import FoodImgCard from '../components/FoodImgCard'
import { cardData } from '../global/CardData'
import CountDown from 'react-native-countdown-component';

// const SCREEN_WITH = Dimensions.get("window").width;
const HomeScreen = ({ navigation }) => {
  const [delevery, setDelevery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0")
  return (
    <View style={styles.mainContainer}>
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
        {/* <View style={styles.category}>
          <Text style={styles.categoryTxt}>CATEGORY</Text>
        </View> */}
        <NameTittle nameTitle='CATEGORY' />
        {/* load category list */}
        <View>
          <FlatList
            data={datas}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => { setIndexCheck(item.id) }}
              >
                <View style={indexCheck === item.id ? { ...styles.smallCardSel } : { ...styles.smallCard }}>
                  {/* <ScrollView> */}
                  <Text style={styles.cataTitle}>{item.name}</Text>
                  {/* </ScrollView> */}
                </View>
              </Pressable>
            )}
          />
        </View>
        {/* free delevery sec */}
        <NameTittle nameTitle='FREE DELEVERY' />
        <View>
          <View style={{flexDirection: 'row', 
          justifyContent: 'center',}}>
            <Text
            style={{fontSize: 17, 
              fontWeight: 'bold', 
              color: colors.green, 
              textAlign: 'center', padding: 5}}
            >Options Change In</Text>
            <CountDown
              until={3600}
              // onFinish={() => alert('finished')}
              onPress={() => alert('hello')}
              size={14}
              digitStyle={{backgroundColor: colors.orange_dark}}
              timeToShow={['M', 'S']}
              timeLabels={{m:'Min', s:'Sec'}}
            />
          </View>
          <FlatList
            style={{ margin: 10 }}
            horizontal={true}
            data={cardData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ margin: 6 }}>
                <FoodImgCard
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  location={item.location}
                  deleveryTime={item.deleveryTime}
                  likes={item.likes}
                />
              </View>
            )}
          />
        </View>
        {/* PROMOTIONS ABLEABLE sec */}
        <NameTittle nameTitle='PROMOTIONS ABLEABLE' />
        {/* <View style={{ paddingTop: 10}}>
            {
              cardData.map(item => (
                <View key={item.id} style={{paddingBottom: 20}}>
                  <FoodImgCard
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  location={item.location}
                  deleveryTime={item.deleveryTime}
                  likes={item.likes}
                  />
                </View>
              ))
            }
          </View> */}
        <View style={{ marginBottom: 20, }}>
          <FlatList
            style={{ marginBottom: 50 }}
            horizontal={true}
            data={cardData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ margin: 6 }}>
                <FoodImgCard
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  location={item.location}
                  deleveryTime={item.deleveryTime}
                  likes={item.likes}
                />
              </View>
            )}
          />
        </View>
        {/* RESTURENTS in your area sec */}
        <NameTittle nameTitle='PROMOTIONS in your area' />
      </ScrollView>
      <View style={styles.mapConatainer}>
        <TouchableOpacity
        onPress={()=> {navigation.navigate("ResturentsMapScreen")}}
        tyle={styles.viewMConatainer}>
          <Text style={styles.mapText}>VIEW</Text>
          <Text style={styles.mapText}>MAP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
  },
  btnConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 18,
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
  // category: {
  //   marginVertical: 10,
  //   padding: 8,
  //   backgroundColor: colors.green_light
  // },
  // categoryTxt: {
  //   fontWeight: '800',
  //   fontSize: 18
  // },
  smallCardSel: {
    borderRadius: 30,
    backgroundColor: colors.green_light,
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 100,
    margin: 10
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.greay_midiyam,
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 100,
    margin: 10
  },
  cataTitle: {
    fontSize: 15,
    fontWeight: '800'
  },
  // map section
  mapConatainer: {
    position: "absolute",
    right: 10,
    bottom: 100
  },
  viewMConatainer: {
    backgroundColor: colors.green,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  mapText: {

  }
})