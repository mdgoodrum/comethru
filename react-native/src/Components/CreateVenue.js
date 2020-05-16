import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'

export default CreateVenue = (props) => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [twentyOne, setTwentyOne] = useState(false)

    onPress = () => {
        const body = {
            "name": name,
            "address": null, // placeholder for now till we decide how we wanna do this
            "twenty_one": twentyOne
        };
        axios
            .post(apiEndpoint('/models/venues/'), body)
            .then(() => {
                props.navigation.navigate('Events')
            })
            .catch(error => {
                console.log(error)
            });
    }

    onChangeName = (name) => {
        setName(name)
    }

    onChangeAddress = (address) => {
        setAddress(address)
    }

    onChangeTwentyOne = (input) => {
        if (input === '') {
            setTwentyOne(false)
        } else {
            setTwentyOne(true)
        }
    }

    cancel = () => {
        props.navigation.navigate('Events')
    }

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