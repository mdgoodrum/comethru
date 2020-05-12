import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           name: '',
           address: '',
           twenty_one: false
        }
    }

    onPress() {
        const body = {
            "name": this.state.name,
            "address": 'http://localhost:8000/api/models/addresses/1/', // placeholder for now till we decide how we wanna do this
            "twenty_one": this.state.twenty_one
        };
        axios
            .post(apiEndpoint('/models/venues/'), body)
            .then(() => {
                this.props.navigation.navigate('Events')
            })
            .catch(error => {
                console.log(error)
            });
    }

    onChangeName(name) {
        this.setState({
            name
        })
    }

    onChangeAddress(address) {
        this.setState({
            address
        })
    }

    onChangeTwentyOne(input) {
        if (input === '') {
            this.setState({
                twenty_one: false
            })
        } else {
            this.setState({
                twenty_one: true
            })
        }
    }

    cancel() {
        this.props.navigation.navigate('Events')
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.usernameAndPasswordContainer}>
                    <Text style={styles.usernameAndPasswordText}>Venue Name</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeName(text)} />
                    <Text style={styles.usernameAndPasswordText}>Venue Address</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeAddress(text)} />
                    <Text style={styles.usernameAndPasswordText}>21+</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeTwentyOne(text)} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.cancel()}
                        >
                        <Text style={styles.createEventButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPress()}
                        >
                        <Text style={styles.createEventButtonText}>Create Venue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    myButton: {
        height: 80,
        width: 80,
        borderRadius: 160,
        backgroundColor: MainOrange,
        justifyContent: 'center',
    },
    createEventButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    usernameAndPasswordEntry: {
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: '60%',
        height: '15%',
        marginBottom: '5%',
        textAlign: 'center'
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
    usernameAndPasswordText: {
        color: MainOrange,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '6%'
    },
})