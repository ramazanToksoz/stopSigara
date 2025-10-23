import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F6', // Gray/5 from Figma
    borderTopWidth: 1,
    borderTopColor: '#E9EAEC', // Gray/10
  },

  content: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(8),
  },

  chatInput: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(16),
    minHeight: verticalScale(48),
  },

  textField: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: scale(14),
    shadowColor: '#6A7384',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
    minHeight: verticalScale(48),
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(12),
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(8),
    width: '100%',
  },

  addButton: {
    width: scale(20),
    height: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(2),
  },

  addIcon: {
    width: scale(20),
    height: scale(20),
    tintColor: '#8E949F', // Gray/30
  },

  textInput: {
    width: '100%',
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(16), // Body md/Regular from Figma
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
    minHeight: verticalScale(24),
    textAlignVertical: 'top',
    paddingVertical: 0,
  },

  textInputFocused: {
    color: '#303236', // Gray/90
  },

  voiceButton: {
    width: scale(16.667),
    height: scale(16.667),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(2),
  },

  voiceIcon: {
    width: scale(16.667),
    height: scale(16.667),
    tintColor: '#8E949F', // Gray/30
  },

  sendButton: {
    backgroundColor: '#58B658', // Brand/60 from Figma
    borderRadius: scale(360),
    padding: scale(12),
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
    minWidth: scale(48),
    minHeight: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendButtonDisabled: {
    backgroundColor: '#E9EAEC', // Gray/10
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },

  sendIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: '#FFFFFF',
  },

  sendIconDisabled: {
    tintColor: '#8E949F', // Gray/30
  },

  disabledIcon: {
    tintColor: '#8E949F', // Gray/30
    opacity: 0.5,
  },
});
