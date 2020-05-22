import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MainOrange, BackgroundGray } from '../Pallet';

import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator()


export default Navbar = props => {
  const navigation = useNavigation()
  
  const onPressDrawer = () => {
    navigation.openDrawer()
  }

  const onPressHome = () => {
    console.log('press')
    navigation.navigate('Events')
  }

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={onPressDrawer}>
        <Icon name="menu" size={32} color={BackgroundGray} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressHome}>
        <Icon name="home" size={28} color={BackgroundGray} style={styles.menuIcon} />
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: MainOrange,
    minHeight: '8%',
  },
  menuIcon: {
    marginTop: '2%'
  }
});
