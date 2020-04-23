import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Markdown from 'react-native-simple-markdown';
import { format, parse } from 'fecha';

import { BackgroundGray } from '../Pallet'

import Separator from './Separator';
import Navbar from './Navbar';

let test = `#Heading 1

##Heading 2 

from test`

export default class EventDetail extends Component {
    constructor(props) {
        super(props);
        // @spader All the props for this are in this.props.location.state,
        // because this component is created from a Link component.
    }

    render() {
        let parsedStart = parse(
            this.props.location.state.data.start_time.replace('T', ' '),
            'YYYY-MM-DD HH:mm:ss',
        )
        let startTime = format(parsedStart, 'dddd MMMM Do, YYYY')
        startTime = startTime + ' at '
        startTime = startTime + format(parsedStart, 'HH:mm A')

        let parsedEnd = parse(
            this.props.location.state.data.end_time.replace('T', ' '),
            'YYYY-MM-DD HH:mm:ss',
        )
        let endTime = format(parsedEnd, 'dddd MMMM Do, YYYY')
        endTime = endTime + ' at '
        endTime = endTime + format(parsedEnd, 'HH:mm A')

        return (
            <View style={styles.content}>
                <Navbar />
                <Separator />
                <ScrollView style={styles.content}>
                    <Text style={styles.title}>{this.props.location.state.data.title}</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../Assets/beer-bourbon-bbq.png')} />
                    </View>
                    <View style={styles.locationAndTime}>
                        <View style={styles.location}>
                            <Text style={styles.locationHeader}>Location</Text>
                            {/* <Text>{this.props.location.state.data.location}</Text> */}
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
                            {this.props.location.state.data.description}
                        </Markdown>
                    </View>
                </ScrollView>
            </View>
        );
    }
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
    debug: {
        borderColor: 'red',
        borderWidth: 1
    },
    description: {
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
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
        height: '20%',
        width: '100%',
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
