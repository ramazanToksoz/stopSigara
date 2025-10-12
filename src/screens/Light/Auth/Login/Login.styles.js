import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    gap: verticalScale(10),
  },
  blank: {
    width: scale(95),
    height: verticalScale(32),
    alignItems: 'center',
    gap: verticalScale(4),
  },
  logoContainer: {
    alignItems: 'center',
    gap: verticalScale(8),
    height: verticalScale(96),
  },
  logoMark: {
    width: scale(60),
    height: scale(60),
    backgroundColor: Colors.brand[60],
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: scale(52),
    height: scale(40),
  },
  logoText: {
    fontSize: moderateScale(20),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.gray[60],
    textAlign: 'center',
    lineHeight: moderateScale(28),
    letterSpacing: -0.01,
  },
  ssoContainer: {
    alignItems: 'center',
    gap: verticalScale(12),
    width: '100%',
    marginBottom: verticalScale(40),
  },
});

