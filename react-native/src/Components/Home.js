import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
const axios = require('axios');

import { apiEndpoint } from '../API'

import { BackgroundGray, MainOrange } from '../Pallet'

import CardList from './CardList';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    onPressCreateEvent() {
        this.props.history.push('/createevent')
    }

    componentDidMount() {
        axios
            .get(apiEndpoint('/models/events/'))
            .then(response => {
                this.setState({ events: response.data });
                console.log('Got events!');
            })
            .catch(error => {
                console.log('Failed to retrieve event data.');
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <CardList events={this.state.events} />
                </ScrollView>
                <View style={styles.buttonContainer}>
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
        flex: 1,
        justifyContent: 'center',
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
