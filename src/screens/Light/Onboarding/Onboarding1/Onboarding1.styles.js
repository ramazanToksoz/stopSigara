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
    paddingBottom: verticalScale(50),
  },
  listContainer: {
    gap: verticalScale(12),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(30),
  },
  heading: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    marginBottom: verticalScale(8),
    textAlign: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  buttonContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(40),
    paddingTop: verticalScale(20),
  },
 
});




