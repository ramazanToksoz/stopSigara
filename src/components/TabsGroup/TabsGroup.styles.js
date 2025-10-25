import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(40),
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[20], // #C5C8CE
  },
  tabItemActive: {
    borderBottomColor: Colors.brand[60], // #58B658
  },
  tabItemDark: {
    borderBottomColor: Colors.gray[80], // #3C3E44
  },
  tabText: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: moderateScale(20),
    letterSpacing: -0.084,
    color: Colors.gray[40], // #6C707A
    fontFamily: 'DM Sans',
  },
  tabTextActive: {
    fontWeight: '600',
    color: Colors.gray[80], // #3C3E44
  },
  tabTextDark: {
    color: Colors.gray[60], // #54565F
  },
  tabTextActiveDark: {
    color: Colors.white,
  },
});