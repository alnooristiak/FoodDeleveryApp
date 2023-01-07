import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { colors, parameters, tittle } from '../../global/Styles'
import { Button } from 'react-native-elements'
// import DrawerNavigation from './DrawerNavigation'

const SignInScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                {/* Header sec */}
                <Header tittle="go Back" navigation={navigation} type="arrow-left" />
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
                    {/* sign in btn DrawerNavigation ClientTabs  */}
                    <View style={{ marginVertical: 10 }}>
                        <Button
                            onPress={()=> {navigation.navigate('ClientTabs')}}
                            buttonStyle={parameters.buttonStyle}
                            titleStyle={parameters.buttonTittle}
                            title="Sign In" />
                    </View>
                </View>
                {/* forgote Password sec */}
                <View>
                    <Text
                        style={{
                            ...styles.signInText,
                            textDecorationLine: 'underline',
                            textAlign: 'center'
                        }}>
                        Forgote Password</Text>
                    <Text style={styles.orSec}>OR</Text>
                </View>
                {/* authentication with google and facebook */}
                <View>
                    <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.signinWith}>
                        <Text
                            style={styles.signInWText}>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                    {/* ======##===== */}
                    <TouchableOpacity
                    onPress={() => {}}
                        style={{
                            ...styles.signinWith,
                            backgroundColor: colors.green
                        }}>
                        <Text
                            style={styles.signInWText}>
                            Sign in with Facebook
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dontHAc}>
                    <Text style={styles.signUpTx}>If Dont Have an Account?</Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.signUPbtn}>
                            Sign in UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    tittleText: {
        marginVertical: 15,
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
    },
    orSec: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: colors.green,
        marginVertical: 20,
    },
    signinWith: {
        backgroundColor: colors.orange_dark,
        width: '85%',
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
    dontHAc: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 13
    },
    signUpTx: {
        fontSize: 17,
        fontWeight: '500',
    },
    signUPbtn: {
        color: colors.green,
        fontWeight: '500',
        fontSize: 19,
        marginLeft: 8
    },
})