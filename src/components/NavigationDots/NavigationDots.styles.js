import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(8),
    height: verticalScale(8),
  },
  
  dotActive: {
    width: scale(30),
    height: verticalScale(8),
    backgroundColor: '#58B658',
    borderRadius: moderateScale(360),
  },
  
  dotInactive: {
    width: scale(8),
    height: verticalScale(8),
    backgroundColor: '#C5C8CE',
    borderRadius: moderateScale(4),
  },
  
  dotInactiveDark: {
    backgroundColor: '#54565F',
  },
});

