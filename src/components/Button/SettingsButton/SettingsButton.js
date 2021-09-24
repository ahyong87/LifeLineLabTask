import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import HamburgerMenu from '../../HamburgerMenu';

export default class SettingsButton extends React.Component {
  _onPress = () => {
    this.hamburgerMenuModal.open();
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this._onPress}
          hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
          <Image
            source={require('assets/icon_burger_new.png')}
            style={{width: 24, height: 16, marginTop: 4}}
          />
        </TouchableOpacity>
        <HamburgerMenu
          ref={node => {
            this.hamburgerMenuModal = node;
          }}
        />
      </View>
    );
  }
}
