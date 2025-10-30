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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    maxHeight: '80%',
    paddingBottom: verticalScale(32),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: '#E6E8EB',
  },
  modalTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#1A1D26',
  },
  modalCloseButton: {
    width: scale(32),
    height: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: moderateScale(24),
    color: '#6C707A',
    fontWeight: '300',
  },
  countryList: {
    paddingHorizontal: scale(20),
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: '#F0F1F3',
  },
  countryFlag: {
    width: scale(32),
    height: scale(24),
    marginRight: scale(12),
  },
  countryName: {
    flex: 1,
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#1A1D26',
  },
  countryCode: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#6C707A',
    marginLeft: scale(8),
  },
  // Loading Styles
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(32),
    paddingVertical: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: scale(150),
  },
  loadingText: {
    marginTop: verticalScale(12),
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#1A1D26',
  },
});
