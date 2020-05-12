import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MainOrange, BackgroundGray } from '../Pallet';

import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator()

const Booth = props => {
  return <Text>Booth</Text>
}

const Louie = props => {
  return <Text>Louie</Text>
}

export const DrawerComponent = props => {
  return (
    <Drawer.Navigator initialRouteName='Louie'>
      <Drawer.Screen name='Louie' component={Louie} />
      <Drawer.Screen name='Booth' component={Booth} />
    </Drawer.Navigator>

  )
}

export default Navbar = props => {
  const navigation = useNavigation()
  
  const onPressDrawer = () => {
    console.log('press')
    navigation.navigate('DrawerOpen')
  }
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={onPressDrawer}>
        <Icon name="menu" size={32} color={BackgroundGray} style={styles.menuIcon} />
      </TouchableOpacity>
      <Icon name="home" size={28} color={BackgroundGray} style={styles.menuIcon} />
    </View>

  )
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: MainOrange,
    height: '100%'
  },
  menuIcon: {
    marginTop: '2%'
  }
});
