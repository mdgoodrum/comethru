import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { findEvent } from '../Utils'

export default InfoCard = (props) => {
  const events = useSelector(state => state.events)
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Event', {
      eventId: props.eventId
    })
  }

  const onLongPress = () => {
    console.log('long press')
  }

  const event = findEvent(events, props.eventId)

  return (
    <TouchableOpacity 
      onPress={onPress}
      onLongPress={onLongPress}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Description</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.description}>
              {event.short_description}
            </Text>
          </View>
        </View>
    </TouchableOpacity>
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
