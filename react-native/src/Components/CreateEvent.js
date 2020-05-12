import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            date_published: undefined,
            short_description: "",
            description: "",
            twenty_one: false,
            tags: [],
            organizer: "",
            venue: "",
            start_time: undefined,
            end_time: undefined,
        }
    }

    onPress() {
        const body = {
            "title": this.state.title,
            "date_published": this.state.date_published || new Date(),
            "short_description": this.state.short_description,
            "description": this.state.description,
            "twenty_one": this.state.twenty_one,
            "venue": 'http://localhost:8000/api/models/venues/1/',
            "organizer": 'http://localhost:8000/api/models/users/1/',
            "start_time": this.state.start_time || new Date(),
            "end_time": this.state.end_time || new Date()
        };

        console.log(body)

        axios
            .post(apiEndpoint('/models/events/'), body)
            .then(() => {
                this.props.navigation.navigate('Events')
            })
            .catch(error => {
                console.log(error)
            });
    }

    onChangeTitle(title) {
        this.setState({
            title
        })
    }

    onChangeDatePublished(date_published) {
        const date = new Date(date_published);
        if (isNaN(date.getTime())) {
            this.setState({
                date_published: new Date()
            })
        } else {
            this.setState({
                date_published
            })
        }
    }

    onChangeShortDescription(short_description) {
        this.setState({
            short_description
        })
    }

    onChangeDescription(description) {
        this.setState({
            description
        })
    }

    onChangeTwentyOne(input) {
        if (input === '') {
            this.setState({
                twenty_one: false
            })
        } else {
            this.setState({
                twenty_one: true
            })
        }
    }

    onChangeOrganizer(organizer) {
        this.setState({
            organizer
        })
    }

    onChangeVenue(venue) {
        this.setState({
            venue
        })
    }

    onChangeStartTime(start_time) {
        const date = new Date(start_time);
        if (isNaN(date.getTime())) {
            this.setState({
                start_time: new Date()
            })
        } else {
            this.setState({
                start_time
            })
        }
    }

    onChangeEndTime(end_time) {
        const date = new Date(end_time);
        if (isNaN(date.getTime())) {
            this.setState({
                end_time: new Date()
            })
        } else {
            this.setState({
                end_time
            })
        }
    }

    cancel() {
        this.props.navigation.navigate('Events')
    }

    render() {
        return (
            <View style={styles.content}>
            <View style={styles.usernameAndPasswordContainer}>
                <Text style={styles.usernameAndPasswordText}>Event Name</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeTitle(text)} />
                <Text style={styles.usernameAndPasswordText}>Date published</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeDatePublished(text)} />
                <Text style={styles.usernameAndPasswordText}>Short Description</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeShortDescription(text)} />
                 <Text style={styles.usernameAndPasswordText}>Description</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeDescription(text)} />
                 <Text style={styles.usernameAndPasswordText}>21+</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeTwentyOne(text)} />
                 <Text style={styles.usernameAndPasswordText}>Organizer</Text>
                 <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeVenue(text)} />
                 <Text style={styles.usernameAndPasswordText}>Venue</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeOrganizer(text)} />
                 <Text style={styles.usernameAndPasswordText}>Start time</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeStartTime(text)} />
                 <Text style={styles.usernameAndPasswordText}>End Time</Text>
                <TextInput
                    style={styles.usernameAndPasswordEntry}
                    autoCapitalize={"none"}
                    onChangeText={text => this.onChangeEndTime(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity   
                    style={styles.myButton}
                    onPress={() => this.cancel()}
                    >
                    <Text style={styles.createEventButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity   
                    style={styles.myButton}
                    onPress={() => this.onPress()}
                    >
                    <Text style={styles.createEventButtonText}>Create Event</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    signUpButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        marginRight: '5%',
        height: '75%',
        minHeight: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: '2%',
        paddingRight: '2%'
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
    usernameAndPasswordText: {
        color: MainOrange,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '1%'
    },
    usernameAndPasswordEntry: {
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: '60%',
        height: '4%',
        marginBottom: '3%',
        textAlign: 'center'
    },
})