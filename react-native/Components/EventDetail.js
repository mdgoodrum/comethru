import React, { Component } from 'react';

import {StyleSheet, View, Text} from 'react-native';

import { format, parse } from 'fecha';

export default class EventDetail extends Component {
  constructor(props) {
    super(props);
    // @spader All the props for this are in this.props.location.state,
    // because this component is created from a Link component.
  }

  render() {
      let start_time = parse(this.props.location.state.data.start_time.replace('T', ' '), 'YYYY-MM-DD HH:mm:ss')
      let end_time = parse(this.props.location.state.data.end_time.replace('T', ' '), 'YYYY-MM-DD HH:mm:ss')
      return (
          <View>
              <Text>{this.props.location.state.data.title}</Text>
              <Text>{this.props.location.state.data.description}</Text>
              <Text>{format(start_time, 'MMMM Do, YYYY') + ' ' + format(start_time, 'HH:mm')}</Text>
              <Text>{format(end_time, 'MMMM Do, YYYY') + ' ' + format(end_time, 'HH:mm')}</Text>
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
