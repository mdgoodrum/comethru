import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { MainOrange } from '../Pallet';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.content}>
            <Text>comethru</Text>
            <Text style={styles.greetingText}>Hello, Thomas</Text>
            <Text>|||</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    greetingText: {
        color: MainOrange,
    }
});
