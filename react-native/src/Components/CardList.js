import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { useSelector } from 'react-redux'

import InfoCard from './InfoCard';

export default CardList = (props) => {
  const events = useSelector(state => state.events)

  return (
    <View style={styles.smallImagesContainer}>
      {events.map((event, key) => {
        return <InfoCard key={key} {...event} />;
      })}
    </View>
  );
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
