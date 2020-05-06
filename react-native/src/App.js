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

// export default App = props => {
//     return (
//       <Provider store={store}>
//         <NativeRouter>
//           <SafeAreaView style={styles.container}>
//             <Route
//               exact
//               path='/'
//               component={Login}
//             />
//             <Route
//               exact
//               path='/home'
//               component={Home} />
//             <Route
//               exact
//               path='/signup'
//               component={SignUp} />
//             <Route
//               exact
//               path='/createevent'
//               component={CreateEvent} />
//             <Route
//               exact
//               path='/createvenue'
//               component={CreateVenue} />

//             <Route
//               exact
//               path='/detail'
//               component={props => <EventDetail {...props} />}
//             />
//           </SafeAreaView>
//         </NativeRouter>
//       </Provider>
//     );
// }

const Stack = createStackNavigator()

export default App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundGray,
  },
});
