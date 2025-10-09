import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[5],
  },
  statusBar: {
    marginTop: verticalScale(30),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  scrollContent: {
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(30),
  },
  title: {
    fontSize: moderateScale(24),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    marginBottom: verticalScale(28),
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  methodsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(16),
    alignSelf: 'stretch',
  },
  buttonContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(40),
    paddingTop: verticalScale(20),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: moderateScale(32),
    borderTopRightRadius: moderateScale(32),
    paddingBottom: verticalScale(40),
  },
  datePickerContainer: {
    alignItems: 'center',
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
  },
});




