import React, { Component } from 'react';

import {StyleSheet, View, Text} from 'react-native';

export default class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const { test } = this.props.location.props;
    console.log(test);
  }

  render() {
      return (
          <View>
              <Text>Hi!</Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    }
  }
});
