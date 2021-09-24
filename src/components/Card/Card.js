import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ViewPropTypes,
  Animated,
  Platform,
} from 'react-native';

import Styles, {COLORS} from 'utils/Styles';
import NavigationService from 'utils/NavigationService';

export default class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        style={{
          width: '95%',
          height: 150,
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 10,
          marginTop: 5,
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => this.props._openFrenDetail(item)}>
        <View style={{flex: 1}}>
          <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
            {`Name : ${item.name.first} ${item.name.last}`}
          </Text>
          <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
            {`Email : ${item.email}`}
          </Text>
          <Text style={{...Styles.h2, marginLeft: 10, marginTop: 5}}>
            {`Phone Number : ${item.phone}`}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'black',
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.props._unfriendButtonOnPress(item)}>
          <Text style={{...Styles.h2, color: 'white'}}>unfriend</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}
