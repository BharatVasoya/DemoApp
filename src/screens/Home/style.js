import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../common/Colors";
import Fonts from "../../common/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },
  menu: {
    alignSelf: "flex-end",
    height: scale(5),
    width: scale(20),
    padding: scale(5),
  },
  topContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: scale(10),
  },
  imageView: {
    flexDirection: "row",
  },
  indicator: {
    height: scale(120),
    width: scale(120),
  },
  cameraBG: {
    height: scale(25),
    width: scale(25),
    borderRadius: scale(13),
    backgroundColor: Colors.GREY,
    padding: scale(5),
    marginStart: scale(-20),
    marginTop: scale(5),
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    height: scale(120),
    width: scale(120),
    borderRadius: scale(60),
  },
  userEmail: {
    color: Colors.BLACK,
    marginVertical: scale(10),
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: scale(15),
  },
  cameraImg: {
    height: scale(13),
    width: scale(13),
  },
  userDetailsContainer: {
    flexDirection: "row",
    paddingTop: scale(30),
  },
  commonUDTxt: {
    color: Colors.GREY,
    textAlign: "center",
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  commonUDNumTxt: {
    color: Colors.BLACK,
    fontSize: scale(14),
    textAlign: "center",
    marginTop: scale(5),
    fontFamily: Fonts.Montserrat_Bold,
  },
  bottomContainer: {
    flex: 0.5,
    paddingVertical: scale(10),
  },
  completeProfileText: {
    fontSize: scale(16),
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: scale(20),
  },
});
export default styles;
