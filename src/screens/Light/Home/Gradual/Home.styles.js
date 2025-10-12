import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Top Section - Green Background
  topSection: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: scale(18),
    paddingBottom: verticalScale(52),
    gap: verticalScale(4),
    backgroundColor: Colors.brand[60],
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: verticalScale(44),
  },
  
  // Top Navigation
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    width: '100%',
    maxWidth: scale(393),
    height: verticalScale(48),
  },
  
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  
  avatarContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: 9999,
    overflow: 'hidden',
  },
  
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  textContainer: {
    flexDirection: 'column',
    gap: verticalScale(-4),
  },
  
  greetingText: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006 * moderateScale(14),
    color: Colors.gray[5],
  },
  
  userName: {
    fontFamily: 'DMSans_24pt-bold',
    fontSize: moderateScale(20),
    lineHeight: moderateScale(28),
    letterSpacing: -0.01 * moderateScale(20),
    color: '#FFFFFF',
  },
  
  notificationButton: {
    width: scale(24),
    height: scale(24),
    borderRadius: 360,
  },
  
  notificationIcon: {
    width: scale(24),
    height: scale(24),
    position: 'relative',
  },
  
  iconImage: {
    width: '100%',
    height: '100%',
    tintColor: '#FFFFFF',
  },
  
  indicator: {
    position: 'absolute',
    width: scale(8),
    height: scale(8),
    right: scale(-0.5),
    top: scale(-0.5),
    backgroundColor: '#FF6565',
    borderRadius: scale(4),
  },
  
  // Main Content
  mainContent: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    gap: verticalScale(20),
    width: '100%',
  },
  
  topContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(4),
    width: '100%',
  },
  
  mainTitle: {
    width: '100%',
    fontFamily: 'DMSans-ExtraBold',
    fontSize: moderateScale(48),
    lineHeight: moderateScale(56),
    textAlign: 'center',
    letterSpacing: -0.016 * moderateScale(48),
    color: '#FFFFFF',
  },
  
  subtitle: {
    width: '100%',
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    textAlign: 'center',
    letterSpacing: -0.008 * moderateScale(18),
    color: Colors.brand[20],
  },
  
  // Metrics
  metricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(14),
  },
  
  metricCard: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(18),
    width: scale(100),
    height: verticalScale(76),
    backgroundColor: Colors.brand[60],
    borderWidth: 1,
    borderColor: Colors.brand[50],
    borderRadius: 16,
  },
  
  metricValue: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(26),
    lineHeight: moderateScale(32),
    textAlign: 'center',
    letterSpacing: -0.013 * moderateScale(26),
    color: '#FFFFFF',
  },
  
  metricLabel: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    textAlign: 'center',
    letterSpacing: -0.006 * moderateScale(14),
    color: Colors.brand[20],
  },
  
  // Bottom Content
  bottomContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Content Container
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(16),
    gap: verticalScale(24),
  },
  
  // Daily Check-In Card
  cardMission: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(18),
    gap: scale(12),
    width: scale(353),
    height: verticalScale(76),
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 4,
  },
  
  cardTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006 * moderateScale(14),
    color: Colors.gray[40],
  },
  
  cardSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005 * moderateScale(13),
    color: Colors.gray[30],
  },
  
  checkInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(12),
    gap: scale(8),
    width: scale(112),
    height: verticalScale(32),
    backgroundColor: Colors.brand[60],
    borderRadius: 8,
    shadowColor: Colors.brand[60],
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  
  buttonText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006 * moderateScale(14),
    color: '#FFFFFF',
  },
  
  arrowIcon: {
    width: scale(16),
    height: scale(16),
    tintColor: '#FFFFFF',
  },
  
  // Section Headings
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(352.5),
    height: verticalScale(32),
  },
  
  sectionMain: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(2),
  },
  
  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007 * moderateScale(16),
    color: Colors.gray[60],
  },
  
  // Craving Assistance
  cravingSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(8),
    width: scale(352.5),
    height: verticalScale(120),
  },
  
  assistanceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: scale(12),
    width: scale(352.5),
    height: verticalScale(80),
  },
  
  assistanceItem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(8),
    height: verticalScale(80),
  },
  
  assistanceIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(14),
    gap: scale(10),
    width: scale(56),
    height: scale(56),
    borderWidth: 1,
    borderColor: Colors.gray[10],
    borderRadius: 14,
  },
  
  assistanceLabel: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    textAlign: 'center',
    letterSpacing: -0.005 * moderateScale(13),
    color: Colors.gray[30],
  },
  
  // Next Milestone
  milestoneSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(8),
    width: scale(352.5),
    height: verticalScale(154),
  },
  
  milestoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(16),
    gap: scale(12),
    width: scale(352.5),
    height: verticalScale(114),
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#2C2C32',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  
  milestoneMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16),
    flex: 1,
  },
  
  milestoneLeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(48),
    height: verticalScale(70),
  },
  
  improvement: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(4),
    width: scale(48),
    height: verticalScale(70),
  },
  
  milestoneIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(50),
    height: scale(50),
    backgroundColor: Colors.gray[60],
    borderRadius: 9999,
  },
  
  progressCircle: {
    position: 'absolute',
    width: scale(50),
    height: scale(50),
    borderWidth: 4,
    borderColor: Colors.brand[60],
    borderRadius: 9999,
  },
  
  milestoneIconImage: {
    width: scale(24),
    height: scale(24),
    tintColor: '#FFFFFF',
  },
  
  progressText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005 * moderateScale(13),
    color: Colors.gray[60],
  },
  
  milestoneText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    height: verticalScale(82),
  },
  
  milestoneTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007 * moderateScale(16),
    color: Colors.gray[60],
  },
  
  milestoneSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006 * moderateScale(14),
    color: Colors.gray[30],
  },
  
  // Community Feed
  communitySection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(8),
    width: scale(353),
    height: verticalScale(400),
  },
  
  viewAllButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
    width: scale(76),
    height: verticalScale(32),
  },
  
  viewAllText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006 * moderateScale(14),
    color: Colors.brand[60],
  },
  
  postCard: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: scale(16),
    gap: verticalScale(12),
    width: scale(353),
    height: verticalScale(360),
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#2C2C32',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  
  postTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(8),
    width: scale(321),
    height: verticalScale(48),
  },
  
  postLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    height: verticalScale(48),
  },
  
  postAvatar: {
    width: scale(48),
    height: scale(48),
    borderRadius: 9999,
  },
  
  postUserInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: verticalScale(4),
    height: verticalScale(42),
  },
  
  postUserName: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007 * moderateScale(16),
    color: Colors.gray[60],
  },
  
  postTime: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005 * moderateScale(13),
    color: Colors.gray[40],
  },
  
  postOptions: {
    width: scale(24),
    height: scale(24),
  },
  
  optionsIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: Colors.gray[30],
  },
  
  postBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(10),
    width: scale(321),
    height: verticalScale(240),
  },
  
  postContent: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006 * moderateScale(14),
    color: Colors.gray[60],
  },
  
  postImage: {
    width: scale(321),
    height: verticalScale(170),
    backgroundColor: Colors.gray[10],
    borderRadius: 18,
  },
  
  postBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(10),
    width: scale(321),
    height: verticalScale(16),
  },
  
  postLeftActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(16),
    height: verticalScale(16),
  },
  
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
    height: verticalScale(16),
  },
  
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
    height: verticalScale(16),
  },
  
  actionIcon: {
    width: scale(16),
    height: scale(16),
    tintColor: Colors.gray[40],
  },
  
  actionText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005 * moderateScale(13),
    color: Colors.gray[40],
  },
  
  postRightActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(16),
    width: scale(16),
    height: verticalScale(16),
  },
});

