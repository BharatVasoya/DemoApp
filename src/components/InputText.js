import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../common/Colors";
import Fonts from "../common/fonts";

const InputText = ({ placeholder, source, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={Colors.GREY}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
      <View style={styles.round}>
        <Image style={styles.image} source={source} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(5),
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: scale(8),
    alignItems: "center",
    paddingHorizontal: scale(20),
    flexDirection: "row",
    marginVertical: scale(10),
    justifyContent: "space-between",
  },
  textInput: {
    fontSize: scale(12),
    width: scale(150),
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  image: {
    height: scale(12),
    width: scale(12),
    tintColor: Colors.White,
  },
  round: {
    // height: scale(12),
    // width: scale(12),
    borderRadius: scale(10),
    backgroundColor: Colors.GREY,
    padding: scale(4),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputText;
