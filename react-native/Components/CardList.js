import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import InfoCard from './InfoCard';

export default class CardList extends Component {
  constructor(props) {
    super(props);
  }

  renderCards = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {this.props.events.map((event, key) => {
          return <InfoCard data={event}></InfoCard>
        })}
      </View>
    );
  };

  render() {
    return this.renderCards();
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: '#00BFFF',
  },
});
