/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const axios = require('axios');

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';

import ImageDisplay from './Components/ImageDisplay';
import InfoCard from './Components/InfoCard';
import CardList from './Components/CardList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "Best CS meetup you'll ever attend!",
        description:
          'Please join us for talks from our three amazing speakers.',
        images: [
          'https://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=387&cropX2=1729&cropY1=118&cropY2=1460',
          'https://i.insider.com/590f3a2452b5d8525d8b479d?width=1100&format=jpeg&auto=webp',
          'https://vignette.wikia.nocookie.net/matrix/images/3/32/Neo.jpg/revision/latest/top-crop/width/360/height/360?cb=20060715235228',
        ],
      },
      cards: ['Card 1', 'Card 2'],
    };

    axios
    .get('http://127.0.0.1:8000/api/users/3/')
    .then(response => {
      console.log("Success!")
      console.log(response)
    })
    .catch(error => {
      console.log("Failure :(")
      console.log(error)
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <ImageDisplay
              name={this.state.product.name}
              images={this.state.product.images}
            />
            <InfoCard description={this.state.product.description} />

            <CardList cards={this.state.cards} />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

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
