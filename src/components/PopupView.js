import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import Colors from '../common/Colors';
import Fonts from '../common/fonts';

const PopupView = ({isVisible, onBackPress, cancel, logout}) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );
  return (
    <Modal
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      style={styles.modal}
      isVisible={isVisible}
      animationIn="bounceInDown"
      onBackdropPress={onBackPress}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.logoutTitle}>
          <Text style={styles.logoutTitleText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.logoutText}>Are you sure you want to Logout?</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
            <Text style={styles.commonBtnText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={cancel}>
            <Text style={styles.commonBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    margin: scale(30),
    justifyContent: 'center',
  },
  modalContainer: {
    height: scale(120),
    justifyContent: 'space-around',
    backgroundColor: Colors.White,
    borderRadius: scale(10),
    alignItems: 'center',
    paddingVertical: scale(10),
  },
  logoutText: {
    textAlign: 'center',
    fontSize: scale(14),
    fontFamily: Fonts.Montserrat_Medium,
  },
  logoutBtn: {
    backgroundColor: Colors.RED,
    borderRadius: scale(5),
    paddingVertical: scale(5),
    paddingHorizontal: scale(15),
    marginVertical: scale(5),
    marginHorizontal: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    backgroundColor: Colors.GREY,
    borderRadius: scale(5),
    paddingVertical: scale(8),
    paddingHorizontal: scale(15),
    marginVertical: scale(5),
    marginHorizontal: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  commonBtnText: {
    color: Colors.White,
    fontFamily: Fonts.Montserrat_Medium,
  },
  logoutTitleText: {
    textAlign: 'center',
    fontSize: scale(18),
    fontFamily: Fonts.Montserrat_Bold,
    color: Colors.BLACK,
  },
  logoutTitle: {
    // backgroundColor: Colors.BLACK,
  },
});

export default PopupView;
