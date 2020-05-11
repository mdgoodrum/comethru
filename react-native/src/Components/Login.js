import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import { MainOrange, FooterGray } from '../Pallet'
import { apiEndpoint } from '../API'
import { logIn } from '../Store'

import { fetchInfoAfterLogin } from '../Utils'

export default Login = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    onChangeUsername = (input) => {
        setUsername(input)
    }

    onChangePassword = (input) => {
        setPassword(input)
    }

    onPressLogin = () => {
        axios
            .post(apiEndpoint('/authorize/'), { 
                username: username, 
                password: password 
            })
            .then(response => {
                let user = response.data
                dispatch(logIn(user))
                fetchInfoAfterLogin(user, dispatch)
                props.navigation.navigate('Events')
            })
            .catch(error => {
                // @spader @debug
                console.log('Error in Login component after authorization:')
                console.log(error)
            });
    }

    onPressSignUp = () => {
        props.navigation.navigate('Sign Up')
    }

    return (
        <View style={styles.content}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => this.onPressSignUp()}
                >
                    <Text style={styles.signUpButtonText}>sign up!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>comethru</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../Assets/attractive-people.png')} />
            </View>
            <View style={styles.usernameAndPasswordContainer}>
                <Text style={styles.usernameAndPasswordText}>Username</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeUsername(text)} />
                <Text style={styles.usernameAndPasswordText}>Password</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    onChangeText={text => this.onChangePassword(text)}
                />
                <Text style={styles.forgotText}>forgot username or password?</Text>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => this.onPressLogin()}
                >
                    <Text style={styles.loginButtonText}>log in!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Sign Up</Text>
                <Text style={styles.footerText}>Log In</Text>
                <Text style={styles.footerText}>Help</Text>
                <Text style={styles.footerText}>Terms and Conditions</Text>
                <Text style={styles.footerText}>Contact Us</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    signUpButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        marginRight: '5%',
        height: '75%',
        minHeight: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    loginButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    topBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: '5%',
        width: '100%'
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '5%',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 32,
        margin: "3%"
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    usernameAndPasswordContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '40%',

    },
    usernameAndPasswordEntry: {
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: '60%',
        height: '7%',
        marginBottom: '5%',
        textAlign: 'center'
    },
    usernameAndPasswordText: {
        color: MainOrange,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '6%'
    },
    forgotText: {
        fontStyle: 'italic',
        marginBottom: '5%'
    },
    footer: {
        backgroundColor: FooterGray,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '50%',
    },
    footerText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '2%'
    }
})