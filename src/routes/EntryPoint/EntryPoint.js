import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  NativeModules,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Storage from 'utils/Storage';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await Storage.init();

    const {isLogin} = Storage.get();
    console.log('isLogin === ', isLogin);
    if (isLogin === '1') {
      setTimeout(() => {
        this.props.navigation.navigate('MainScreen');
      }, 1000);
    } else {
      setTimeout(() => {
        this.props.navigation.navigate('Login');
      }, 1000);
    }
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Loading</Text>
      </View>
    );
  }
}
