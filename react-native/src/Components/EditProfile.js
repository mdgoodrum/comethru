import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default EditProfile = (props) => {
    const user = useSelector(state => state.loggedInUser)

    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)

    onPress = () => {
        const body = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email
        };
        console.log(body)
        axios
            .patch(apiEndpoint(`/models/users/${user.id}/`), body)
            .then(() => {
                props.navigation.navigate('Events')
            })
            .catch(error => {
                console.log(error)
            });
    }

    onChangeFirstName = (firstName) => {
        setFirstName(firstName)
    }

    onChangeLastName = (lastName) => {
        setLastName(lastName)
    }

    onChangeEmail = (email) => {
        setEmail(email)
    }

    cancel = () => {
        props.navigation.navigate('Events')
    }

    return (
        <View style={styles.content}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.textFieldsContainer}>
                    <Text style={styles.sectionTitle}>Edit Profile</Text>
                    <Text style={styles.texFieldLabel}>First Name</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        placeholder={firstName}
                        onChangeText={text => this.onChangeFirstName(text)} />
                    <Text style={styles.texFieldLabel}>Last Name</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        placeholder={lastName}
                        onChangeText={text => this.onChangeLastName(text)} />
                    <Text style={styles.texFieldLabel}>Email</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        placeholder={email}
                        onChangeText={text => this.onChangeEmail(text)} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.cancel()}
                        >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPress()}
                        >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        height: '100%',
    },
    safeArea: {
        height: '92%'
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '40%',
    },
    myButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    textFieldEntry: {
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        height: '8%',
        marginTop: '12%',
        textAlign: 'center'
    },
    textFieldsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60%',
        paddingTop: '5%',
    },
    texFieldLabel: {
        color: 'black',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '16%'
    },
})