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
  groupContainer: {
    marginBottom: verticalScale(24),
  },
  groupTitle: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: Colors.gray[40],
    marginBottom: verticalScale(8),
    fontFamily: 'DM Sans',
  },
  optionsContainer: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(16),
    shadowColor: '#2C2C32',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.02, // Çok az gölge
    shadowRadius: 2,
    elevation: 1,
  },
  listItem: {
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
  firstItem: {
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
  },
  lastItem: {
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
});
