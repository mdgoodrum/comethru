import React, { Component } from 'react';
import { useSelector } from 'react-redux'

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Markdown from 'react-native-simple-markdown';
import { format, parse } from 'fecha';

import { findEvent } from '../Utils'

import { BackgroundGray, MainOrange } from '../Pallet'

import Separator from './Separator';
import Navbar from './Navbar';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    NONE: 0,
    INTERESTED: 1,
    GOING: 2
})

const InterestToggle = (props) => {
    const interests = useSelector(state => state.interests)

    let state = InterestState.NONE
    for (let interest of interests) {
        if (interest.event === props.event.pk) {
            state = InterestState[interest.status]
        }
    }

    let goingStyle = state === InterestState.GOING ? styles.selectedInterestButton : styles.unselectedInterestButton
    let interestedStyle = state === InterestState.Interested ? styles.selectedInterestButton : styles.unselectedInterestButton
    return (
        <View style={styles.interestButtons}>
            <TouchableOpacity style={goingStyle}>
                <Text>Going</Text>
            </TouchableOpacity>
            <TouchableOpacity style={interestedStyle}>
                <Text>Interested</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EventDetail = (props) => {
    const events = useSelector(state => state.events)
    const user = useSelector(state => state.user)

    const event = findEvent(events, props.route.params.eventId)
    const startTime = parseTime(event.start_time)
    const endTime = parseTime(event.end_time)

    return (
        <View style={styles.content}>
            <Navbar />
            <Separator />
            <ScrollView style={styles.content}>
                <Text style={styles.title}>{event.title}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../Assets/shaky-boots.jpg')} />
                </View>

                <Text style={styles.time}> {startTime} - {endTime} </Text>

                <Text style={styles.location}>Atlantic Station</Text>
                <InterestToggle event={event}></InterestToggle>

                <View style={styles.description}>
                    <Markdown styles={rawStyles.markdown}>
                        {event.description}
                    </Markdown>
                </View>
            </ScrollView>
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
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',

    },
    description: {
        textAlign: 'left',
        margin: '5%',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        flexBasis: '6%',
        paddingTop: '3%',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        height: '80%',
        width: '90%',
        borderRadius: 10,
    },
    locationAndTime: {
        display: 'flex',
        flexDirection: 'row',
    },
    location: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginLeft: '5%',
    },
    time: {
        marginLeft: '4%',
        fontWeight: 'bold',
        color: MainOrange,
        fontSize: 16,
        marginBottom: '1%'
    },
    locationHeader: {
        fontWeight: 'bold'
    },
    timeHeader: {
        fontWeight: 'bold'
    },
    interestButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    selectedInterestButton: {
        backgroundColor: MainOrange,
    },
    unselectedInterestButton: {

    }
});
