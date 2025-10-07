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
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(25),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.84),
  },
  buttonText: {
    color: Colors.background,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});




