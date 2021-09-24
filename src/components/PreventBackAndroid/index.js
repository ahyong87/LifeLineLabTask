import React from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {NavigationEvents} from 'react-navigation';
// import _ from 'lodash'

let clickcount = 1;

function addPreventBackPress() {
  // BackHandler.addEventListener('hardwareBackPress', _.stubTrue)
  BackHandler.addEventListener('hardwareBackPress', backButtonAction);
}

function removePreventBackPress() {
  // BackHandler.removeEventListener('hardwareBackPress', _.stubTrue)
  BackHandler.removeEventListener('hardwareBackPress', backButtonAction);
}

function backButtonAction() {
  if (clickcount < 2) {
    clickcount += 1;
    ToastAndroid.showWithGravityAndOffset(
      'Please press again to exit',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    setTimeout(() => {
      clickcount = 1;
    }, 2000);
  } else if (clickcount === 2) {
    BackHandler.exitApp();
  }

  return true;
}

export default function PreventBackAndroid() {
  return (
    <NavigationEvents
      onDidFocus={addPreventBackPress}
      onDidBlur={removePreventBackPress}
    />
  );
}
