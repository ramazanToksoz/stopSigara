import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },
  statusBar: {
    marginTop: verticalScale(30),
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(20),
    gap: verticalScale(32),
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(4),
    width: '100%',
  },
  title: {
    fontSize: moderateScale(26),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.gray[80],
    lineHeight: moderateScale(32),
    letterSpacing: -0.013,
  },
  subtitle: {
    fontSize: moderateScale(16),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[30],
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    textAlign: 'center',
  },
  form: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: verticalScale(24),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    gap: scale(12),
  },
  footerText: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[60],
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
    textAlign: 'center',
  },
  errorText: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    color: '#FF3B30',
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
    marginTop: verticalScale(8),
  },
});

