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
    paddingVertical: verticalScale(16),
    justifyContent: 'space-between',
  },

  topSpacer: {
    height: verticalScale(24),
  },

  centerContent: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(24),
  },

  iconContainer: {
    width: scale(96),
    height: scale(96),
    alignItems: 'center',
    justifyContent: 'center',
  },

  successIcon: {
    width: '100%',
    height: '100%',
    tintColor: '#58B658', // Brand/60 from Figma
  },

  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(8),
    width: '100%',
  },

  title: {
    fontFamily: 'DMSans-ExtraBold',
    fontSize: moderateScale(26), // Heading xs/Extra Bold from Figma
    lineHeight: moderateScale(32),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.338,
    textAlign: 'center',
    width: '100%',
  },

  subtitle: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(18), // Body lg/Medium from Figma
    lineHeight: moderateScale(24),
    color: '#6C707A', // Gray/40 from Figma
    letterSpacing: -0.144,
    textAlign: 'center',
    width: '100%',
  },

  actionsContainer: {
    flexDirection: 'column',
    gap: verticalScale(16),
    width: '100%',
  },
});
