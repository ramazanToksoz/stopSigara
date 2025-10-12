import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E9EAEC',
    paddingTop: verticalScale(4),
    paddingBottom: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(4),
    height: verticalScale(66),
  },
  centerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(71),
    paddingHorizontal: scale(10),
  },
  iconContainer: {
    width: scale(24),
    height: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: Colors.gray[30],
  },
  activeIcon: {
    tintColor: Colors.brand[60],
  },
  homeIndicator: {
    height: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(8),
  },
  indicatorBar: {
    width: scale(152),
    height: verticalScale(5),
    backgroundColor: '#000000',
    borderRadius: 10,
  },
});
