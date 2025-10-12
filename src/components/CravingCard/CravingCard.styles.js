import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  cravingCard: {
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    borderRadius: 16,
    padding: scale(16),
    marginBottom: verticalScale(12),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
    maxWidth: scale(172.5),
    minHeight: verticalScale(120),
  },
  
  cravingCardDark: {
    backgroundColor: '#1A1A1A',
  },

  cravingCardDisabled: {
    opacity: 0.6,
  },

  cravingCardCompact: {
    padding: scale(12),
    minHeight: verticalScale(100),
  },

  cravingCardFeatured: {
    borderWidth: 1,
    borderColor: '#58B658',
    shadowColor: 'rgba(88, 182, 88, 0.15)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: verticalScale(16),
  },
  
  iconContainer: {
    backgroundColor: '#F4F4F6', // Gray/5
    borderRadius: 12,
    padding: scale(8),
    marginRight: scale(12),
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainerDark: {
    backgroundColor: '#2A2A2A',
  },

  iconContainerDisabled: {
    backgroundColor: '#F0F0F0',
  },
  
  icon: {
    width: scale(24),
    height: scale(24),
  },

  iconDisabled: {
    opacity: 0.5,
  },
  
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  amountContainer: {
    flex: 1,
  },
  
  amount: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(24), // Heading xs/Bold
    lineHeight: moderateScale(28),
    color: '#54565F', // Gray/60
    letterSpacing: -0.338,
  },
  
  amountDark: {
    color: '#FFFFFF',
  },

  amountDisabled: {
    color: '#C0C0C0',
  },
  
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14), // Body sm/Bold
    lineHeight: moderateScale(20),
    color: '#54565F', // Gray/60
    letterSpacing: -0.084,
    marginBottom: verticalScale(2),
  },
  
  titleDark: {
    color: '#FFFFFF',
  },

  titleDisabled: {
    color: '#C0C0C0',
  },
  
  description: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(12), // Body xs/Medium
    lineHeight: moderateScale(16),
    color: '#8E949F', // Gray/30
    letterSpacing: -0.065,
  },
  
  descriptionDark: {
    color: '#CCCCCC',
  },

  descriptionDisabled: {
    color: '#D0D0D0',
  },
  
  buttonContainer: {
    backgroundColor: '#58B658', // Brand/60
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(6),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: 6,
    minWidth: scale(80),
  },

  buttonContainerDark: {
    backgroundColor: '#4CAF50',
  },

  buttonContainerDisabled: {
    backgroundColor: '#E0E0E0',
  },
  
  buttonText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(12), // Body xs/Bold
    lineHeight: moderateScale(16),
    color: '#FFFFFF',
    letterSpacing: -0.065,
  },

  buttonTextDark: {
    color: '#FFFFFF',
  },

  buttonTextDisabled: {
    color: '#9E9E9E',
  },
  
  arrowIcon: {
    width: scale(12),
    height: scale(12),
    tintColor: '#FFFFFF',
  },

  arrowIconDark: {
    tintColor: '#FFFFFF',
  },

  arrowIconDisabled: {
    tintColor: '#9E9E9E',
  },

  // Badge styles
  badge: {
    position: 'absolute',
    top: scale(8),
    right: scale(8),
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(2),
    borderRadius: 10,
    zIndex: 1,
  },

  badgeText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(10),
    color: '#FFFFFF',
    lineHeight: moderateScale(12),
  },

  // Title row styles
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(2),
  },

  lastUsed: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(10),
    color: '#8E949F',
    lineHeight: moderateScale(12),
  },

  lastUsedDark: {
    color: '#CCCCCC',
  },

  // Progress bar styles
  progressContainer: {
    marginTop: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },

  progressBar: {
    flex: 1,
    height: verticalScale(4),
    backgroundColor: '#F4F4F6',
    borderRadius: 2,
    marginRight: scale(8),
    overflow: 'hidden',
  },

  progressBarDark: {
    backgroundColor: '#2A2A2A',
  },

  progressFill: {
    height: '100%',
    borderRadius: 2,
  },

  progressText: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(10),
    color: '#8E949F',
    lineHeight: moderateScale(12),
    minWidth: scale(30),
    textAlign: 'right',
  },

  progressTextDark: {
    color: '#CCCCCC',
  },

  // Loading state
  buttonContainerLoading: {
    opacity: 0.8,
  },
});
