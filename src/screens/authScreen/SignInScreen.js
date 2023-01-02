import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { colors, tittle } from '../../global/Styles'

const SignInScreen = () => {
  return (
    <View>
        {/* Header sec */}
        <Header tittle="go Back" type="arrow-left" />
        {/* tittle */}
        <View style={styles.tittleText}>
            <Text style={tittle}>Sign In</Text>
        </View>
        {/* sign in text paragraph text  */}
        <View style={styles.signInTextContainer}>
            <Text style={styles.signInText}>Lorem ipsum amet dolor sit amet consectetur.</Text>
            <Text style={styles.signInText}>ipsum sit amet adipisicing.</Text>
        </View>
        {/* Inputs */}
        <View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.inputS}
                placeholder='Enter Email' />
                <TextInput 
                style={styles.inputS} 
                placeholder='Password' />
            </View>
            {/* sign in btn */}
            <View>
                <Text>Sign in btn</Text>
            </View>
        </View>
        {/* forgote Password sec */}
        <View>
            <Text>Forgote Password</Text>
            <Text>OR</Text>
        </View>
        {/* authentication with google and facebook */}
        <View>
            <Text>google</Text>
            <Text>fb</Text>
        </View>
        <View>
            <Text>If Dont Have an Account?</Text>
            <Text>Sign UP</Text>
        </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    tittleText: {
        marginTop: 15,
    },
    signInTextContainer: {
        alignItems: 'center'
    },
    signInText: {
        fontSize: 16,
        fontWeight: '800',
    },
    inputContainer: {
        marginTop: 17
    },
    inputS: {
        borderWidth: 1,
        borderColor: colors.green,
        margin: 10,
        borderRadius: 10,
        padding: 13,
        color: colors.green,
    }
})