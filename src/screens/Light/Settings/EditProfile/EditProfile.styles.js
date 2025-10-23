import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },
  statusBar: {
    height: verticalScale(44),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
  },
  form: {
    gap: verticalScale(24),
  },
  fieldGroup: {
    gap: verticalScale(8),
  },
  fieldLabel: {
    fontFamily: 'DM Sans',
    fontSize: moderateScale(14),
    fontWeight: '500',
    lineHeight: verticalScale(20),
    color: '#6C707A',
    letterSpacing: moderateScale(-0.084),
  },
  inputContainer: {
    marginTop: 0,
  },
  homeIndicator: {
    height: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(8),
  },
  homeIndicatorBar: {
    width: scale(134),
    height: verticalScale(5),
    backgroundColor: '#000000',
    borderRadius: moderateScale(10),
  },
});
