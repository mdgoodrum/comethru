import React, { Component } from 'react';
import { useSelector } from 'react-redux'

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Markdown from 'react-native-simple-markdown';
import { format, parse } from 'fecha';

import { findEvent } from '../Utils'

import { BackgroundGray } from '../Pallet'

import Separator from './Separator';
import Navbar from './Navbar';

const parseTime = (time) => {
    let parsed = parse(
        time.replace('T', ' '),
        'YYYY-MM-DD HH:mm:ss',
    )
    let endTime = format(parsed, 'dddd MMMM Do, YYYY')
    endTime = endTime + ' at '
    return endTime + format(parsed, 'HH:mm A')


}
export default EventDetail = (props) => {
    const events = useSelector(state => state.events)

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
                        source={require('../Assets/beer-bourbon-bbq.png')} />
                </View>
                <View style={styles.locationAndTime}>
                    <View style={styles.location}>
                        <Text style={styles.locationHeader}>Location</Text>
                        {/* <Text>{this.props.location}</Text> */}
                        <Text>Atlantic Station</Text>
                        <Text>241 20th Street NW</Text>
                        <Text>Atlanta, GA</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeHeader}>Time</Text>
                        <Text style={{fontSize: 12}}> {startTime} </Text>
                        <Text style={{fontSize: 12}}> {endTime} </Text>
                    </View>
                </View>
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
        height: '30%',
        minHeight: '30%',
        width: '100%'
    },
    image: {
        height: '80%',
        width: '90%',
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
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginLeft: '2%',
    },
    locationHeader: {
        fontWeight: 'bold'
    },
    timeHeader: {
        fontWeight: 'bold'
    },
});
