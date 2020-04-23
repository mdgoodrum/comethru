/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';

import { BackgroundGray } from './Pallet'

import EventDetail from './Components/EventDetail';
import Home from './Components/Home';
import Login from './Components/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Route
            exact
            path='/'
            component={Login}
          />
          <Route
            exact
            path='/home'
            component={Home} />
          <Route
            exact
            path='/detail'
            component={props => <EventDetail {...props} />}
          />
        </SafeAreaView>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundGray,
  },
});
