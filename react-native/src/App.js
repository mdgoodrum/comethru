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

import { Provider } from 'react-redux'
import store from './Store'

import { BackgroundGray } from './Pallet'

import EventDetail from './Components/EventDetail';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import CreateEvent from './Components/CreateEvent';
import CreateVenue from './Components/CreateVenue';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
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
              path='/signup'
              component={SignUp} />
            <Route
              exact
              path='/createevent'
              component={CreateEvent} />
            <Route
              exact
              path='/createvenue'
              component={CreateVenue} />

            <Route
              exact
              path='/detail'
              component={props => <EventDetail {...props} />}
            />
          </SafeAreaView>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundGray,
  },
});
