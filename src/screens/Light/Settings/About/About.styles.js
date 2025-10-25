import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(16),
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: verticalScale(48),
  },
  logoContainer: {
    marginBottom: verticalScale(4),
  },
  logoBackground: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    backgroundColor: Colors.brand[60], // #58B658
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: scale(40),
    height: scale(40),
  },
  appName: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    lineHeight: moderateScale(32),
    letterSpacing: -0.288,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
    marginBottom: verticalScale(4),
  },
  versionText: {
    fontSize: moderateScale(13),
    fontWeight: '400',
    lineHeight: moderateScale(16),
    letterSpacing: -0.065,
    color: Colors.gray[40], // #6C707A
    fontFamily: 'DM Sans',
  },
  menuContainer: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(16),
    shadowColor: '#2C2C32',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});
