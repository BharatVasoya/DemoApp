import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../common/Colors';
import Fonts from '../common/fonts';
import Images from '../common/images';

const CardView = ({image, bgColor, imageTint, title, steps, arrowText}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.roundContainer}>
        <Image style={[styles.image, {tintColor: imageTint}]} source={image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.stepTxt}>{steps}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.arrowText}>{arrowText}</Text>
        <TouchableOpacity>
          <Image style={styles.arrowImage} source={Images.RightArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scale(150),
    width: scale(130),
    borderRadius: scale(10),
    backgroundColor: Colors.GREY,
    paddingVertical: scale(15),
    paddingHorizontal: scale(10),
  },
  roundContainer: {
    backgroundColor: Colors.White,
    height: scale(30),
    width: scale(30),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: scale(20),
    width: scale(20),
  },
  title: {
    color: Colors.BLACK,
    fontSize: scale(10),
    marginVertical: scale(10),
    fontFamily: Fonts.Montserrat_Medium,
  },
  stepTxt: {
    color: Colors.BLACK,
    fontWeight: '600',
    fontSize: scale(14),
    marginVertical: scale(5),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowText: {
    fontSize: scale(12),
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  arrowImage: {
    height: scale(10),
    width: scale(20),
    marginEnd: scale(10),
  },
});

export default CardView;
