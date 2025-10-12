import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },

  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    marginTop: verticalScale(20),
  },

  section: {
    marginBottom: verticalScale(32),
    paddingTop: verticalScale(20),
  },

  sectionHeader: {
    marginBottom: verticalScale(16),
  },

  sectionTitleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(2),
  },

  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: scale(16),
    fontWeight: '700',
    lineHeight: verticalScale(22),
    color: '#54565F',
    letterSpacing: -0.112,
  },

  sectionSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: scale(13),
    fontWeight: '400',
    lineHeight: verticalScale(16),
    color: '#60646C',
    letterSpacing: -0.065,
  },

  improvementsList: {
    flexDirection: 'column',
    gap: verticalScale(16),
  },

  improvementTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: scale(16),
    fontWeight: '700',
    lineHeight: verticalScale(22),
    color: '#54565F',
    letterSpacing: -0.112,
  },

  improvementDescription: {
    fontFamily: 'DMSans-Regular',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: verticalScale(20),
    color: '#8E949F',
    letterSpacing: -0.084,
  },
});
