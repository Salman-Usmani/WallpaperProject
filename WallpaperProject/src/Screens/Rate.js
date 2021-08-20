import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const Rate = () => {
  const [DefaultRating, setDefaultRating] = useState(3);
  const [MaxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const CustomRatingBAr = () => {
    return (
      <View style={styles.CustomRatingBArStyle}>
        {MaxRating.map((item, key) => {
          return (
            <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => {
                setDefaultRating(item)
            }}>
              <Image
                styel={styles.starImgStyle}
                source={
                   DefaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Rate Us</Text>
      <CustomRatingBAr />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
  },
  CustomRatingBArStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30
  },
  starImgStyle: {
      width: 40, 
      height: 40,
      resizeMode: 'cover'
  }
});

export default Rate;
