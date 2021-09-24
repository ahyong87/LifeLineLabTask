import {StyleSheet} from 'react-native';

export const COLORS = {
  black: '#000000',
  gray: '#3C3D47',
  white: '#FFFFFF',
  facebook: '#1877F2',
  line: '#00B900',
  blue: '#5197EA',
  placeholder: 'rgba(60,61,71,0.3)',
};
export default StyleSheet.create({
  h1: {
    color: COLORS.gray,
    lineHeight: 38,
    fontSize: 28,
    fontWeight: 'bold',
  },
  h2: {
    color: COLORS.gray,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    backgroundColor: COLORS.gray,
  },
});
