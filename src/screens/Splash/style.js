import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../common/Colors";
import Fonts from "../../common/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(25),
    backgroundColor: Colors.White,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: scale(100),
    width: scale(100),
  },
  midContainer: {
    flex: 0.3,
  },
  getStartedText: {
    color: Colors.GREY,
    fontSize: scale(12),
    fontWeight: "500",
  },
  midText: {
    fontSize: scale(25),
    marginTop: scale(20),
    fontFamily: Fonts.Montserrat_Bold,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skipTxt: {
    color: Colors.GREY,
    fontSize: scale(12),
    fontWeight: "500",
  },
  nextBtn: {
    backgroundColor: Colors.RED,
    borderRadius: scale(8),
    paddingVertical: scale(7),
    paddingHorizontal: scale(20),
  },
  nextTxt: {
    color: Colors.White,
    fontSize: scale(12),
    fontWeight: "500",
  },
});
export default styles;
