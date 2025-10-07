import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: verticalScale(60),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(60)
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(220),
    marginBottom: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: verticalScale(180),
  },
  imagePlaceholder: {
    width: scale(200),
    height: verticalScale(200),
    backgroundColor: '#E8F5E9',
    borderRadius: moderateScale(10),
    borderWidth: 2,
    borderColor: '#58B658',
    borderStyle: 'dashed',
  },
  textContainer: {
    width: '100%',
    marginBottom: verticalScale(30),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: '#000000',
    marginBottom: verticalScale(12),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: '#666666',
    textAlign: 'center',
    lineHeight: moderateScale(20),
  },
  bottomContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(30),
    gap: verticalScale(16),
  },
  signInContainer: {
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  signInText: {
    fontSize: moderateScale(14),
    color: '#666666',
    fontFamily: 'DMSans-Regular',
  },
  signInLink: {
    color: Colors.brand[60],
    fontWeight: '600',
    fontFamily: 'DMSans-Medium',
  },
});


