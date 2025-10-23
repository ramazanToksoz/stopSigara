import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },

  topNavigation: {
    
  
    marginTop: verticalScale(45),
  },
  // Content
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(16),
  },

  main: {
    flexDirection: 'column',
    gap: verticalScale(32),
  },

  // Compose Section
  compose: {
    flexDirection: 'column',
    gap: verticalScale(12),
    maxWidth: scale(353),
    width: '100%',
  },

  composeTop: {
    flexDirection: 'row',
    height: verticalScale(120),
    gap: scale(12),
  },

  composeTopMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },

  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },

  textInput: {
    flex: 1,
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(18), // Body lg/Medium from Figma
    lineHeight: moderateScale(24),
    color: '#8E949F', // Gray/30 from Figma
    letterSpacing: -0.144,
    textAlignVertical: 'top',
    minHeight: verticalScale(24),
  },

  composeBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },

});
