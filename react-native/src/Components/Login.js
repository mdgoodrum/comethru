import React, { Component } from 'react'
import { View, TouchableOpacity, Button, Text, StyleSheet } from 'react-native'
import { MainOrange } from '../Pallet'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.topBar}>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>sign up!</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    signUpButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        height: '5%',
        width: '20%',
        marginRight: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButtonText:{
        color:'#fff',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    topBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})