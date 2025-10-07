import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';
export const styles = StyleSheet.create({
  // Container base
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: verticalScale(48),
  },
  
  // Size variants
  container_default: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    gap: scale(10),
    height: verticalScale(48),
    borderRadius: moderateScale(14),
    width: '100%', // Tam genişlik - Ana butonlar için
  },
  
  container_sm: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(16),
    gap: scale(8),
    height: verticalScale(40),
    borderRadius: moderateScale(8),
    alignSelf: 'flex-start', // İçeriğe göre genişlik
  },
  
  container_xs: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(12),
    gap: scale(8),
    height: verticalScale(32),
    borderRadius: moderateScale(8),
    alignSelf: 'flex-start', // İçeriğe göre genişlik
  },
  
  // Primary default (filled)
  primary_default: {
    backgroundColor: Colors.brand[60],
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: verticalScale(5) },
    shadowOpacity: 1,
    shadowRadius: moderateScale(12),
    elevation: 5,
  },
  
  primary_default_dark: {
    backgroundColor: '#58B658',
  },
  
  // Neutral default (filled)
  neutral_default: {
    backgroundColor: '#3C3E44',
    shadowColor: 'rgba(50, 49, 61, 0.3)',
    shadowOffset: { width: 0, height: verticalScale(5) },
    shadowOpacity: 1,
    shadowRadius: moderateScale(12),
    elevation: 5,
  },
  
  neutral_default_dark: {
    backgroundColor: '#54565F',
  },
  
  // Primary outline
  primary_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#75D275',
  },
  
  primary_outline_dark: {
    borderColor: '#58B658',
  },
  
  // Neutral outline
  neutral_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#C5C8CE',
  },
  
  neutral_outline_dark: {
    borderColor: '#54565F',
  },
  
  // Primary soft
  primary_soft: {
    backgroundColor: '#DCF7DC',
  },
  
  primary_soft_dark: {
    backgroundColor: '#204A20',
  },
  
  // Neutral soft
  neutral_soft: {
    backgroundColor: '#E9EAEC',
  },
  
  neutral_soft_dark: {
    backgroundColor: '#000000',
  },
  
  // Disabled states
  disabled: {
    backgroundColor: '#E9EAEC',
    opacity: 0.5,
    shadowOpacity: 0,
    elevation: 0,
  },
  
  disabled_dark: {
    backgroundColor: '#303236',
  },
  
  disabled_outline: {
    borderColor: '#8E949F',
    backgroundColor: 'transparent',
    opacity: 0.5,
  },
  
  disabled_outline_dark: {
    borderColor: '#54565F',
  },
  
  disabled_soft: {
    backgroundColor: '#F4F4F6',
    opacity: 0.5,
  },
  
  disabled_soft_dark: {
    backgroundColor: '#3C3E44',
  },
  
  // Text styles
  text: {
    fontWeight: '700',
    letterSpacing: -0.007,
    fontFamily: 'DMSans-Bold',
  },
  
  text_default: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: '#FFFFFF',
    fontFamily: 'DMSans-Bold',
  },
  
  text_sm: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    fontFamily: 'DMSans-Bold',
  },
  
  text_xs: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    fontFamily: 'DMSans-Bold',
  },
  
  text_primary: {
    color: '#58B658',
    
  },
  
  text_neutral: {
    color: '#54565F',
  },
  
  text_soft_dark: {
    color: '#FFFFFF',
  },
  
  text_disabled: {
    color: '#8E949F',
  },
  
  text_disabled_dark: {
    color: '#54565F',
  },
  
  // Text button (no background)
  textButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textButton_default: {
    gap: scale(10),
  },
  
  textButton_sm: {
    gap: scale(8),
  },
  
  textButton_xs: {
    gap: scale(8),
  },
});

