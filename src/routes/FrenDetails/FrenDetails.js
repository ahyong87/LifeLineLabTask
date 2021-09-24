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
  Image,
  Alert,
} from 'react-native';
import _ from 'lodash';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Card from 'components/Card';
import {SettingsButton} from 'components/Button';

import Storage from 'utils/Storage';
import NavigationService from 'utils/NavigationService';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default class FrenDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {FrenData} = this.props.navigation.state.params;
  }

  _unfriendButtonOnPress = () => {
    const {FrenData} = this.props.navigation.state.params;
    this.props.unfriendAction(FrenData, () => {
      Alert.alert('Success unfriend.');
      Storage.set({dataList: JSON.stringify(this.props.contactData)});
      NavigationService.goBack();
    });
  };

  render() {
    const {FrenData} = this.props.navigation.state.params;
    return (
      <View style={styles.MainContainer}>
        <Header title={'FrenDetails'} />
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={{uri: FrenData.picture.medium}}
              style={{
                marginHorizontal: 10,
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            />
          </View>
          <View>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Title : ${FrenData.name.title}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Name : ${FrenData.name.first} ${FrenData.name.last}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Gender : ${FrenData.gender}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Location : ${FrenData.location.street.number} ${FrenData.location.street.name} ${FrenData.location.city} ${FrenData.location.state} ${FrenData.location.postcode} ${FrenData.location.country}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Email : ${FrenData.email}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Age : ${FrenData.dob.age}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Phone Number 1 : ${FrenData.phone}`}
            </Text>
            <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
              {`Phone Number 2 : ${FrenData.cell}`}
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            height: 50,
            borderWidth: 1,
            marginHorizontal: 10,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
          }}
          onPress={() => this._unfriendButtonOnPress()}>
          <Text style={{...Styles.h2, color: 'white'}}>Unfriend</Text>
        </TouchableOpacity>

        {this.props.isLoading && <Loader />}
      </View>
    );
  }
}
