import React from 'react';
import {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  // FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Image} from 'react-native';
import {color} from 'react-native-reanimated';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance';
import {FlatList} from 'react-native-gesture-handler';


const ScreenList = ({navigation}) => {
  const [data, setData] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('https://awanwoodworkshop.store/react_API/api/AllGallery').then(
      // fetch('https://awanwoodworkshop.store/react_API/api/gallery').then(
      (res) => {
        res.json().then((resp) => {
          // console.log('result', resp);
          setGallery(resp.gallery);
          // console.log(resp.gallery[0]);
          setData(resp);
        });
      },
    );

  }, []);

  const [images, setimages] = useState([
    {
      id: 0,
      img: {uri: 'https://source.unsplash.com/1024x768/?nature'},
      text: 'Nature ',
    },
    {
      id: 1,
      img: {uri: 'https://source.unsplash.com/1024x768/?water'},
      text: 'Water ',
    },
    {
      id: 2,
      img: {uri: 'https://source.unsplash.com/1024x768/?tree'},
      text: 'Trees ',
    },
    {
      id: 3,
      img: {uri: 'https://source.unsplash.com/1024x768/?girl'},
      text: 'Girl ',
    },
    {
      id: 4,
      img: {uri: 'https://source.unsplash.com/1024x768/?nature'},
      text: 'Nature ',
    },
    {
      id: 5,
      img: {uri: 'https://source.unsplash.com/1024x768/?water'},
      text: 'Water ',
    },
    {
      id: 6,
      img: {uri: 'https://source.unsplash.com/1024x768/?tree'},
      text: 'Trees ',
    },
    {
      id: 7,
      img: {uri: 'https://source.unsplash.com/1024x768/?girl'},
      text: 'Girl ',
    },
    {
      id: 8,
      img: {uri: 'https://source.unsplash.com/1024x768/?nature'},
      text: 'Nature ',
    },
    {
      id: 9,
      img: {uri: 'https://source.unsplash.com/1024x768/?water'},
      text: 'Water ',
    },
    {
      id: 10,
      img: {uri: 'https://source.unsplash.com/1024x768/?tree'},
      text: 'Trees ',
    },
    {
      id: 11,
      img: {uri: 'https://source.unsplash.com/1024x768/?girl'},
      text: 'Girl ',
    },
  ]);

  const renderlist = ({item}) => {
    // console.log(item.gallery[0].image);
    return (
      <View>
        {/* <Text>{item.id}</Text>
        <Text>{item.gallery[0].image}</Text> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('test', {
              item: item.cat_name,
              url: item.gallery[0].image,
            });
          }}
          style={styles.body}>
          <ImageBackground
            source={{uri: item.gallery[0].image}}
            style={styles.image}
            resizeMode="stretch">
            <Text style={styles.text}>{item.cat_name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <Appbar.Header
        style={{
          elevation: 0,
          backgroundColor: '#eaecee',
          paddingHorizontal: 5,
          justifyContent: 'center',
          flexDirection: 'row',
          width: deviceWidth,
          height: deviceHeight * 0.05,
        }}>
        <View
          style={{
            width: '60%',
            alignItems: 'center',
          }}>
          <Text style={styles.textHeader}>Category</Text>
        </View>

        {/* <View style={{width: '20%'}}></View> */}
      </Appbar.Header>
      <FlatList
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderlist}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'verdana',
    fontSize: 20,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    textDecorationLine: 'underline',
    color: 'teal',
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maincontainer: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
export default ScreenList;
