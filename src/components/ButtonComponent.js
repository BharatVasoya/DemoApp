import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../common/Colors';
import Fonts from '../common/fonts';

const ButtonComponent = ({title, onPress, isLoading}) => {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.White} />
      ) : (
        <Text style={styles.loginText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default ButtonComponent;
