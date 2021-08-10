import React from 'react';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../common/Colors';
import Fonts from '../../common/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: scale(20),
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: scale(100),
    width: scale(100),
    alignSelf: 'center',
    marginTop: scale(20),
  },
  topContainer: {
    justifyContent: 'flex-start',
    flex: 0.3,
  },
  topTxt: {
    fontSize: scale(25),
    fontFamily: Fonts.Montserrat_Bold,
  },
  instructionTxt: {
    color: Colors.GREY,
    marginTop: scale(15),
    fontSize: scale(12),
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  midContainer: {
    justifyContent: 'flex-start',
    flex: 0.5,
  },
  forgotPasscodeTxt: {
    color: Colors.GREY,
    marginTop: scale(10),
    fontFamily: Fonts.Montserrat_SemiBold,
    fontSize: scale(12),
  },
  bottomContainer: {
    justifyContent: 'flex-start',
    flex: 0.3,
  },
  loginBtn: {
    backgroundColor: Colors.RED,
    borderRadius: scale(8),
    paddingVertical: scale(15),
    alignItems: 'center',
  },
  loginText: {
    color: Colors.White,
    fontSize: scale(15),
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  commonTxtcolor: {
    color: Colors.BLACK,
    fontFamily: Fonts.Montserrat_Medium,
    fontSize: scale(14),
  },
});
export default styles;
