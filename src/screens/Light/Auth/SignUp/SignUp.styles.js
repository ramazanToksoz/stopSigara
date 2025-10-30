import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

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
    gap: verticalScale(16),
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
  },
  form: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: verticalScale(24),
  },
  fieldGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: verticalScale(8),
  },
  fieldLabel: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Medium',
    color: Colors.gray[40],
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: scale(4),
  },
  footerText: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[60],
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  signInLink: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Medium',
    color: '#58B658',
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  orContinue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    gap: scale(16),
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray[10],
  },
  orText: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[40],
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  ssoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: verticalScale(8),
  },
  errorText: {
    fontSize: moderateScale(12),
    fontFamily: 'DMSans-Medium',
    color: '#FF3B30',
    marginTop: verticalScale(4),
    marginLeft: scale(4),
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(8),
  },
  forgotPasswordText: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Medium',
    color: '#58B658',
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: verticalScale(16),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray[10],
  },
  dividerText: {
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[40],
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
    marginHorizontal: scale(16),
  },
  socialButtons: {
    flexDirection: 'column',
    width: '100%',
    gap: verticalScale(12),
  },
  alertContainer: {
    position: 'absolute',
    top: verticalScale(100),
    left: scale(20),
    right: scale(20),
    zIndex: 1000,
  },
});

