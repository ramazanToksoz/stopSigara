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
  },
  questionContainer: {
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(4),
  },
  questionText: {
    fontSize: moderateScale(24),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[60],
    textAlign: 'center',
    lineHeight: moderateScale(32),
    letterSpacing: -0.288,
  },
  arrowContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(48),
  },
  arrowIcon: {
    width: scale(48),
    height: scale(48),
  },
  emotionsScrollView: {
    marginBottom: verticalScale(48),
    minHeight: verticalScale(224),
  },
  emotionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(48),
    paddingHorizontal: scale(40),
  },
  emotionItem: {
    width: scale(96),
    height: scale(96),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  emotionItemCenter: {
    // Center item için özel stil
  },
  emotionItemSelected: {
    width: scale(160),
    height: scale(160),
  },
  outerCircle: {
    position: 'absolute',
    width: scale(222),
    height: scale(222),
    borderRadius: scale(111),
    backgroundColor: '#F0F8F0',
    opacity: 0.3,
  },
  innerCircle: {
    position: 'absolute',
    width: scale(190),
    height: scale(190),
    borderRadius: scale(95),
    backgroundColor: '#E8F5E8',
    opacity: 0.5,
  },
  emotionIcon: {
    width: scale(96),
    height: scale(96),
    zIndex: 1,
  },
  emotionIconSelected: {
    width: scale(160),
    height: scale(160),
  },
  actionContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
  },
});

