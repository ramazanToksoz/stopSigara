import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: scale(16),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: verticalScale(12),
  },
  darkPostCard: {
    backgroundColor: Colors.gray[90],
  },
  postTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  postLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  postAvatar: {
    width: scale(48),
    height: scale(48),
    borderRadius: 9999,
  },
  postUserInfo: {
    gap: verticalScale(4),
  },
  postUserName: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    color: Colors.gray[60],
  },
  darkPostUserName: {
    color: Colors.gray[5],
  },
  postTime: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: Colors.gray[40],
  },
  darkPostTime: {
    color: Colors.gray[30],
  },
  postOptions: {
    width: scale(24),
    height: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsIcon: {
    width: scale(24),
    height: scale(24),
  },
  postBody: {
    gap: verticalScale(10),
    marginBottom: verticalScale(12),
  },
  postContent: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: Colors.gray[60],
  },
  darkPostContent: {
    color: Colors.gray[5],
  },
  postImage: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: 18,
  },
  linkPreview: {
    borderWidth: 1,
    borderColor: '#E9EAEC',
    borderRadius: 18,
    overflow: 'hidden',
  },
  darkLinkPreview: {
    borderColor: Colors.gray[60],
  },
  linkImage: {
    width: '100%',
    height: verticalScale(170),
  },
  linkText: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    gap: verticalScale(4),
  },
  linkTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: Colors.gray[60],
  },
  darkLinkTitle: {
    color: Colors.gray[5],
  },
  linkUrl: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: Colors.gray[40],
  },
  darkLinkUrl: {
    color: Colors.gray[30],
  },
  postBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postLeftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16),
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  actionIcon: {
    width: scale(16),
    height: scale(16),
  },
  actionText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: Colors.gray[40],
  },
  darkActionText: {
    color: Colors.gray[30],
  },
  postRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(20),
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: scale(20),
    width: '90%',
    maxHeight: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(16),
  },
  closeButtonText: {
    fontSize: moderateScale(16),
    color: Colors.gray[60],
    fontWeight: 'bold',
  },
});
