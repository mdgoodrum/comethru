import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';

export default class InfoCard extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
  }

  render() {
    return (
      <Link
        to={{
          pathname: '/detail',
          state: {
            data: this.props.data,
          },
        }}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Description</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.description}>
              {this.props.data.short_description}
            </Text>
          </View>
        </View>
      </Link>
    );
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