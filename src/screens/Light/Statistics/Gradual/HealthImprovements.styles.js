import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },
  
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(36),
    paddingBottom: verticalScale(20),
  },

  section: {
    flexDirection: 'column',
    gap: verticalScale(16),
    marginBottom: verticalScale(32),
  },

  sectionHeader: {
    marginBottom: verticalScale(16),
  },

  sectionTitleContainer: {
    flexDirection: 'column',
    gap: verticalScale(2),
  },

  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold from Figma
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
  },

  sectionSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13), // Body xs/Regular from Figma
    lineHeight: moderateScale(16),
    color: '#60646C', // Gray/50 from Figma
    letterSpacing: -0.065,
  },

  improvementsList: {
    flexDirection: 'column',
    gap: verticalScale(16),
  },

  improvementTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold from Figma
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
  },

  improvementDescription: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14), // Body sm/Regular from Figma
    lineHeight: moderateScale(20),
    color: '#8E949F', // Gray/30 from Figma
    letterSpacing: -0.084,
  },
});
