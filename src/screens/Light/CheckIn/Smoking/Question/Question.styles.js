import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(64),
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: verticalScale(64),
    paddingBottom: verticalScale(64),
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    gap: verticalScale(48),
  },
  questionContainer: {
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(4),
  },
  questionText: {
    fontSize: moderateScale(24),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    textAlign: 'center',
    lineHeight: moderateScale(32),
    letterSpacing: -0.288,
  },
  answerContainer: {
    flexDirection: 'row',
    gap: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: scale(50),
  },
  answerButtonWrapper: {
    flexShrink: 0,
    flexGrow: 0,
  },
  actionContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(16),
  },
});

