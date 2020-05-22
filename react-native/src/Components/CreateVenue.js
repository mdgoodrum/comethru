import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native'
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
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.textFieldsContainer}>
                    <Text style={styles.sectionTitle}>Create Venue</Text>
                    <Text style={styles.texFieldLabel}>Venue Name</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeName(text)} />
                    <Text style={styles.texFieldLabel}>Venue Address</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeAddress(text)} />
                    <Text style={styles.texFieldLabel}>21+</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeTwentyOne(text)} />
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
                        <Text style={styles.buttonText}>Create Venue</Text>
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