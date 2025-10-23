import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(15),
    height: verticalScale(48),
    backgroundColor: '#FCFCFD',
  },
  containerDark: {
    backgroundColor: '#000000',
  },
  
  // Leading (Sol)
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    width: scale(60),
    zIndex: 2,
  },
  
  leadingAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    width: scale(200),
    zIndex: 2,
  },
  leadingIcon: {
    width: scale(24),
    height: verticalScale(24),
  },
  
  // Avatar Properties
  avatarContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: 9999,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  greetingText: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
    color: '#F4F4F6',
  },
  greetingTextDark: {
    color: '#F4F4F6',
  },
  userName: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(20),
    lineHeight: moderateScale(28),
    letterSpacing: -0.2,
    color: '#FFFFFF',
  },
  userNameDark: {
    color: '#FFFFFF',
  },
  
  // Center (Orta)
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
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
    fontSize: moderateScale(18), // Body lg/Bold
    lineHeight: moderateScale(24),
    color: '#54565F', // Gray/60
    textAlign: 'center',
  },
  titleDark: {
    color: '#FFFFFF',
  },
  
  // Trailing (Sağ)
  trailing: {
    width: scale(60),
    height: verticalScale(32),
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  
  // Notification Properties
  notificationButton: {
    padding: 0,
  },
  notificationIcon: {
    position: 'relative',
    width: scale(24),
    height: verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIconImage: {
    width: '100%',
    height: '100%',
    tintColor: '#FFFFFF',
  },
  notificationIconImageDark: {
    tintColor: '#FFFFFF',
  },
  indicator: {
    position: 'absolute',
    top: verticalScale(0),
    right: scale(0),
    width: scale(8),
    height: verticalScale(8),
    borderRadius: 9999,
    backgroundColor: '#FF6565',
    borderWidth: 1.5,
    borderColor: '#58B658',
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

  // Trailing Icon Styles
  trailingIconButton: {
    padding: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  trailingIcon: {
    width: scale(24),
    height: scale(24),
  },

  // Add Icon Button Styles (for green background button)
  addIconButton: {
    backgroundColor: '#58B658', // Brand/60 from Figma
    borderRadius: scale(20), // 360px equivalent
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },

  addIcon: {
    width: scale(20),
    height: scale(20),
    tintColor: '#FFFFFF',
  },
});
