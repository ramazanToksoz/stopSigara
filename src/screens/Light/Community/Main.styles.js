import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    marginTop : verticalScale(20),
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },
  
  content: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(16),
  },

  // Search Bar
  searchContainer: {
    marginBottom: verticalScale(16),
  },

  searchInputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    height: verticalScale(48),
    shadowColor: '#6A7384',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },

  // Filter Buttons
  filterScrollContainer: {
    marginBottom: verticalScale(32),
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    paddingHorizontal: scale(4),
  },

  filterButton: {
    backgroundColor: '#E9EAEC', // Gray/10 from Figma
    borderRadius: 8,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(6),
    minWidth: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterButtonActive: {
    backgroundColor: '#58B658', // Brand/60 from Figma
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },

  filterButtonText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(12), // Küçük font boyutu
    lineHeight: moderateScale(16),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.084,
    textAlign: 'center',
  },

  filterButtonTextActive: {
    color: '#FFFFFF',
  },

  // Posts
  postsContainer: {
    flexDirection: 'column',
    gap: verticalScale(24),
  },

  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: scale(16),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(44, 44, 50, 0.16)',
  },

  // Post Header
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },

  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },

  userAvatar: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    overflow: 'hidden',
  },

  avatarImage: {
    width: '100%',
    height: '100%',
  },

  userDetails: {
    flexDirection: 'column',
    gap: verticalScale(4),
  },

  userName: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold from Figma
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
  },

  timeAgo: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13), // Body xs/Regular from Figma
    lineHeight: moderateScale(16),
    color: '#6C707A', // Gray/40 from Figma
    letterSpacing: -0.065,
  },

  moreButton: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },

  moreIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: '#54565F',
  },

  // Post Content
  postContent: {
    flexDirection: 'column',
    gap: verticalScale(10),
    marginBottom: verticalScale(12),
  },

  postText: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14), // Body sm/Regular from Figma
    lineHeight: moderateScale(20),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.084,
  },

  postImageContainer: {
    height: verticalScale(170),
    borderRadius: 18,
    overflow: 'hidden',
  },

  postImage: {
    width: '100%',
    height: '100%',
  },

  // Post Link
  postLinkContainer: {
    borderWidth: 1,
    borderColor: '#E9EAEC',
    borderRadius: 18,
    overflow: 'hidden',
  },

  postLink: {
    flexDirection: 'row',
  },

  linkImageContainer: {
    height: verticalScale(170),
    flex: 1,
  },

  linkImage: {
    width: '100%',
    height: '100%',
  },

  linkTextContainer: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    justifyContent: 'center',
  },

  linkTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14), // Body sm/Bold from Figma
    lineHeight: moderateScale(20),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.084,
    marginBottom: verticalScale(4),
  },

  linkUrl: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14), // Body sm/Regular from Figma
    lineHeight: moderateScale(20),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.084,
  },

  // Post Actions
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  postActionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16),
  },

  postActionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16),
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },

  actionIcon: {
    width: scale(16),
    height: scale(16),
    tintColor: '#6C707A',
  },

  actionText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13), // Body xs/Bold from Figma
    lineHeight: moderateScale(16),
    color: '#6C707A', // Gray/40 from Figma
    letterSpacing: -0.065,
  },
});
