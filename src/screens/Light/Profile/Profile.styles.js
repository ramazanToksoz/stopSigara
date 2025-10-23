import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(50),
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: scale(10),
  },
  
  // Avatar Section
  avatarSection: {
    alignItems: 'center',
    marginTop: verticalScale(16),
    marginBottom: verticalScale(24),
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  avatar: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
  },
  avatarButtons: {
    position: 'absolute',
    bottom: verticalScale(-12),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarButton: {
    backgroundColor: '#F4F4F6', // Gray/5 from Figma
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(4),
  },
  avatarButtonIcon: {
    width: scale(16),
    height: scale(16),
    tintColor: '#54565F', // Gray/60
  },
  plusBadge: {
    backgroundColor: '#58B658', // Brand/60 from Figma
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(14),
    marginTop: verticalScale(12),
  },
  plusIcon: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(4),
  },
  plusText: {
    fontFamily: 'DMSans-ExtraBold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: '#F7FDF7', // Brand/5 from Figma
    letterSpacing: -0.084,
  },

  // User Info
  userInfo: {
    alignItems: 'center',
    marginBottom: verticalScale(24),
  },
  userName: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    color: '#3C3E44', // Gray/80 from Figma
    letterSpacing: -0.288,
    marginBottom: verticalScale(4),
  },
  memberSince: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: '#6C707A', // Gray/40 from Figma
    letterSpacing: -0.065,
  },

  // Metrics Card
  metricsCard: {
    backgroundColor: '#FFFFFF', // Gray/0 from Figma
    borderRadius: moderateScale(14),
    padding: scale(16),
    marginBottom: verticalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    // Additional shadow for the second shadow
    shadowColor: 'rgba(44, 44, 50, 0.16)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.144,
    marginBottom: verticalScale(4),
  },
  metricLabel: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: '#8E949F', // Gray/30 from Figma
    letterSpacing: -0.065,
    textAlign: 'center',
  },

  // Achievements Section
  achievementsSection: {
    marginBottom: verticalScale(24),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  sectionTitleContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
    marginBottom: verticalScale(2),
  },
  sectionSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: '#60646C', // Gray/50 from Figma
    letterSpacing: -0.065,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(8),
  },
  viewAllText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    color: '#58B658', // Brand/60 from Figma
    letterSpacing: -0.084,
    marginRight: scale(8),
  },
  viewAllIcon: {
    width: scale(25.667),
    height: scale(20.667),
    tintColor: '#58B658', // Brand/60 from Figma
  },
  achievementsList: {
    backgroundColor: '#FFFFFF', // Gray/0 from Figma
    borderRadius: moderateScale(14),
    padding: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: verticalScale(88),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    // Additional shadow for the second shadow
    shadowColor: 'rgba(44, 44, 50, 0.16)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  achievementItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementBadge: {
    width: scale(80),
    height: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(4),
  },
  achievementIcon: {
    width: scale(32),
    height: scale(32),
  },

  // Community Section
  communitySection: {
    marginBottom: verticalScale(24),
  },
  communityMetrics: {
    backgroundColor: '#FFFFFF', // Gray/0 from Figma
    borderRadius: moderateScale(14),
    padding: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    // Additional shadow for the second shadow
    shadowColor: 'rgba(44, 44, 50, 0.16)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  communityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  communityIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(8),
    tintColor: '#58B658', // Brand/60 from Figma
  },
  communityTextContainer: {
    flex: 1,
  },
  communityValue: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: '#58B658', // Brand/60 from Figma
    letterSpacing: -0.144,
    marginBottom: verticalScale(2),
  },
  communityLabel: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: '#8E949F', // Gray/30 from Figma
    letterSpacing: -0.065,
  },
});
