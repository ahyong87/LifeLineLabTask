import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';

export default class Loader extends React.PureComponent {
  static propTypes = {
    hidden: PropTypes.bool,
  };
  static defaultProps = {
    hidden: false,
  };
  render() {
    const {showText} = this.props;
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: 9999,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 30,
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: 20,
          }}>
          <ActivityIndicator color={'gray'} size="large" />
          {showText && (
            <Text style={{marginTop: 10, color: 'white'}}>Loading...</Text>
          )}
        </View>
      </View>
    );
  }
}
