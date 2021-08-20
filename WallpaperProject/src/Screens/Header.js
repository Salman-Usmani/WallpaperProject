import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import AppConstance, {
  deviceWidth,
  deviceHeight,
} from '../constance/AppConstance';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Header = (props, {navigation, route}) => {
console.log(props)
  return (
    <Appbar.Header
      style={{
        elevation: 0,
        backgroundColor: '#eaecee',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: deviceWidth,
        height: deviceHeight * 0.05,
      }}>
      <View style={{width: '20%'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenList')}
          style={styles.backbtn}>
          <Ionicon
            name="chevron-back"
            size={25}
            style={{color: 'black'}}></Ionicon>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '60%',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>Category</Text>
      </View>

      <View style={{width: '20%'}}></View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({});

export default Header;
