import React, { Component, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
const axios = require('axios');

import { apiEndpoint } from '../API'

import { BackgroundGray, MainOrange } from '../Pallet'

import CardList from './CardList';

import { useDispatch, useSelector } from 'react-redux'
import { updateEvents } from '../Store'

export default Home = (props) => {
    const events = useSelector(state => state.events)
    const dispatch = useDispatch()

    onPressCreateEvent = () => {
        props.navigation.navigate('Create Event')
    }

    onPressCreateVenue = () => {
        props.navigation.navigate('Create Venue')
    }

    useEffect(() =>{
        axios
            .get(apiEndpoint('/models/events/')) // @spader this should be an endpoint
            .then(response => {
                console.log('Got events!', response.data);
                dispatch(updateEvents(response.data))
            })
            .catch(error => {
                console.log('Failed to retrieve event data.');
                console.log(error);
            });
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <CardList />
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity   
                    style={styles.myButton}
                    onPress={() => this.onPressCreateVenue()}
                    >
                    <Text style={styles.createEventButtonText}>Create Venue</Text>
                </TouchableOpacity>
                <TouchableOpacity   
                    style={styles.myButton}
                    onPress={() => this.onPressCreateEvent()}
                    >
                    <Text style={styles.createEventButtonText}>Create Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundGray,
    },
    content: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    buttonContainer: {
        alignItems: 'center',
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
});
