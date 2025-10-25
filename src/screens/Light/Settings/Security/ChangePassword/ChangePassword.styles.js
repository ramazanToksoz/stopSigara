import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/Colors';
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
  formContainer: {
    marginBottom: verticalScale(32),
  },
  fieldGroup: {
    marginBottom: verticalScale(24),
  },
  fieldLabel: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: Colors.gray[40],
    marginBottom: verticalScale(8),
    fontFamily: 'DM Sans',
  },
  inputContainer: {
    marginBottom: verticalScale(8),
  },
  helperText: {
    fontSize: moderateScale(13),
    fontWeight: '400',
    color: Colors.gray[40],
    fontFamily: 'DM Sans',
  },
});
