import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },
  statusBar: {
    marginTop: verticalScale(30),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(64),
    gap: verticalScale(32),
  },
  questionContainer: {
    alignItems: 'center',
    gap: verticalScale(4),
    width: '100%',
  },
  questionSubtitle: {
    fontSize: moderateScale(18),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[60],
    textAlign: 'center',
    lineHeight: moderateScale(24),
    letterSpacing: -0.008,
  },
  questionTitle: {
    fontSize: moderateScale(24),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    textAlign: 'center',
    lineHeight: moderateScale(32),
    letterSpacing: -0.012,
  },
  answerContainer: {
    width: '100%',
    gap: verticalScale(16),
  },
  tipsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(4),
  },
  tipIcon: {
    width: scale(18),
    height: scale(18),
    tintColor: Colors.gray[40],
  },
  tipText: {
    flex: 1,
    fontSize: moderateScale(14),
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[60],
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
  },
  buttonContainer: {
    width: '100%',
  },
});

