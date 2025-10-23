import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  // Primary Default Style
  primaryDefault: {
    backgroundColor: Colors.brand[60],
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },
  
  // Primary Outline Style
  primaryOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.brand[60],
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Primary Soft Style
  primarySoft: {
    backgroundColor: Colors.brand[10],
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Gray Style (for AddPost buttons)
  grayStyle: {
    backgroundColor: '#F4F4F6', // Gray/5 from Figma
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Size Styles
  sizeDefault: {
    width: scale(48),
    height: scale(48),
    padding: scale(12),
  },
  
  sizeSm: {
    width: scale(48),
    height: scale(48),
    padding: scale(12),
  },
  
  sizeXs: {
    width: scale(32),
    height: scale(32),
    padding: scale(8),
  },
  
  // Icon Styles
  primaryIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: '#FFFFFF',
  },
  
  baseIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: Colors.gray[60],
  },

  grayIcon: {
    width: scale(20),
    height: scale(20),
  },
  
  iconSm: {
    width: scale(24),
    height: scale(24),
  },
  
  iconXs: {
    width: scale(16),
    height: scale(16),
  },
  
  // Disabled State
  disabled: {
    opacity: 0.5,
  },
});
