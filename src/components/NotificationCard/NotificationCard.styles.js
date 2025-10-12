import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  notificationCard: {
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    borderRadius: 16,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
    marginBottom: verticalScale(14),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
  },
  
  darkNotificationCard: {
    backgroundColor: Colors.gray[90],
  },
  
  unreadCard: {
    backgroundColor: '#F8FFFE', // Very light green tint
  },
  
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(12),
  },
  
  iconContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  notificationIcon: {
    width: scale(20),
    height: scale(20),
  },
  
  largeIconContainer: {
    width: scale(48),
    height: scale(48),
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  largeNotificationIcon: {
    width: scale(24),
    height: scale(24),
  },
  
  textContainer: {
    flex: 1,
    gap: verticalScale(4),
  },
  
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: verticalScale(2),
  },
  
  notificationTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60
    flex: 1,
    marginRight: scale(8),
  },
  
  darkNotificationTitle: {
    color: Colors.gray[5],
  },
  
  unreadTitle: {
    color: Colors.gray[80],
    fontWeight: '700',
  },
  
  notificationMessage: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14), // Body sm/Regular
    lineHeight: moderateScale(20),
    color: '#8E949F', // Gray/30
    marginBottom: verticalScale(4),
  },
  
  darkNotificationMessage: {
    color: Colors.gray[20],
  },
  
  notificationTime: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13), // Body xs/Regular
    lineHeight: moderateScale(18),
    color: '#8E949F', // Gray/30
    flexShrink: 0,
  },
  
  darkNotificationTime: {
    color: Colors.gray[30],
  },
  
  unreadIndicator: {
    width: scale(10),
    height: scale(10),
    borderRadius: 5,
    marginTop: verticalScale(6),
    flexShrink: 0,
  },

  // Avatar + Icon System
  avatarIconContainer: {
    position: 'relative',
    width: scale(40),
    height: scale(40),
    flexShrink: 0,
  },

  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },

  notificationTypeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationTypeIconImage: {
    width: scale(10),
    height: scale(10),
    tintColor: '#FFFFFF',
  },

  // Detailed Message
  detailedMessageContainer: {
    marginTop: verticalScale(6),
    paddingLeft: scale(52), // Align with text content
  },

  detailedMessage: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14), // Body sm/Regular
    lineHeight: moderateScale(20),
    color: '#3C3E44', // Gray/80
  },

  darkDetailedMessage: {
    color: Colors.gray[20],
  },
  
  
  // Type-specific styles
  successCard: {
    borderLeftColor: Colors.brand[60],
  },
  
  warningCard: {
    borderLeftColor: '#FFB800',
  },
  
  errorCard: {
    borderLeftColor: Colors.semantic.destructive,
  },
  
  achievementCard: {
    borderLeftColor: '#8B5CF6',
  },
  
  infoCard: {
    borderLeftColor: Colors.brand[60],
  },
});
