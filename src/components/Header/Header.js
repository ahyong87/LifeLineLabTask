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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#E4E4E4',
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  left: {
    flex: 0,
    marginRight: 8,
    width: 50,
  },
  middle: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    marginLeft: 8,
    flex: 0,
    width: 50,
  },
  title: {
    ...Styles.body,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default class Header extends React.PureComponent {
  static propTypes = {
    LeftComponent: PropTypes.element,
    MiddleComponent: PropTypes.element,
    RightComponent: PropTypes.element,
    title: PropTypes.string,
    style: ViewPropTypes.style,
    onBackPress: PropTypes.func,
    titleStyle: Text.propTypes.style,
  };

  static defaultProps = {
    LeftComponent: null,
    MiddleComponent: null,
    RightComponent: null,
    title: '',
    style: {},
    onBackPress: () => {},
    titleStyle: StyleSheet.create({}),
  };

  render() {
    const {
      LeftComponent,
      MiddleComponent,
      RightComponent,
      title,
      style,
      onBackPress,
      transparent,
      titleStyle,
    } = this.props;
    return (
      <Animated.View
        style={[styles.container, transparent && styles.transparent, style]}>
        {LeftComponent || (
          <TouchableOpacity
            style={styles.left}
            onPress={() => {
              NavigationService.goBack();
              onBackPress();
            }}
            hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
            <Image source={require('assets/icon_back_2.png')} />
          </TouchableOpacity>
        )}
        {MiddleComponent || (
          <View style={styles.middle}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        )}
        {RightComponent || <View style={styles.right} />}
      </Animated.View>
    );
  }
}
