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
    SafeAreaView,
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
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.textFieldsContainer}>
                    <Text style={styles.sectionTitle}>Create Address</Text>
                    <Text style={styles.texFieldLabel}>Street Address</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeStreetAddress(text)} />
                    <Text style={styles.texFieldLabel}>Street Address Line 2</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeStreetAddress2(text)} />
                    <Text style={styles.texFieldLabel}>City</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeCity(text)} />
                    <Text style={styles.texFieldLabel}>State</Text>
                    <TextInput
                        style={styles.textFieldEntry}
                        autoCapitalize={"none"}
                        onChangeText={text => this.onChangeState(text)} />
                    <Text style={styles.texFieldLabel}>Postal / Zip Code</Text>
                    <TextInput
                        style={styles.textFieldEntry}
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
    textFieldsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60%',
        paddingTop: '5%',
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
        height: '8%',
        marginTop: '12%',
        textAlign: 'center'
    },
    texFieldLabel: {
        color: 'black',
        letterSpacing: 1,
        marginBottom: '2%',
        marginTop: '16%'
    },
})