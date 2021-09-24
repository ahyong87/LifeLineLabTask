import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  NativeModules,
  Platform,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import _ from 'lodash';
import {NavigationEvents} from 'react-navigation';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Card from 'components/Card';
import {SettingsButton} from 'components/Button';

import Storage from 'utils/Storage';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkEdit: false,
    };
  }
  componentDidMount() {
    const {dataList, dataTotal, dataPage} = Storage.get();
    const tempData = dataList && JSON.parse(dataList);
    // console.log('tempData === ', tempData);
    if (_.isEmpty(tempData)) {
      this.props.getContactList(1, () => {
        Storage.set({dataList: JSON.stringify(this.props.contactData)});
        Storage.set({dataTotal: this.props.contactTotal.toString()});
        Storage.set({dataPage: this.props.current_page.toString()});
      });
    } else {
      this.props.setData({
        contact: tempData,
        total: parseInt(dataTotal),
        current_page: parseInt(dataPage),
      });
    }
  }

  _handleEndReached = () => {
    if (this.props.contactTotal < 100) {
      this.props.getContactList(this.props.current_page + 1, () => {
        Storage.set({dataList: JSON.stringify(this.props.contactData)});
        Storage.set({dataTotal: this.props.contactTotal.toString()});
        Storage.set({dataPage: this.props.current_page.toString()});
      });
    }
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => {
    // console.log('item === ', item)
    return (
      <Card
        item={item}
        _unfriendButtonOnPress={this._unfriendButtonOnPress}
        _openFrenDetail={this._openFrenDetail}
      />
    );
  };

  _openFrenDetail = item => {
    this.setState({
      checkEdit: true,
    });
    this.props.navigation.navigate('FrenDetails', {FrenData: item});
  };

  _unfriendButtonOnPress = item => {
    this.setState({
      checkEdit: true,
    });
    // console.log('item === ', item)
    this.props.unfriendAction(item, () => {
      Alert.alert('Success unfriend.');
      Storage.set({dataList: JSON.stringify(this.props.contactData)});
      this.setState({
        checkEdit: false,
      });
    });
  };

  _autoReload = () => {
    this.setState({
      checkEdit: false,
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <NavigationEvents onDidFocus={this._autoReload} />
        <Header
          title={'Home'}
          LeftComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SettingsButton />
            </View>
          }
        />
        <FlatList
          style={{marginTop: 2}}
          extraData={this.state}
          data={this.props.contactData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onEndReachedThreshold={0.3}
          onEndReached={this._handleEndReached}
        />

        {this.props.isLoading && <Loader />}
      </View>
    );
  }
}
