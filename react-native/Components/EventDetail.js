import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview'
import { format, parse } from 'fecha';

import { BackgroundGray } from '../Pallet'

import Separator from './Separator';
import Navbar from './Navbar';

export default class EventDetail extends Component {
    constructor(props) {
        super(props);
        // @spader All the props for this are in this.props.location.state,
        // because this component is created from a Link component.

    }

    render() {
        const start_time = parse(
            this.props.location.state.data.start_time.replace('T', ' '),
            'YYYY-MM-DD HH:mm:ss',
        );
        const end_time = parse(
            this.props.location.state.data.end_time.replace('T', ' '),
            'YYYY-MM-DD HH:mm:ss',
        );

        // the piece of shit web view is utterly broken
        return (
            <View style={styles.content}>
                <Navbar></Navbar>
                <Separator></Separator>
                <Text style={styles.title}>{this.props.location.state.data.title}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../Assets/beer-bourbon-bbq.png')} />
                </View>
                <View style={styles.locationAndTime}>
                    <View style={styles.location}>
                        <Text style={styles.locationElement}>Location</Text>
                        <Text>{this.props.location.state.data.location}</Text>
                        <Text>Atlanta</Text>
                    </View>
                    <View style={styles.time}>
                        <Text>Time</Text>
                        <Text>hi</Text>
                        <Text>there</Text>
                    </View>
                </View>
                <WebView
                    style={{
                        backgroundColor: 'red'
                    }}
                    source={{
                        html: this.props.location.state.data.description,
                    }}>
                </WebView>
                <Text>
                    {format(start_time, 'MMMM Do, YYYY') +
                        ' ' +
                        format(start_time, 'HH:mm')}
                </Text>
                <Text>
                    {format(end_time, 'MMMM Do, YYYY') + ' ' + format(end_time, 'HH:mm')}
                </Text>
            </View>
        );
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
        backgroundColor: BackgroundGray,
        borderColor: 'red',
        borderWidth: 1
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
        flexBasis: '25%',
        marginBottom: '2%',
    },
    image: {
        width: 'auto',
        height: '100%',
        margin: '5%',
    },
    locationAndTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    location: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '30%',
    },
    time: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '30%',
    }
});
