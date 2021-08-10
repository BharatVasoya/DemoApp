// ---------- Imports ---------- //
import React, { Component } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../common/Colors";
import Images from "../../common/images";
import CardView from "../../components/CardView";
import PopupView from "../../components/PopupView";
import { Storage } from "../../common/localStorage";
import AsyncStorageKey from "../../common/localStorage/AsyncStorageKey";
import styles from "./style";
import { CommonActions } from "@react-navigation/native";

// ---------- Variable Declaration ---------- //

// ---------- class ---------- //
class Home extends Component {
  // ---------- constructor ---------- //
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isLoading: false,
      userEmail: "",
    };
  }
  // ---------- Life-Cycle Methods ---------- //
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 1000);
    this.getData();
  }

  // ---------- Function Declaration ---------- //
  getData = async () => {
    const userInfo = await Storage.getItem(AsyncStorageKey.accountInfo);
    console.log("userInfo", userInfo);
    this.setState({ userEmail: userInfo });
  };
  logout = async () => {
    await Storage.removeItem(AsyncStorageKey.accountInfo);
    this.goToNextView("Login");
  };

  goToNextView = (nextView = null) => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: nextView }],
      })
    );
    return;
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View style={styles.topContainer}>
              <View style={styles.imageView}>
                {this.state.isLoading ? (
                  <Image style={styles.userImage} source={Images.Person} />
                ) : (
                  <ActivityIndicator
                    style={styles.indicator}
                    size="small"
                    color={Colors.SKY}
                  />
                )}
              </View>

              <Text style={styles.userEmail}>{this.state.userEmail}</Text>
              <TouchableOpacity
                onPress={() => this.setState({ isVisible: true })}
              >
                <Text
                  style={{ color: "tomato", textDecorationLine: "underline" }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
              <View style={styles.userDetailsContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.commonUDTxt}>Applied</Text>
                  <Text style={styles.commonUDNumTxt}>28</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.commonUDTxt}>Reviewed</Text>
                  <Text style={styles.commonUDNumTxt}>73</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.commonUDTxt}>Contacted</Text>
                  <Text style={styles.commonUDNumTxt}>18</Text>
                </View>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <Text style={styles.completeProfileText}>Complete Profile</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                  <CardView
                    image={Images.Graduation}
                    imageTint={Colors.SKY}
                    bgColor={Colors.SKY}
                    title={"Education"}
                    steps={"02 Steps"}
                    arrowText={"Left"}
                  />
                  <CardView
                    image={Images.BriefCase}
                    imageTint={Colors.MUSTARD}
                    bgColor={Colors.MUSTARD}
                    title={"Professional"}
                    steps={"04 Steps"}
                    arrowText={"Left"}
                  />
                </View>
                <View style={styles.cardContainer}>
                  <CardView
                    image={Images.Graduation}
                    imageTint={Colors.SKY}
                    bgColor={Colors.SKY}
                    title={"Education"}
                    steps={"02 Steps"}
                    arrowText={"Left"}
                  />
                  <CardView
                    image={Images.BriefCase}
                    imageTint={Colors.MUSTARD}
                    bgColor={Colors.MUSTARD}
                    title={"Professional"}
                    steps={"04 Steps"}
                    arrowText={"Left"}
                  />
                </View>
              </ScrollView>
            </View>

            <PopupView
              isVisible={this.state.isVisible}
              onBackPress={() => this.setState({ isVisible: false })}
              logout={() => {
                this.logout(), this.setState({ isVisible: false });
              }}
              cancel={() => this.setState({ isVisible: false })}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
