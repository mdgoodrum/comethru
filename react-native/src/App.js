import 'react-native-gesture-handler'; // @spader React Navigation docs say this has to be the first thing in your entry file lest the gates of hell open up and Beezlebub springs forth into your processor
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import store from './Store'

import { BackgroundGray } from './Pallet'

import EventDetail from './Components/EventDetail'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import EditProfile from './Components/EditProfile'
import CreateAddress from './Components/CreateAddress'
import CreateEvent from './Components/CreateEvent'
import CreateVenue from './Components/CreateVenue'
import { DrawerComponent } from './Components/Navbar'
import { createDrawerNavigator } from '@react-navigation/drawer';

// Navigator for content screens. This is where people will spend most of their time.
const ContentStack = createStackNavigator()
const ContentStackComponent = props => (
  <ContentStack.Navigator initialRouteName='Events' headerMode='none'>
    <ContentStack.Screen name='Events' component={Home} />
    <ContentStack.Screen name='Create Address' component={CreateAddress} />
    <ContentStack.Screen name='Create Event' component={CreateEvent} />
    <ContentStack.Screen name='Create Venue' component={CreateVenue} />
    <ContentStack.Screen name='Event' component={EventDetail} />
  </ContentStack.Navigator>
)

// This is the main navigator for the app once logged in. 
// It can go to menu options (e.g. Settings), or it can bring you to your home screen, which navigates with its own stack
const AfterLoginStack = createDrawerNavigator()
const AfterLoginStackComponent = props => (
  <AfterLoginStack.Navigator initialRouteName='Home'>
    <AfterLoginStack.Screen name='Home' component={ContentStackComponent} />
    <ContentStack.Screen name='Edit Profile' component={EditProfile} />
  </AfterLoginStack.Navigator>

)

// All the "login" pages go on their own stack, because you won't have the drawer navigation
// that a logged in user uses to move around
const BeforeLoginStack = createStackNavigator()
const BeforeLoginStackComponent = props => (
  <BeforeLoginStack.Navigator>
    <BeforeLoginStack.Screen name='Log In' component={Login} />
    <BeforeLoginStack.Screen name='Sign Up' component={SignUp} />
  </BeforeLoginStack.Navigator>
)

const TopLevelStack = createStackNavigator()
export default App = (props) => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TopLevelStack.Navigator initialRouteName='LoginStack' headerMode='none'>
          <TopLevelStack.Screen name='DrawerStack' component={AfterLoginStackComponent} />
          <TopLevelStack.Screen name='LoginStack' component={BeforeLoginStackComponent} />
        </TopLevelStack.Navigator>
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
