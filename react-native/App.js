/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
const axios = require('axios');

import ImageDisplay from './Components/ImageDisplay';
import InfoCard from './Components/InfoCard';
import CardList from './Components/CardList';
import EventDetail from './Components/EventDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f7',
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: "Best CS meetup you'll ever attend!",
        images: [
          'https://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=387&cropX2=1729&cropY1=118&cropY2=1460',
          'https://i.insider.com/590f3a2452b5d8525d8b479d?width=1100&format=jpeg&auto=webp',
          'https://vignette.wikia.nocookie.net/matrix/images/3/32/Neo.jpg/revision/latest/top-crop/width/360/height/360?cb=20060715235228',
        ],
      },
      events: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/events/')
      .then(response => {
        this.setState({events: response.data});
        console.log('Got events!');
      })
      .catch(error => {
        console.log('Failed to retrieve event data.');
        console.log(error);
      });
  }

  render() {
    console.log('Rendering App');
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <ImageDisplay
            name={this.state.product.name}
            images={this.state.product.images}
          />
          <CardList events={this.state.events} />
        </ScrollView>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/detail"
            component={props => <EventDetail {...props} />}
          />
        </SafeAreaView>
      </NativeRouter>
    );
  }
}
