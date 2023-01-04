import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/Styles'
// import Swiper from 'react-native-swiper'

const SignInWelcomScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.WcTextContainer}>
        <Text style={styles.WcText}>Discover Resturents</Text>
        <Text style={styles.WcText}>In Your Area</Text>
      </View>
      {/* slaider */}
      <View style={styles.slaiderContainer}>
        <Image
        // resizeMethod='contain'
        style={styles.slaiderImg}
        source={require("../../../assets/image/pizza.jpg")} />
      </View>
      {/* sign in & creatae an account btns */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
        onPress={()=> {navigation.navigate("SignInScreen")}}
        style={styles.signinWith}>
            <Text style={styles.signInWText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signinWith}>
            <Text style={styles.signInWText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInWelcomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
      },
    WcTextContainer: {
        marginTop: 20
    },
    WcText: {
        textAlign: 'center',
        color: colors.green,
        fontSize: 25,
        fontWeight: '900',
        marginTop: 8
    },
    slaiderContainer: {
        marginVertical: 20,
        marginHorizontal: 15,
        alignSelf: 'center'
    },
    // slaiderImg: {
    //     width: 180,
    //     height: 300,
    // },
    btnContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    signinWith: {
        backgroundColor: colors.orange_dark,
        width: '55%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 15,
        borderRadius: 10,
    },
    signInWText: {
        fontWeight: '800',
        fontSize: 19,
        color: colors.white
    },
})