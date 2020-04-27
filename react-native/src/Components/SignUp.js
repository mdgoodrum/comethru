import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { MainOrange } from '../Pallet'

import Navbar from './Navbar'
import Separator from './Separator'

import ImagePicker from 'react-native-image-picker'
const PhotoPlaceholder = require('../Assets/photo-placeholder')

const ProfilePicture = props => {
    return (
        <Image source={PhotoPlaceholder}></Image>
    )
}

export default class SignUp extends Component {
    render() {
        return (
            <View>
                <Navbar />
                <Separator />
                <ProfilePicture />
                <View style={styles.content}>
                    <View style={styles.field} >
                        <Text>username</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>

                    <View style={styles.field} >
                        <Text>email</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>

                    <View style={styles.field} >
                        <Text>password</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>

                    <View style={styles.field} >
                        <Text>first name</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>

                    <View style={styles.field} >
                        <Text>last name</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>

                    <View style={styles.field} >
                        <Text>birthday</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>


                    <View style={styles.field} >
                        <Text>address</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>

                    <View style={styles.field} >
                        <Text>phone number</Text>
                        <TextInput style={styles.fieldInput}></TextInput>
                    </View>


                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%'
    },
    field: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        height: '5%',
        marginLeft: '1%'
    },
    fieldInput: {
        width: '60%',
        height: '50%',
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 3
    }
})