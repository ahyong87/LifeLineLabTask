import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import AppNavigator from 'configs/navigator';
import NavigationService from 'utils/NavigationService';

class NavigationWrapper extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator
          ref={navigatorRef =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
        />
        <StatusBar translucent barStyle="dark-content" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(NavigationWrapper);
