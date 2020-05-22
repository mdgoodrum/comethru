import React, { Component, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
const axios = require('axios');

import { apiEndpoint } from '../API'

import { BackgroundGray, MainOrange } from '../Pallet'
import { fetchVenuesForLoadedEvents, fetchEvents } from '../Utils'
import CardList from './CardList';

import { useDispatch, useSelector } from 'react-redux'
import { updateEvents } from '../Store'
import { useNavigation } from '@react-navigation/native';

export default Home = (props) => {
    const events = useSelector(state => state.events)
    const navigator = useNavigation()
    const dispatch = useDispatch()

    onPressCreateAddress = () => {
        navigator.navigate('Create Address')
    }

    onPressCreateEvent = () => {
        navigator.navigate('Create Event')
    }

    onPressCreateVenue = () => {
        navigator.navigate('Create Venue')
    }

    useEffect(() => fetchEvents(dispatch), [])

    return (
        <View>
            <SafeAreaView style={styles.safeArea}>
                <View>
                    <ScrollView style={styles.cardListContainer}>
                        <CardList />
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPressCreateAddress()}
                        >
                        <Text style={styles.buttonText}>Create Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPressCreateVenue()}
                        >
                        <Text style={styles.buttonText}>Create Venue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPressCreateEvent()}
                        >
                        <Text style={styles.buttonText}>Create Event</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <Navbar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundGray,
    },
    safeArea: {
        height: '92%',
    },
    cardListContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        height: '88%' // @spader this doesnt look great but at least makes mike's buttons visible
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    myButton: {
        height: 40,
        width: 80,
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});
