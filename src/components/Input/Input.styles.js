import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  // Container Styles
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(14),
    gap: scale(12),
    minHeight: verticalScale(48),
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    shadowColor: '#6A7384',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: moderateScale(14),
  },
  
  containerActive: {
    shadowColor: '#208F20',
    shadowRadius: 2,
    elevation: 2,
  },
  
  // Dark Mode Container
  containerDark: {
    backgroundColor: '#3C3E44', // Gray/80
    borderWidth: 1,
    borderColor: '#303236', // Gray/90
    shadowOpacity: 0,
    elevation: 0,
  },
  
  containerDarkEmpty: {
    backgroundColor: '#3C3E44', // Gray/80
    borderColor: '#303236', // Gray/90
  },
  
  containerDarkActive: {
    backgroundColor: '#303236', // Gray/90
    borderColor: '#54565F', // Gray/60
  },
  
  containerDarkFilled: {
    backgroundColor: '#1A1B1E', // Gray/95
    borderColor: '#3C3E44', // Gray/80
  },
  
  // Phone Container
  containerPhone: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    gap: 0,
  },
  
  // Action Container
  containerAction: {
    paddingVertical: 0,
    paddingHorizontal: scale(3),
    paddingRight: scale(3),
    gap: 0,
  },
  
  // Code Container
  containerCode: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(24),
    width: scale(67),
    height: verticalScale(68),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Error & Success States
  containerError: {
    shadowColor: '#FF3B30',
    borderColor: '#FF3B30',
  },
  
  containerSuccess: {
    shadowColor: '#208F20',
    borderColor: '#208F20',
  },
  
  // Input Container
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    flex: 1,
  },
  
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(14),
    gap: scale(6),
    flex: 1,
  },
  
  actionInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(14),
    gap: scale(6),
    flex: 1,
  },
  
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  
  // Text Input
  textInput: {
    flex: 1,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    fontFamily: 'DMSans-Regular',
    color: '#54565F', // Gray/60
    padding: 0,
    margin: 0,
  },
  
  textInputEmpty: {
    color: Colors.gray[30], // Gray/30
  },
  
  textInputFilled: {
    color: '#54565F', // Gray/60
  },
  
  textInputDark: {
    color: '#F4F4F6', // Gray/5
  },
  
  textInputDarkEmpty: {
    color: '#60646C', // Gray/50
  },
  
  textInputCode: {
    fontSize: moderateScale(36),
    lineHeight: moderateScale(44),
    letterSpacing: -0.014,
    fontFamily: 'DMSans-Medium',
    fontWeight: '500',
    textAlign: 'center',
    width: scale(19),
  },
  
  // Icons
  icon: {
    width: scale(20),
    height: verticalScale(20),
    tintColor: '#8E949F', // Gray/30
  },
  
  iconDark: {
    tintColor: '#60646C', // Gray/50
  },
  
  flagIcon: {
    width: scale(24),
    height: verticalScale(24),
  },
  
  arrowIcon: {
    width: scale(20),
    height: verticalScale(20),
    tintColor: '#54565F', // Gray/60
  },
  
  arrowIconDark: {
    tintColor: '#F4F4F6', // Gray/5
  },
  
  actionIcon: {
    width: scale(20),
    height: verticalScale(20),
    tintColor: '#FFFFFF', // Gray/0 (White)
  },
  
  // Separator
  separator: {
    width: scale(1),
    height: verticalScale(22),
    backgroundColor: '#54565F', // Gray/60
    transform: [{ rotate: '90deg' }],
  },
  
  separatorDark: {
    backgroundColor: '#F4F4F6', // Gray/5
  },
  
  // Phone Addon
  phoneAddon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(14),
    gap: scale(6),
    width: scale(78),
    height: verticalScale(48),
    backgroundColor: '#F4F4F6', // Gray/5
    borderRightWidth: 1,
    borderRightColor: '#E9EAEC', // Gray/10
    borderTopLeftRadius: moderateScale(14),
    borderBottomLeftRadius: moderateScale(14),
  },
  
  phoneAddonDark: {
    backgroundColor: '#3C3E44', // Gray/80
    borderRightColor: '#3C3E44', // Gray/80
  },
  
  phonePrefix: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    fontFamily: 'DMSans-Regular',
    color: '#54565F', // Gray/60
  },
  
  phonePrefixDark: {
    color: '#F4F4F6', // Gray/5
  },
  
  // Action Addon
  actionAddon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(14),
    gap: scale(6),
    width: scale(86),
    height: verticalScale(42),
    backgroundColor: '#54565F', // Gray/60
    borderLeftWidth: 1,
    borderLeftColor: '#54565F', // Gray/60
    borderRadius: moderateScale(11),
  },
  
  actionAddonDisabled: {
    opacity: 0.5,
  },
  
  actionText: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    fontFamily: 'DMSans-Regular',
    color: '#FFFFFF', // Gray/0 (White)
  },
});

