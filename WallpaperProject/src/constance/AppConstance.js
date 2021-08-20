import React, { Component } from 'react';
// import { View, Dimensions, AsyncStorage } from 'react-native';
import { View, Dimensions } from 'react-native';




export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

class AppConstance extends Component {
static LOGIN  = '0';// 0 for logout and 1 for logined
static ROLE  = '1'; // 0 for user and 1 for seller

}
export default AppConstance;