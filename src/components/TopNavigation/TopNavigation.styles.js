import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
    height: verticalScale(48),
    backgroundColor: 'transparent',
  },
  containerDark: {
    backgroundColor: '#000000',
  },
  
  // Leading (Sol)
  leading: {
    width: scale(32),
    height: verticalScale(32),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leadingIcon: {
    width: scale(24),
    height: verticalScale(24),
  },
  
  // Center (Orta)
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Progress (Center için)
  progressWrapper: {
    width: scale(200),
    height: verticalScale(10),
    position: 'relative',
    justifyContent: 'center',
  },
  progressTrack: {
    position: 'absolute',
    width: '100%',
    height: verticalScale(10),
    backgroundColor: '#E9EAEC', // Gray/10
    borderRadius: moderateScale(6),
  },
  progressTrackDark: {
    backgroundColor: '#3C3E44',
  },
  progressBar: {
    position: 'absolute',
    height: verticalScale(10),
    backgroundColor: '#75D275', // Brand/50
    borderRadius: moderateScale(6),
    left: 0,
    top: 0,
  },
  progressBarDark: {
    backgroundColor: '#58B658',
  },
  
  // Title (Center için)
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: Colors.gray[80],
    textAlign: 'center',
  },
  titleDark: {
    color: '#FFFFFF',
  },
  
  // Trailing (Sağ)
  trailing: {
    minWidth: scale(32),
    height: verticalScale(32),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  
  // Button (Trailing için)
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
  
  button_xs: {
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    height: verticalScale(32),
  },
  button_sm: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    height: verticalScale(36),
  },
  button_md: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    height: verticalScale(40),
  },
  
  button_default_neutral: {
    backgroundColor: Colors.gray[20],
  },
  button_default_primary: {
    backgroundColor: Colors.brand[60],
  },
  button_dark: {
    backgroundColor: Colors.gray[70],
  },
  
  // Button Text
  buttonText: {
    fontFamily: 'DMSans-Bold',
  },
  buttonText_xs: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
  },
  buttonText_sm: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
  },
  buttonText_md: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
  },
  
  buttonText_neutral: {
    color: Colors.gray[60],
  },
  buttonText_primary: {
    color: Colors.brand[60],
  },
  buttonText_default: {
    color: '#FFFFFF',
  },
  buttonText_dark: {
    color: '#FFFFFF',
  },
});
