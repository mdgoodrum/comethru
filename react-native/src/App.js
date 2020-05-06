import 'react-native-gesture-handler'; // @spader React Navigation docs say this has to be the first thing in your entry file lest the gates of hell open up and Beezlebub springs forth into your processor
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import store from './Store'

import { BackgroundGray } from './Pallet'

import EventDetail from './Components/EventDetail';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import CreateEvent from './Components/CreateEvent';
import CreateVenue from './Components/CreateVenue';

const Stack = createStackNavigator()

export default App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Log In'>
          <Stack.Screen name='Log In' component={Login} />
          <Stack.Screen name='Sign Up' component={SignUp} />
          <Stack.Screen name='Events' component={Home} />
          <Stack.Screen name='Create Event' component={CreateEvent} />
          <Stack.Screen name='Create Venue' component={CreateVenue} />
          <Stack.Screen name='Event' component={EventDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundGray,
  },
});
