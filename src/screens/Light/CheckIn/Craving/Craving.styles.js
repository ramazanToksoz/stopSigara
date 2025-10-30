import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

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
    gap: verticalScale(32),
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
    width: '100%',
    gap: verticalScale(24),
    alignItems: 'center',
  },
  valueText: {
    fontSize: moderateScale(60),
    fontFamily: 'DMSans-Medium',
    color: Colors.gray[80],
    textAlign: 'center',
    lineHeight: moderateScale(68),
    letterSpacing: -1.08,
    width: scale(345),
  },
  sliderContainer: {
    width: '100%',
    paddingBottom: scale(6),
  },
  slider: {
    width: '100%',
  },
  tagsScrollView: {
    width: '100%',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: scale(16),
    paddingRight: scale(20),
  },
  actionContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(16),
  },
});

