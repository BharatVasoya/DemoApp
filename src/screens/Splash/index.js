// ---------- Imports ---------- //
import { CommonActions } from "@react-navigation/native";
import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Images from "../../common/images";
import { scale } from "react-native-size-matters";
import Colors from "../../common/Colors";
import Fonts from "../../common/fonts";
import { Storage } from "../../common/localStorage";
import AsyncStorageKey from "../../common/localStorage/AsyncStorageKey";
import styles from "./style";
// ---------- Global Variable Declaration ---------- //

// ---------- class ---------- //
class Splash extends Component {
  // ---------- Variable Declaration ---------- //

  // ---------- constructor ---------- //
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  // ---------- Life-Cycle Methods ---------- //
  componentDidMount() {
    this.getData();
  }

  // ---------- Function Declaration ---------- //

  goToNextView = (nextView = null) => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: nextView }],
      })
    );
    return;
  };
  getData = async () => {
    const userInfo = await Storage.getItem(AsyncStorageKey.accountInfo);
    console.log("userInfo", userInfo);

    if (userInfo !== null) {
      setTimeout(() => {
        this.goToNextView("Home");
      }, 2000);
    } else {
      setTimeout(() => {
        this.goToNextView("Login");
      }, 2000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.logo} source={Images.Logo} resizeMode="cover" />
          <Text style={styles.midText}>Demo App</Text>
        </View>
      </View>
    );
  }
}

export default Splash;
