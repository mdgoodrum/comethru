import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'

export default CreateEvent = (props) => {

    const [title, setTitle] = useState("")
    const [datePublished, setDatePublished] = useState(undefined)
    const [shortDescription, setShortDescription] = useState("")
    const [description, setDescription] = useState("")
    const [twentyOne, setTwentyOne] = useState(false)
    const [tags, setTags] = useState([])
    const [organizer, setOrganizer] = useState("")
    const [venue, setVenue] = useState("")
    const [startTime, setStartTime] = useState(undefined)
    const [endTime, setEndTime] = useState(undefined)

    onPress = () => {
        const body = {
            "title": title,
            "date_published": datePublished || new Date(),
            "short_description": shortDescription,
            "description": description,
            "twenty_one": twentyOne,
            "venue": '1',
            "organizer": '1',
            "start_time": startTime || new Date(),
            "end_time": endTime || new Date()
        };
        axios
            .post(apiEndpoint('/models/events/'), body)
            .then(() => {
                props.navigation.navigate('Events')
            })
            .catch(error => {
                console.log(error)
            });
    }

    onChangeTitle = (title) => {
        setTitle(title)
    }

    onChangeDatePublished = (date_published) => {
        const date = new Date(date_published);
        if (isNaN(date.getTime())) {
            setDatePublished(new Date())
        } else {
            setDatePublished(date_published)
        }
    }

    onChangeShortDescription = (short_description) => {
        setShortDescription(short_description)
    }

    onChangeDescription = (description) => {
        setDescription(description)
    }

    onChangeTwentyOne = (input) => {
        if (input === '') {
            setTwentyOne(false)
        } else {
            setTwentyOne(true)
        }
    }

    onChangeOrganizer = (organizer) => {
        setOrganizer(organizer)
    }

    onChangeVenue = (venue) => {
        setVenue(venue)
    }

    onChangeStartTime = (start_time) => {
        const date = new Date(start_time);
        if (isNaN(date.getTime())) {
            setStartTime(new Date())
        } else {
            setStartTime(start_time)
        }
    }

    onChangeEndTime = (end_time) => {
        const date = new Date(end_time);
        if (isNaN(date.getTime())) {
            setEndTime(new Date())
        } else {
            setEndTime(end_time)
        }
    }

    cancel = () => {
        props.navigation.navigate('Events')
    }

    return (
        <View style={styles.content}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.textFieldsContainer}>
                    <Text style={styles.sectionTitle}>Create Event</Text>
                    <Text style={styles.texFieldLabel}>Event Name</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeTitle(text)} />
                    <Text style={styles.texFieldLabel}>Date published</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeDatePublished(text)} />
                    <Text style={styles.texFieldLabel}>Short Description</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeShortDescription(text)} />
                        <Text style={styles.texFieldLabel}>Description</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeDescription(text)} />
                        <Text style={styles.texFieldLabel}>21+</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeTwentyOne(text)} />
                        <Text style={styles.texFieldLabel}>Organizer</Text>
                        <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeVenue(text)} />
                        <Text style={styles.texFieldLabel}>Venue</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeOrganizer(text)} />
                        <Text style={styles.texFieldLabel}>Start time</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeStartTime(text)} />
                        <Text style={styles.texFieldLabel}>End Time</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeEndTime(text)} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.cancel()}
                        >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   
                        style={styles.myButton}
                        onPress={() => this.onPress()}
                        >
                        <Text style={styles.buttonText}>Create Event</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        height: '100%',
    },
    safeArea: {
        height: '92%'
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '40%',
    },
    myButton: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        borderRadius: 5,
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    textFieldEntry: {
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        height: '4%',
        marginTop: '2%',
        textAlign: 'center'
    },
    textFieldsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '68%',
        paddingTop: '5%',
    },
    texFieldLabel: {
        color: 'black',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '1%'
    },
})