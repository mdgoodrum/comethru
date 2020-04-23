import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import { MainOrange } from '../Pallet'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeUsername(usernameInput) {
        this.setState({
            username: usernameInput
        })
    }

    onChangePassword(passwordInput) {
        this.setState({
            password: passwordInput
        })
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.topBar}>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>sign up!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>ComeThru</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../Assets/horse.jpg')} />
                </View>
                <View style={styles.usernameAndPasswordContainer}>
                    <Text>Username</Text>
                    <Text>Password</Text>
                    <TextInput style={styles.usernameAndPasswordEntry} onChangeText={text => this.onChangeUsername(text)}></TextInput>
                    <TextInput onChangeText={this.onChangePassword}></TextInput>
                </View>

            </View>
        )
    }
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    signUpButtonText: {
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
        maxHeight: '5%',
        width: '100%',

    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '5%',
        borderWidth: 1,
        borderColor: 'red'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 32,
        margin: "5%"
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

    attractivePeople: {

    },
    usernameAndPasswordContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,

    },
    usernameAndPasswordEntry: {
        borderColor: 'red',
        borderWidth: 1
    },

})