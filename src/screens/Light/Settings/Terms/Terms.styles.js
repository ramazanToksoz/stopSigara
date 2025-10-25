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
    marginBottom: verticalScale(20),
  },
  effectiveDate: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    letterSpacing: -0.084,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
    marginBottom: verticalScale(16),
  },
  textContainer: {
    flex: 1,
    gap: verticalScale(16),
  },
  section: {
    gap: verticalScale(4),
  },
  sectionNumber: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    lineHeight: moderateScale(20),
    letterSpacing: -0.084,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
  paragraph: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: moderateScale(20),
    letterSpacing: -0.084,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
});
