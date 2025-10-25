import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  // Container
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(16),
    gap: scale(12),
    width: '100%',
    minHeight: verticalScale(74),
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    borderRadius: moderateScale(16),
    // Shadow
    shadowColor: 'rgba(44, 44, 50, 0.16)',
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 1,
    shadowRadius: moderateScale(4),
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    backgroundColor: '#1C1C1E',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  },
  containerCompact: {
    minHeight: verticalScale(60),
    paddingVertical: verticalScale(12),
  },
  containerCheckbox: {
    gap: scale(16),
  },
  
  // Main (LeadingItem + Text)
  main: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(16),
    flex: 1,
    minHeight: verticalScale(42),
  },
  
  // Leading Item
  leadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  leadingItem: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  leadingImage: {
    width: '100%',
    height: '100%',
  },
  leadingIconImage: {
    width: scale(24),
    height: verticalScale(24),
  },
  
  // Text Container
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    minHeight: verticalScale(42),
  },
  textContainerFull: {
    flex: 1,
  },
  
  // Title Text
  titleText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    color: Colors.gray[60], // #54565F
    width: '100%',
  },
  titleTextDark: {
    color: '#FFFFFF',
  },
  
  // Supporting Text
  supportingText: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
    color: Colors.gray[30], // #8E949F
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
  },
  supportingTextDark: {
    color: '#A0A0A0',
  },
  
  // Trailing Item
  trailingItem: {
    width: scale(24),
    height: verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // More Icon (3 dots)
  moreIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(24),
    height: verticalScale(24),
    paddingHorizontal: scale(4),
  },
  moreDot: {
    width: scale(4),
    height: verticalScale(4),
    borderRadius: moderateScale(2),
    backgroundColor: Colors.gray[60], // #54565F
  },
  moreDotDark: {
    backgroundColor: '#A0A0A0',
  },
  
  // Trailing Icon
  trailingIconImage: {
    width: scale(24),
    height: verticalScale(24),
    tintColor: Colors.gray[60],
  },
  
  // Checkbox
  checkboxContainer: {
    width: scale(24),
    height: verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: scale(18),
    height: verticalScale(18),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: '#C5C8CE', // Gray/20
    backgroundColor: '#F4F4F6', // Gray/5
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxDark: {
    backgroundColor: '#303236', // Gray/90
    borderColor: '#54565F', // Gray/60
  },
  checkboxChecked: {
    backgroundColor: '#46E01F', // Semantic/Success
    borderColor: '#46E01F', // Semantic/Success
  },
  checkmark: {
    width: scale(10),
    height: verticalScale(7.17),
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#FFFFFF', // Gray/0 (White)
    transform: [{ rotate: '-45deg' }],
    marginBottom: verticalScale(2),
    marginLeft: scale(1),
  },
  
  // Radio Button Styles
  radioContainer: {
    width: scale(24),
    height: verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    width: scale(18),
    height: scale(18), // verticalScale yerine scale kullan
    borderRadius: scale(9), // width/2 = 9px yarıçap
    borderWidth: 1,
    borderColor: '#C5C8CE', // Gray/20
    backgroundColor: '#F4F4F6', // Gray/5
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    backgroundColor: '#54565F', // Figma'ya göre koyu gri arka plan
    borderColor: '#54565F', // Figma'ya göre koyu gri border
  },
  radioDark: {
    backgroundColor: '#303236', // Gray/90
    borderColor: '#54565F', // Gray/60
  },
  radioInner: {
    width: scale(8),
    height: scale(8), // verticalScale yerine scale kullan
    borderRadius: scale(4), // width/2 = 4px yarıçap
    backgroundColor: '#54565F', // Figma'ya göre koyu gri
  },
  radioInnerDark: {
    backgroundColor: '#75D275', // Brand/50 (aynı kalır)
  },
  
  // Switch Styles
  switchContainer: {
    // Container için özel stil gerekmiyor
  },
  switch: {
    width: scale(44),
    height: verticalScale(24),
    borderRadius: moderateScale(123), // Tam yuvarlak
    backgroundColor: '#E9EAEC', // Gray/10
    padding: moderateScale(2),
    justifyContent: 'center',
  },
  switchActive: {
    backgroundColor: '#46E01F', // Semantic/Success
  },
  switchDark: {
    backgroundColor: '#303236', // Gray/90
  },
  switchThumb: {
    width: scale(20),
    height: verticalScale(20),
    borderRadius: moderateScale(360), // Tam yuvarlak
    backgroundColor: '#FFFFFF', // White
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  switchThumbActive: {
    transform: [{ translateX: scale(20) }], // Sağa kaydır
  },
  switchThumbDark: {
    backgroundColor: '#FFFFFF', // White (aynı kalır)
  },
  
  // Trailing Button Styles
  trailingButton: {
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    shadowColor: '#32313D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  trailingButtonPrimary: {
    backgroundColor: '#58B658', // Brand/60
  },
  trailingButtonNeutral: {
    backgroundColor: '#3C3E44', // Gray/80
  },
  trailingButtonXs: {
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
  },
  trailingButtonSm: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
  },
  trailingButtonMd: {
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
  },
  trailingButtonDark: {
    // Dark mode için özel stiller
  },
  trailingButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trailingButtonTextXs: {
    fontSize: moderateScale(12),
  },
  trailingButtonTextSm: {
    fontSize: moderateScale(14),
  },
  trailingButtonTextMd: {
    fontSize: moderateScale(16),
  },
  trailingButtonTextPrimary: {
    color: '#FFFFFF', // White
  },
  trailingButtonTextNeutral: {
    color: '#FFFFFF', // White
  },
  trailingButtonTextDark: {
    // Dark mode için özel text stilleri
  },
  
  // Divider for grouped items
  divider: {
    height: 1,
    backgroundColor: '#E9EAEC', // Gray/10 - Figma'ya göre çok subtle
    marginLeft: scale(16),
    marginRight: scale(60), // Sağ tarafa yakın olması için daha az margin
  },
});

