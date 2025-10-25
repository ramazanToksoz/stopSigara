import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray[5], // #F4F4F6
    borderRadius: moderateScale(16),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    marginBottom: verticalScale(12),
  },
  containerDark: {
    backgroundColor: Colors.gray[90], // #303236
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: moderateScale(16),
    fontWeight: '500',
    lineHeight: moderateScale(22),
    letterSpacing: -0.112,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
  titleDark: {
    color: Colors.gray[5], // #F4F4F6
  },
  iconContainer: {
    width: scale(20),
    height: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: Colors.gray[60], // #54565F
  },
  iconDark: {
    color: Colors.gray[5], // #F4F4F6
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray[20], // #C5C8CE
    marginVertical: verticalScale(10),
  },
  dividerDark: {
    backgroundColor: Colors.gray[60], // #54565F
  },
  description: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: moderateScale(20),
    letterSpacing: -0.084,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
  descriptionDark: {
    color: Colors.gray[5], // #F4F4F6
  },
});
