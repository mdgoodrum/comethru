import React, { Component, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
const axios = require('axios');

import { apiEndpoint } from '../API'

import { BackgroundGray, MainOrange } from '../Pallet'
import { fetchVenuesForLoadedEvents, fetchEvents } from '../Utils'
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

    useEffect(() => fetchEvents(dispatch), [])

    return (
        <View>
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <CardList />
                </ScrollView>
            </View>
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
            </SafeAreaView>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
