// RN Components
import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Spinner from 'react-native-spinkit'
// import ImagePicker from 'react-native-image-picker' # use this later

// Libraries
import axios from 'axios'

// Utilities
import { MainOrange } from '../Pallet'
import { apiEndpoint, ErrorCodes } from '../API'
const PhotoPlaceholder = require('../Assets/photo-placeholder.png')

// CT Components
import Navbar from './Navbar'
import Separator from './Separator'


const OpenSans = props => <Text style={{ ...props.style, fontFamily: 'OpenSans-Bold' }}>{props.children}</Text>


const IdentifierState = Object.freeze({
    NoInput: 0,
    Ok: 1,
    AlreadyTaken: 2,
    // too short, too long, forbidden characters
})

const IdentifierField = props => {
    switch (props.state) {
        case (IdentifierState.NoInput): {
            return (
                <View style={styles.field} >
                    <TextInput
                        autoCapitalize='none'
                        {...props}
                      style={styles.fieldInput} />
                </View>
            )
        }
        case (IdentifierState.AlreadyTaken): {
            return (
                <View style={styles.field} >
                    <TextInput
                        autoCapitalize='none'
                        {...props}
                        style={styles.fieldInput} />
                    <Icon 
                        name="cross" 
                        size={30} 
                        color="#9c2d17" />
                </View>
            )
        }
        case (IdentifierState.Ok): {
            return (
                <View style={styles.field} >
                    <TextInput
                        autoCapitalize='none'
                        {...props}
                        style={styles.fieldInput} />
                    <Icon 
                        name="check" 
                        size={30} 
                        color="#279127" />
                </View>
            )
        }
    }
}


export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            usernameState: IdentifierState.NoInput,
            email: "",
            emailState: IdentifierState.NoInput,
            password: "",
        }
    }

    onChangeUsername(input) {
        let nextState = input.length === 0 ? IdentifierState.NoInput : this.state.usernameState
        this.setState({
            username: input,
            usernameState: nextState
        })

        if (input.length === 0) return

        // Ask the database if this user exists
        // @spader I don't know what the latency will be on this. Maybe we can
        // put up a spinner if it's more than a few hundred ms. It'd also be a good
        // idea to not call this on every character change. Maybe batch it or wait
        // for the TextInput to blur before we try.
        axios
            .post(apiEndpoint('/does_user_exist/'), {
                username: input
            })
            .then(response => {
                let nextState = response.data.message ? IdentifierState.AlreadyTaken : IdentifierState.Ok
                this.setState({
                    usernameState: nextState
                })
            })
            .catch(error => {
                // @spader @debug
                console.log('Couldn not hit /does_user_exist/', error.response.data)
            })

    }

    onChangePassword(input) {
        this.setState({
            password: input
        })
    }

    onChangeEmail(input) {
        // @spader Does this re-render when length > 0?
        let nextState = input.length === 0 ? IdentifierState.NoInput : this.state.emailState
        this.setState({
            email: input,
            emailState: nextState
        })
        
        if (input.length === 0) return

        axios
            .post(apiEndpoint('/does_user_exist/'), {
                email: input
            })
            .then(response => {
                let nextState = response.data.message ? IdentifierState.AlreadyTaken : IdentifierState.Ok
                this.setState({
                    emailState: nextState
                })
            })
            .catch(error => {
                // @spader @debug
                console.log('Couldn not hit /does_user_exist/', error.response.data)
            })
    }

    onBlurUsername(input) {
        console.log('burred')
    }

    onPressSignUp() {
        axios
            .post(apiEndpoint('/add_user/'), {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            })
            .then(response => {
                console.log('it worked!')
            })
            .catch(error => {
                let response = error.response.data
                switch (response.error_code) {
                    case ErrorCodes.USER_ALREADY_EXISTS: {
                        console.log('The user already exists.')
                        break
                    }
                    default: {
                        console.log('Internal Server Error')
                    }
                }
            });
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
                    <IdentifierField 
                      state={this.state.usernameState}
                      placeholder=' username'
                      onChangeText={text => this.onChangeUsername(text)}
                    />
                    <IdentifierField 
                      state={this.state.emailState}
                      placeholder=' email'
                      onChangeText={text => this.onChangeEmail(text)}
                    />

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
    flex: 1,
    height: '100%',
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
        alignItems: 'center',
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
        width: '60%',
        height: '4%',
        borderColor: MainOrange,
        borderWidth: 2
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
    },
    spinner: {
        marginRight: '5%'
    }
})