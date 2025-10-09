import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  // Light Mode - Empty/Filled
  containerLight: {
    padding: scale(16),
    minHeight: verticalScale(140),
    maxHeight: verticalScale(140),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(14),
    shadowColor: '#6A7384',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },

  // Light Mode - Active (Focused)
  containerLightActive: {
    padding: scale(16),
    minHeight: verticalScale(140),
    maxHeight: verticalScale(140),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(14),
    shadowColor: '#208F20',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },

  // Dark Mode - Empty
  containerDarkEmpty: {
    padding: scale(16),
    minHeight: verticalScale(140),
    maxHeight: verticalScale(140),
    backgroundColor: '#3C3E44',
    borderWidth: 1,
    borderColor: '#303236',
    borderRadius: moderateScale(14),
  },

  // Dark Mode - Active (Focused)
  containerDarkActive: {
    padding: scale(16),
    minHeight: verticalScale(140),
    maxHeight: verticalScale(140),
    backgroundColor: '#3C3E44',
    borderWidth: 1,
    borderColor: '#54565F',
    borderRadius: moderateScale(14),
    shadowColor: '#6A7384',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },

  // Dark Mode - Filled
  containerDarkFilled: {
    padding: scale(16),
    minHeight: verticalScale(140),
    maxHeight: verticalScale(140),
    backgroundColor: '#1A1B1E',
    borderWidth: 1,
    borderColor: '#3C3E44',
    borderRadius: moderateScale(14),
  },

  // Input Base
  input: {
    flex: 1,
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    padding: 0,
    margin: 0,
  },

  // Light Mode Text - Empty
  textLightEmpty: {
    color: '#8E949F',
  },

  // Light Mode Text - Filled
  textLightFilled: {
    color: '#54565F',
  },

  // Dark Mode Text - Empty
  textDarkEmpty: {
    color: '#6C707A',
  },

  // Dark Mode Text - Filled
  textDarkFilled: {
    color: '#F4F4F6',
  },
});

