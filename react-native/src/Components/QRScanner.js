import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export const QRScanner = (props) => {
    return (
        <QRCodeScanner
            onRead={() => { console.log('you just did a qr code') }}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>
                </Text>
            }
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    );
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
