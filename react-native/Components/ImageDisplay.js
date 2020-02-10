import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: this.props.name,
        images: this.props.images,
      },
    };
  }

  setImageSelected = image => {
    this.setState({selectedImage: image});
  };

  renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {this.state.product.images.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                this.setImageSelected(prop);
              }}>
              <Image style={styles.smallImage} source={{uri: prop}} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    let mainImage = this.state.selectedImage
      ? this.state.selectedImage
      : this.state.product.images[0];
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{this.state.product.name}</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.header}>
            <View style={styles.mainImageContainer}>
              <Image style={styles.mainImage} source={{uri: mainImage}} />
            </View>
            {this.renderImages()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  mainImage: {
    width: 200,
    height: 200,
  },
  smallImagesContainer: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    color: '#696969',
    fontWeight: 'bold',
  },

  /******** card **************/
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
