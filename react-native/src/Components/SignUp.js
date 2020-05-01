import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { MainOrange } from '../Pallet'
import { apiEndpoint } from '../API'

import Navbar from './Navbar'
import Separator from './Separator'

import ImagePicker from 'react-native-image-picker'
import axios from 'axios'
const PhotoPlaceholder = require('../Assets/photo-placeholder.png')

const OpenSans = props => <Text style={{ ...props.style, fontFamily: 'OpenSans-Bold' }}>{props.children}</Text>
export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }

    onChangeUsername(input) {
        this.setState({
            username: input
        })
    }

    onChangePassword(input) {
        this.setState({
            password: input
        })
    }

    onChangeEmail(input) {
        this.setState({
            email: input
        })
    }



    onPressSignUp() {
        axios
            .post(apiEndpoint('/add_user/'), { username: this.state.username, password: this.state.password })
            .then(response => {
                console.log('it worked!')
            })
            .catch(error => {
                // @spader @debug
                console.log('bad :(')
                console.log(error.message)
            });
        console.log('pressed')
    }

    render() {
        return (
            <View>
                <Navbar />
                <Separator />
                <View style={styles.spacer} />
                <View style={styles.profilePictureContainer}>
                    <Image style={styles.profilePicture} source={PhotoPlaceholder} />
                </View>
                <View style={styles.slogan}>
                    <Text>why don't you <OpenSans style={{ fontSize: 16 }}>comethru</OpenSans>?</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.field} >
                        <TextInput
                            placeholder='username'
                            autoCapitalize='none'
                            onChangeText={text => this.onChangeUsername(text)}
                            style={styles.fieldInput} />
                    </View>

                    <View style={styles.field} >
                        <TextInput
                            placeholder='email'
                            autoCapitalize='none'
                            onChangeText={text => this.onChangeEmail(text)}
                            style={styles.fieldInput} />
                    </View>

                    <View style={styles.field} >
                        <TextInput
                            placeholder=' password'
                            autoCapitalize='none'
                            secureTextEntry={true}
                            onChangeText={text => this.onChangePassword(text)}
                            style={styles.passwordInput} />
                    </View>

                    <View style={styles.signUpButtonContainer}>
                        <TouchableOpacity
                            style={styles.signUpButton}
                            onPress={() => this.onPressSignUp()}
                        >
                            <Text style={styles.signUpButtonText}>sign up!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

const fieldInputStyle = {
    width: '60%',
    height: '100%',
    borderColor: MainOrange,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: '5%'
}
const passwordInputStyle = {
    ...fieldInputStyle,
    color: MainOrange
}
const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
    },
    spacer: {
        height: '5%'
    },
    profilePictureContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: "20%",
        width: "100%",
    },
    profilePicture: {
        height: undefined,
        width: undefined,
        aspectRatio: 1
    },
    field: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
        marginTop: '2%',
        width: '100%',
        height: '4%',
    },
    fieldInput: fieldInputStyle,
    passwordInput: passwordInputStyle,
    signUpButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5%',
        width: '100%',
        marginTop: '5%'
    },
    signUpButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        height: '100%',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 24,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    slogan: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
    sloganText: {
    }
})