import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: scale(18),
    gap: verticalScale(12),
    flex: 1,
    minHeight: verticalScale(118),
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    borderRadius: moderateScale(18),
    // Shadow/Card
    shadowColor: 'rgba(15, 23, 42, 0.12)',
    shadowOffset: {
      width: 0,
      height: verticalScale(4),
    },
    shadowOpacity: 1,
    shadowRadius: moderateScale(8),
    elevation: 4,
  },
  
  containerSelected: {
    borderWidth: 2,
    borderColor: '#FAA04D', // Secondary/40
    shadowOpacity: 0, // Remove shadow when selected
    elevation: 0,
  },
  
  containerDark: {
    backgroundColor: '#3C3E44', // Gray/80
    borderWidth: 1,
    borderColor: '#303236', // Gray/90
  },
  
  containerSelectedDark: {
    borderWidth: 2,
    borderColor: '#FAA04D', // Secondary/40
  },
  
  icon: {
    width: scale(32),
    height: verticalScale(32),
    tintColor: '#FAA04D', // Secondary/40
  },
  
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(4),
  },
  
  title: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    fontFamily: 'DMSans-Medium',
    fontWeight: '500',
    color: '#54565F', // Gray/60
  },
  
  titleDark: {
    color: '#F4F4F6', // Gray/5
  },
  
  description: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005,
    fontFamily: 'DMSans-Regular',
    color: '#8E949F', // Gray/30
  },
  
  descriptionDark: {
    color: '#60646C', // Gray/50
  },
});
