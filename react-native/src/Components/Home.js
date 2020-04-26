import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
const axios = require('axios');

import { apiEndpoint } from '../API'

import { BackgroundGray } from '../Pallet'

import CardList from './CardList';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
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
});
