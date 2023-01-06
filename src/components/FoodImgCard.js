import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/Styles';

const fakeImg = "../../assets/image/kabab.jpg";
const SCREEN_WITH = Dimensions.get("window").window;
const FoodImgCard = ({
    id, 
    name, 
    image, 
    rating, 
    location, 
    deleveryTime, 
    resturentName, 
    likes}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageConatiner}>
        <Image
        source={require(fakeImg)}
        resizeMode="cover" 
        style={styles.imageStyle} />
        <View style={styles.ratingConatiner}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Text style={styles.ratingText}>{likes}</Text>
        </View>
      </View>
      <View style={styles.detainSec}>
        <View 
        style={{justifyContent: 'center', 
        alignItems: 'center', marginRight: 5}}>
            <Text style={styles.ratingText}>{name}</Text>
        </View>
        <View style={styles.todetainSec}>
            <Text style={styles.bDetail}>{location}</Text>
            <Text style={{...styles.bDetail, fontSize: 16}}>{deleveryTime}</Text>
        </View>
      </View>
    </View>
  )
}

export default FoodImgCard

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WITH,
        borderColor: colors.green,
        borderWidth: 2,
        height: 220,
    },
    imageConatiner: {
        position: 'relative',
        width: SCREEN_WITH,
    },
    ratingConatiner: {
        position: "absolute",
        top: 10,
        right: 8
    },
    ratingText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: SCREEN_WITH,
        height: 150,
    },
    detainSec: {
        flexDirection: 'row',
        padding: 10
    },
    todetainSec: {
        borderLeftWidth: 2,
        borderColor: colors.green,
    },
    bDetail: {
        fontSize: 17,
        fontWeight: '700',
        marginLeft: 10
    }
})