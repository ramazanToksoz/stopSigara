import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(20),
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: verticalScale(40),
    lineHeight: moderateScale(24),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: scale(20),
  },
  backButton: {
    backgroundColor: Colors.border,
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(25),
    flex: 0.4,
    alignItems: 'center',
  },
  backButtonText: {
    color: Colors.text,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  finishButton: {
    backgroundColor: Colors.success,
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(25),
    flex: 0.4,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.84),
  },
  finishButtonText: {
    color: Colors.background,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});




