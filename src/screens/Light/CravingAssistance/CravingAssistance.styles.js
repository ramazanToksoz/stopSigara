import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background
    paddingTop: verticalScale(60),
  },
  
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(20),
  },
  
  categorySection: {
    marginBottom: verticalScale(24),
  },
  
  sectionHeader: {
    height: verticalScale(32),
    justifyContent: 'center',
    marginBottom: verticalScale(12),
  },
  
  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60
    letterSpacing: -0.112,
  },
  
  cardsContainer: {
    flexDirection: 'row',
    gap: scale(16),
  },
});
