import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'

import Markdown from 'react-native-simple-markdown';
import { format, parse } from 'fecha';

import { findEvent, findVenue, getInterestState } from '../Utils'

import { BackgroundGray, MainOrange } from '../Pallet'

import Navbar from './Navbar';
import { useFocusEffect } from '@react-navigation/native';
import { apiEndpoint } from '../API';
import { updateEventInterest } from '../Store';

const parseTime = (time) => {
    let parsed = parse(
        time.replace('T', ' '),
        'YYYY-MM-DD HH:mm:ss',
    )
    let formattedTime = format(parsed, 'MMMM Do')
    formattedTime = formattedTime + ' at '
    return formattedTime + format(parsed, 'HH:mm A')
}

// @spader These have to match up with what's in Python, which feels error prone
const InterestState = Object.freeze({
    None: 0,
    Going: 1,
    Interested: 2
})

const InterestToggle = (props) => {
    const interests = useSelector(state => state.interests)
    let interest = getInterestState(interests, props.eventId) || '';
    const dispatch = useDispatch()

    let onPress = (desiredState) => {
        interest.status = desiredState
        dispatch(updateEventInterest({...interests}))
    }

    // Going button, with an icon if it's selected
    let goingButtonChildren = []
    if (interest.status === InterestState.Going) {
        goingButtonChildren.push(
            <Icon
                name="check"
                size={30}
                color="#279127" />)
    }
    goingButtonChildren.push(<Text key={'unique'} style={styles.buttonText}>Going!</Text>)

    let goingButton =
        <TouchableOpacity
            style={styles.interestButton}
            onPress={() => onPress(InterestState.Going)}>
            {goingButtonChildren}
        </TouchableOpacity>

    // Interested button. Ditto.
    let interestedButtonChildren = []
    if (interest.status === InterestState.Interested) {
        interestedButtonChildren.push(
            <Icon
                name="check"
                size={30}
                color="#279127" />)
    }
    interestedButtonChildren.push(<Text key={'unique'} style={styles.buttonText}>Interested!</Text>)

    let interestedButton =
        <TouchableOpacity
            style={styles.interestButton}
            onPress={() => onPress(InterestState.Interested)}>
            {interestedButtonChildren}
        </TouchableOpacity>

    // @spader The text shifts when you click one of these
    return (
        <View style={styles.interestButtons}>
            {goingButton}
            {interestedButton}
        </View>
    )
}

export default EventDetail = (props) => {
    const interests = useSelector(state => state.interests)
    const events = useSelector(state => state.events)
    const venues = useSelector(state => state.venues)
    const user = useSelector(state => state.loggedInUser)

    const eventId = props.route.params.eventId 
    const event = findEvent(events, eventId)
    const venue = findVenue(venues, event.venue)

    useFocusEffect(useCallback(() => {
        // Do nothing on focus 

        // PUT back to the database on blur. This callback is run on cleanup, which == blur.
        return () => {
            let interest = getInterestState(interests, eventId) || ''
            // @spader There's a bug where the database gets updated but the local copy doesn't.
            axios
                .put(apiEndpoint('/event_interest/'), {
                    'event': event.id,
                    'user': user.id,
                    'status': interest.status
                })
                .then(response => {
                })
                .catch(error => {
                    console.log('bad')
                })
        }
    }, []))

    const startTime = parseTime(event.start_time)
    const endTime = parseTime(event.end_time)

    return (
        <View style={styles.page}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../Assets/shaky-boots.jpg')} />
                    </View>

                    <Text style={styles.time}> {startTime} - {endTime} </Text>

                    <Text style={styles.title}>{event.title}</Text>

                    <Text style={styles.location}>{venue.name}</Text>
                    <InterestToggle 
                      eventId={eventId}
                    />

                    <Text style={styles.descriptionHeader}>Details</Text>
                    <View style={styles.description}>
                        <Markdown styles={rawStyles.markdown}>
                            {event.description}
                        </Markdown>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Navbar />
        </View>
    );
}

const rawStyles = {
    markdown: {
        paragraph: {
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginBottom: 16,
        }
    },
    interestButton: {
        height: '100%',
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%'
    },
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    description: {
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
    },
    descriptionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginBottom: '2%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginBottom: '1%'
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '3%',
        marginTop: '3%'
    },
    image: {
        height: '100%',
        width: '90%',
        borderRadius: 10,
    },
    locationAndTime: {
        display: 'flex',
        flexDirection: 'row',
    },
    location: {
        marginLeft: '5%',
        marginBottom: '1%'
    },
    time: {
        marginLeft: '4%',
        fontWeight: 'bold',
        color: MainOrange,
        fontSize: 16,
        marginBottom: '1%'
    },
    interestButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '5%',
        marginBottom: '5%',
        height: '10%',
    },
    selectedInterestButton: {
        ...rawStyles.interestButton,
        backgroundColor: MainOrange,
    },
    interestButton: {
        ...rawStyles.interestButton,
        backgroundColor: MainOrange,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    checkIcon: {
        paddingLeft: '2%'
    },
});
