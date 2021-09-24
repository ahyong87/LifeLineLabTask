import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {sha256} from 'react-native-sha256';

import Header from 'components/Header';
import Loader from 'components/Loader';

import Storage from 'utils/Storage';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'beautifultiger295',
      password: 'seinfeld',
    };
  }
  componentDidMount() {}

  _onSubmitButtonOnPress = () => {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      Alert.alert('Please fill in all information.');
    } else {
      this.props.getLoginData(() => {
        this._checkLoginData();
      });
    }
  };

  _checkLoginData = async () => {
    console.log('loginData === ', this.props.loginData[0].login.username);
    console.log('loginData === ', this.props.loginData[0].login.sha256);

    var finalPassword =
      this.state.password + this.props.loginData[0].login.salt;

    var passwordToSha256 = await sha256(finalPassword).then(hash => {
      return hash;
    });

    if (
      this.state.username === this.props.loginData[0].login.username &&
      passwordToSha256 === this.props.loginData[0].login.sha256
    ) {
      console.log('can login now');
      this.props.toggleLoading(false);
      Storage.set({isLogin: '1'});
      setTimeout(() => {
        this.props.navigation.navigate('MainScreen');
      }, 1000);
    } else {
      Alert.alert('wrong username and password.');
    }
    // console.log('passwordToSha256 === ', passwordToSha256);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header LeftComponent={<View />} />
        <ScrollView style={{flex: 1}}>
          <View>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 20}}>
              UserName
            </Text>
            <TextInput
              style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
              onChangeText={text => this.setState({username: text})}
              value={this.state.username}
            />
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 20}}>
              Password
            </Text>
            <TextInput
              style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}
            />
            <TouchableOpacity
              style={{
                height: 50,
                borderWidth: 1,
                marginHorizontal: 10,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}
              onPress={() => this._onSubmitButtonOnPress()}>
              <Text style={{...Styles.h2, color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {this.props.isLoading && <Loader />}
      </View>
    );
  }
}
