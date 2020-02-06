import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import InfoCard from './InfoCard';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
    };
  }

  renderCards = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {this.state.cards.map((card, key) => {
          return <InfoCard key={key} description={card} />;
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
