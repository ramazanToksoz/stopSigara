import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(24),
    paddingTop: verticalScale(60),
  },
  
  // Achievement Section
  achievementSection: {
    alignItems: 'center',
    gap: verticalScale(8),
    width: scale(209.667),
  },
  achievementBadge: {
    width: scale(128),
    height: scale(145),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(8),
  },
  achievementIcon: {
    width: scale(100),
    height: scale(100),
  },
  
  // Earned Date Section
  earnedDateSection: {
    alignItems: 'center',
  },
  earnedDateBadge: {
    backgroundColor: '#FFFFFF', // Gray/0 from Figma
    borderWidth: 1,
    borderColor: '#C5C8CE', // Gray/20 from Figma
    borderRadius: moderateScale(9999), // Full rounded
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
  },
  calendarIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: '#6C707A', // Gray/40 from Figma
  },
  earnedDateText: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: '#6C707A', // Gray/40 from Figma
    letterSpacing: -0.065,
    textAlign: 'center',
  },
  
  // Achievement Info
  achievementInfo: {
    alignItems: 'center',
    gap: verticalScale(16),
    width: scale(353),
  },
  achievementTitle: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: moderateScale(26),
    lineHeight: moderateScale(32),
    color: '#3C3E44', // Gray/80 from Figma
    textAlign: 'center',
    letterSpacing: -0.338,
  },
  achievementDescription: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    textAlign: 'center',
    letterSpacing: -0.112,
    maxWidth: scale(353),
  },
  
  // Action Buttons
  actionButtons: {
    width: '100%',
    gap: verticalScale(16),
  },
  shareButton: {
    backgroundColor: '#58B658', // Brand/60 from Figma
    borderRadius: moderateScale(14),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    minHeight: verticalScale(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },
  shareIcon: {
    width: scale(16.667),
    height: scale(16.667),
    tintColor: '#FFFFFF',
  },
  shareButtonText: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: '#FFFFFF',
    letterSpacing: -0.144,
  },
  backButton: {
    backgroundColor: '#E9EAEC', // Gray/10 from Figma
    borderRadius: moderateScale(14),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    minHeight: verticalScale(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
  },
  backIcon: {
    width: scale(16.667),
    height: scale(16.667),
    tintColor: '#54565F', // Gray/60 from Figma
  },
  backButtonText: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
  },
});
