import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { MainOrange } from '../Pallet';

export default class Separator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.separator}>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: MainOrange,
        textAlign: 'center',
        flexBasis: '3%'
    }
});
