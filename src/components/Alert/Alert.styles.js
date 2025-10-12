import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    gap: scale(10),
    height: verticalScale(44),
    borderRadius: moderateScale(10),
    shadowColor: 'rgba(31, 31, 41, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
  },
  
  // Dark Mode = False (Light mode background is dark)
  containerDark: {
    backgroundColor: '#1A1B1E', // Gray/95
  },
  
  // Dark Mode = True (Dark mode background is light)
  containerLight: {
    backgroundColor: '#F4F4F6', // Gray/5
  },
  
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  
  icon: {
    width: scale(20),
    height: scale(20),
  },
  
  text: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  
  textDark: {
    color: '#FFFFFF', // Gray/0 (White)
  },
  
  textLight: {
    color: '#3C3E44', // Gray/80
  },
  
  closeButton: {
    width: scale(7),
    height: scale(7),
  },
  
  closeLight: {
    backgroundColor: '#FFFFFF', // Gray/0 (White)
  },
  
  closeDark: {
    backgroundColor: '#6C707A', // Gray/40
  },
});

