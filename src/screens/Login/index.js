// ---------- Import ---------- //
import {CommonActions} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../common/Colors';
import Images from '../../common/images';
import InputText from '../../components/InputText';
import ToastComponent from '../../components/ToastComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  userLoginWacther,
  userLoginEmailChanged,
  userLoginPasswordChanged,
} from '../../store/Action';
import {Storage} from '../../common/localStorage';
import AsyncStorageKey from '../../common/localStorage/AsyncStorageKey';
import styles from './style';
import ButtonComponent from '../../components/ButtonComponent';

// ---------- Global Variable Declaration ---------- //
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

// ---------- Class ---------- //
class Login extends Component {
  // ---------- Constructor ---------- //
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisplay: false,
      message: '',
      isLoading: false,
      value: '',
    };
  }
  // ---------- Life-Cycle Methods ---------- //
  componentDidMount() {}
  // ---------- Function Declaration ---------- //
  goToNextView = (nextView = null) => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: nextView}],
      }),
    );
    return;
  };
  displayToast = message => {
    this.setState({message: message, isDisplay: true});
    setTimeout(() => this.setState({message: '', isDisplay: false}), 3000);
  };
  startLoading() {
    this.setState({isLoading: true});
  }
  stopLoading() {
    this.setState({isLoading: false});
  }

  login = () => {
    if (this.props.userEmail === '') {
      this.displayToast('Email must not be Blank.');
    } else if (this.props.userPassword === '') {
      this.displayToast('Password must not be Blank.');
    } else if (emailValidation.test(this.props.userEmail) === false) {
      this.displayToast('Please Enter Valid Email.');
    } else {
      setTimeout(() => {
        this.startLoading();
      }, 3000);
      const email = this.props.userEmail;
      console.log('email', email);
      Storage.setItem(AsyncStorageKey.accountInfo, email);
      this.goToNextView('Home');
    }
  };
  // ---------- Render ---------- //
  render() {
    console.log('credentials', this.props.userEmail, this.props.userPassword);
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={Images.Logo} />
            </View>
            <View style={styles.topContainer}>
              <Text style={styles.topTxt}>{'Hey,\nLogin Now.'}</Text>
              <Text style={styles.instructionTxt}>
                {'If you are new / '}
                <Text style={styles.commonTxtcolor}> Create New</Text>
              </Text>
            </View>
            <View style={styles.midContainer}>
              <InputText
                placeholder="Email"
                source={Images.Email}
                onChangeText={text => this.props.userLoginEmailChanged(text)}
                secureTextEntry={false}
              />
              <InputText
                placeholder="Password"
                source={Images.Key}
                onChangeText={pass => this.props.userLoginPasswordChanged(pass)}
                secureTextEntry={true}
              />
              <Text style={styles.forgotPasscodeTxt}>
                {'Forgot Passcode? / '}{' '}
                <Text style={styles.commonTxtcolor}> Reset</Text>
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              {/* <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => this.login()}>
                {this.state.isLoading ? (
                  <ActivityIndicator size="small" color={Colors.White} />
                ) : (
                  <Text style={styles.loginText}>Login</Text>
                )}
              </TouchableOpacity> */}
              <ButtonComponent
                title="Login"
                isLoading={this.state.isLoading}
                onPress={() => this.login()}
              />
            </View>
          </ScrollView>
          <ToastComponent
            child={this.state.message}
            isDisplay={this.state.isDisplay}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStatToProps({loginReducer}) {
  const {loginData, userEmail, userPassword} = loginReducer;
  return {loginData, userEmail, userPassword};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userLoginWacther,
      userLoginEmailChanged,
      userLoginPasswordChanged,
    },
    dispatch,
  );

export default connect(mapStatToProps, mapDispatchToProps)(Login);
