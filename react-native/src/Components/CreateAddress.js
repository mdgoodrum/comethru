import React, { useState } from 'react'
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

export default CreateAddress = (props) => {

    const [streetNumber, setStreetNumber] = useState(null)
    const [streetName, setStreetName] = useState(null)
    const [streetType, setStreetType] = useState(null)
    const [streetDirection, setStreetDirection] = useState(null)
    const [addressType, setAddressType] = useState("")
    const [addressTypeId, setAddressTypeId] = useState("")
    const [majorMunicipality, setMajorMunicipality] = useState(null)
    const [governingDistrict, setGoverningDistrict] = useState(null)
    const [postalArea, setPostalArea] = useState(null)
    const [country] = useState("USA")


    onPress = () => {
        if (!streetNumber || 
            !streetName || 
            !majorMunicipality || 
            !governingDistrict || 
            !postalArea) {
            const msg = 'Must fill out Street Address, City, State and Zip.';
            if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
            } else {
                Alert.alert(msg);
            }
        } else {
            const body = {
                street_number: streetNumber,
                street_name: streetName,
                street_type: streetType,
                street_direction: streetDirection,
                address_type: addressType,
                address_type_id: addressTypeId,
                major_municipality: majorMunicipality,
                governing_district: governingDistrict,
                postal_area: postalArea,
                country: country,
            };
            axios
                .post(apiEndpoint('/models/addresses/'), body)
                .then(() => {
                    props.navigation.navigate('Events')
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }

    onChangeStreetAddress = (address) => {
        const values = address.split(' ');
        const streetNumber = values[0] || '';
        const streetName = values[1] || '';
        const streetType = values[2] || '';
        const streetDirection = values[3] ? values[3] : '';
        setStreetNumber(streetNumber)
        setStreetName (streetName)
        setStreetType(streetType)
        setStreetDirection(streetDirection)
    }

    onChangeStreetAddress2 = (address2) => {
        const values = address2.split(' ');
        const addressType = values[0] || '';
        const addressTypeId = values[1] || '';
        setAddressType(addressType)
        setAddressTypeId(addressTypeId)
    }

    onChangeCity = (majorMunicipality) => {
        setMajorMunicipality(majorMunicipality)
    }

    onChangeState = (governingDistrict) => {
        setGoverningDistrict(governingDistrict)
    }

    onChangePostalZip = (postalArea) => {
        setPostalArea(postalArea)
    }

    cancel = () => {
        props.navigation.navigate('Events')
    }

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