import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            date_published: "",
            short_description: "",
            description: "",
            twenty_one: false,
            tags: [],
            organizer: "",
            venue: "",
            start_time: "",
            end_time: "",
        }
    }

    onPress() {
        const body = {
            "title": "Party at Mikes 6666",
            "date_published": "2020-04-27T20:02:59Z",
            "short_description": "Best party ever",
            "description": "you already know!",
            "twenty_one": true,
            "organizer": "http://localhost:8000/api/models/users/1/",
            "start_time": "2020-04-27T20:04:20Z",
            "end_time": "2020-04-27T20:04:22Z"
        };
        axios
            .post(apiEndpoint('/models/events/'), body)
            .then(() => {
                this.props.history.push('/home')
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPress()}
                        >
                        <Text style={styles.createEventButtonText}>Create Event</Text>
                    </TouchableOpacity>
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