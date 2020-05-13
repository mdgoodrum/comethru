import React, { Component } from 'react'
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    TextInput, 
    ToastAndroid, 
    Platform,
    Alert, 
} from 'react-native'
import { MainOrange, FooterGray } from '../Pallet'

import { apiEndpoint } from '../API'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           streetNumber: null,
           streetName: null,
           streetType: null,
           streetDirection: null,
           addressType: '',
           addressTypeId: '',
           majorMunicipality: null,
           governingDistrict: null,
           postalArea: null,
           country: 'USA',
        }
    }

    onPress() {
        if (!this.state.streetNumber || 
            !this.state.streetName || 
            !this.state.majorMunicipality || 
            !this.state.governingDistrict || 
            !this.state.postalArea) {
            const msg = 'Must fill out Street Address, City, State and Zip.';
            if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
            } else {
                Alert.alert(msg);
            }
        } else {
            const body = {
                street_number: this.state.streetNumber,
                street_name: this.state.streetName,
                street_type: this.state.streetType,
                street_direction: this.state.streetDirection,
                address_type: this.state.addressType,
                address_type_id: this.state.addressTypeId,
                major_municipality: this.state.majorMunicipality,
                governing_district: this.state.governingDistrict,
                postal_area: this.state.postalArea,
                country: this.state.country,
            };
            axios
                .post(apiEndpoint('/models/addresses/'), body)
                .then(() => {
                    this.props.navigation.navigate('Events')
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }

    onChangeStreetAddress(address) {
        const values = address.split(' ');
        const streetNumber = values[0] || '';
        const streetName = values[1] || '';
        const streetType = values[2] || '';
        const streetDirection = values[3] ? values[3] : '';
        this.setState({
            streetNumber,
            streetName,
            streetType,
            streetDirection,
        })
    }

    onChangeStreetAddress2(address2) {
        const values = address2.split(' ');
        const addressType = values[0] || '';
        const addressTypeId = values[1] || '';
        this.setState({
            addressType,
            addressTypeId,
        })
    }

    onChangeCity(majorMunicipality) {
        this.setState({
            majorMunicipality
        })
    }

    onChangeState(governingDistrict) {
        this.setState({
            governingDistrict
        })
    }

    onChangePostalZip(postalArea) {
        this.setState({
            postalArea
        })
    }

    cancel() {
        this.props.navigation.navigate('Events')
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.usernameAndPasswordContainer}>
                    <Text style={styles.usernameAndPasswordText}>Street Address</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeStreetAddress(text)} />
                    <Text style={styles.usernameAndPasswordText}>Street Address Line 2</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeStreetAddress2(text)} />
                    <Text style={styles.usernameAndPasswordText}>City</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeCity(text)} />
                    <Text style={styles.usernameAndPasswordText}>State</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeState(text)} />
                    <Text style={styles.usernameAndPasswordText}>Postal / Zip Code</Text>
                    <TextInput
                        style={styles.usernameAndPasswordEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangePostalZip(text)} />
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
                        <Text style={styles.buttonText}>Create Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    myButton: {
        height: 80,
        width: 80,
        borderRadius: 160,
        backgroundColor: MainOrange,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    usernameAndPasswordEntry: {
        borderColor: MainOrange,
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        height: '8%',
        marginBottom: '2%',
        textAlign: 'center'
    },
    usernameAndPasswordText: {
        color: MainOrange,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '6%'
    },
})