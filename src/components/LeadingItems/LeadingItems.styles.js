import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  },
  darkContainer: {
    backgroundColor: Colors.gray[95],
  },
  darkBackground: {
    position: 'absolute',
    backgroundColor: Colors.gray[95],
    height: verticalScale(123),
    width: scale(565),
    left: scale(776),
    top: verticalScale(145),
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(72),
    lineHeight: moderateScale(80),
    color: Colors.black,
    letterSpacing: -1.44,
  },
  darkTitle: {
    color: Colors.gray[0],
  },

  // Default Type Styles
  defaultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(40),
    height: scale(40),
  },
  darkDefaultContainer: {
    backgroundColor: Colors.gray[80],
  },
  defaultIcon: {
    tintColor: Colors.gray[60],
  },
  defaultPlaceholder: {
    backgroundColor: Colors.gray[20],
    borderRadius: scale(4),
  },

  // IconWithBg Type Styles
  iconWithBgContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWithBgIcon: {
    tintColor: Colors.brand[60],
  },

  // Icon Type Styles
  iconContainer: {
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    tintColor: Colors.gray[60],
  },

  // IconWithSoftBg Type Styles
  iconWithSoftBgContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWithSoftBgIcon: {
    tintColor: Colors.gray[60],
  },

  // Payment Type Styles
  paymentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentBase: {
    backgroundColor: Colors.gray[0],
    borderWidth: 1,
    borderColor: Colors.gray[20],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  paymentIcon: {
    tintColor: Colors.gray[60],
  },

  // Social Type Styles
  socialContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialPlaceholder: {
    backgroundColor: Colors.gray[20],
    borderRadius: scale(4),
  },

  // Home Type Styles
  homeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  homeAvatarContainer: {
    borderRadius: scale(9999),
    overflow: 'hidden',
  },
  homeAvatar: {
    width: '100%',
    height: '100%',
  },
  homeAvatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.gray[20],
  },
  homeTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
  },
  homeGreeting: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: Colors.gray[40],
    letterSpacing: -0.084,
    width: '100%',
    flex: 1,
  },
  darkHomeGreeting: {
    color: Colors.gray[60],
  },
  homeName: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(20),
    lineHeight: moderateScale(28),
    color: Colors.gray[60],
    letterSpacing: -0.2,
    width: '100%',
    flex: 1,
  },
  darkHomeName: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    color: Colors.gray[0],
    letterSpacing: -0.288,
    width: '100%',
    flex: 1,
  },

  // IconButton Type Styles
  iconButtonContainer: {
    backgroundColor: Colors.brand[60],
    borderRadius: scale(360),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },
  iconButtonIcon: {
    tintColor: Colors.gray[0],
  },

  // Improvement Type Styles
  improvementContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(4),
    width: '100%',
    minHeight: verticalScale(60), // Minimum height for text to show
  },
  improvementCircleContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    isolation: 'isolate',
  },
  improvementBackgroundCircle: {
    position: 'absolute',
    backgroundColor: Colors.gray[60], // #54565F
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  improvementProgressBorder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  improvementProgressArc: {
    position: 'absolute',
    borderColor: Colors.brand[60], // #58B658
    borderWidth: 4,
    borderRadius: 9999,
    width: '100%',
    height: '100%',
  },
  improvementSvgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  improvementCenterIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  improvementIcon: {
    tintColor: Colors.gray[0], // #FFFFFF - Beyaz
  },
  improvementPercent: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: Colors.gray[60],
    letterSpacing: -0.065,
    textAlign: 'center',
    width: '100%',
    marginTop: verticalScale(4),
  },
  darkImprovementPercent: {
    color: Colors.gray[5],
  },

  // Locked Achievement Type Styles
  lockedAchievementContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(4),
    width: scale(64),
  },
  lockedAchievementBadge: {
    height: scale(64),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  lockedAchievementPolygon: {
    position: 'absolute',
    width: scale(54.56),
    height: scale(63),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedAchievementInnerPolygon: {
    width: scale(43),
    height: scale(49),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedAchievementIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: Colors.gray[40],
  },
  lockedAchievementText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: Colors.gray[40],
    textAlign: 'center',
    letterSpacing: -0.065,
    width: '100%',
  },
  darkLockedAchievementText: {
    color: Colors.gray[60],
  },

  // Avatar Type Styles
  avatarContainer: {
    borderRadius: scale(9999),
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.gray[20],
  },
});