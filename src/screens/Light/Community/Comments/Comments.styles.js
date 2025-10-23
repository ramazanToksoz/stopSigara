import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  // Backdrop
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  // Modal Content
  modalContent: {
    width: '100%',
    height: '85%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    overflow: 'hidden',
  },

  // Content
  content: {
    flex: 1,
  },

  // Header
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(16),
    paddingTop: 0,
    paddingBottom: verticalScale(32),
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
  },

  drawerHandle: {
    width: scale(64),
    height: verticalScale(5),
    backgroundColor: '#E5E7EB', // Gray/20
    borderRadius: scale(1234),
    alignSelf: 'center',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(32),
  },

  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionMain: {
    flexDirection: 'column',
    gap: verticalScale(2),
  },

  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60
    letterSpacing: -0.112,
  },

  // Comments List
  commentsList: {
    flexDirection: 'column',
    gap: verticalScale(10),
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(20),
  },

  commentWrapper: {
    width: '100%',
    backgroundColor: '#F4F4F6', // Gray/5 from Figma
    borderRadius: scale(16),
    padding: scale(16),
    gap: verticalScale(12),
  },

  replyWrapper: {
    marginLeft: scale(24),
    maxWidth: scale(337), // 361 - 24
    backgroundColor: '#F4F4F6', // Gray/5 from Figma
    borderRadius: scale(16),
    padding: scale(16),
    gap: verticalScale(12),
  },


});
