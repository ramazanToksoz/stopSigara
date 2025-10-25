import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    paddingBottom: verticalScale(24),
  },
  handle: {
    height: verticalScale(17),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(12),
  },
  handleBar: {
    width: scale(64),
    height: verticalScale(5),
    backgroundColor: Colors.gray[20], // #E5E7EB
    borderRadius: moderateScale(1234),
  },
  content: {
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
    paddingBottom: 0,
  },
  frame: {
    borderRadius: moderateScale(14),
    gap: verticalScale(24),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    lineHeight: moderateScale(22),
    letterSpacing: -0.112,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: scale(12),
    justifyContent: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.gray[10], // #E9EAEC
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(14),
    minHeight: verticalScale(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    lineHeight: moderateScale(22),
    letterSpacing: -0.112,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: Colors.gray[80], // #3C3E44
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(14),
    minHeight: verticalScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#32313D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  confirmButtonText: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    lineHeight: moderateScale(22),
    letterSpacing: -0.112,
    color: Colors.white,
    fontFamily: 'DM Sans',
  },
});
