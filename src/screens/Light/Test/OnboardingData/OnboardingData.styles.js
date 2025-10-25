import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[5],
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
  },
  section: {
    backgroundColor: Colors.white,
    borderRadius: scale(12),
    padding: scale(16),
    marginBottom: verticalScale(16),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.gray[90],
    marginBottom: verticalScale(8),
  },
  dataText: {
    fontSize: moderateScale(14),
    color: Colors.gray[70],
    lineHeight: moderateScale(20),
  },
});
