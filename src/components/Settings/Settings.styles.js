import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: scale(24),
    shadowColor: 'rgba(0, 0, 0, 0.02)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 48,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(32),
    paddingBottom: verticalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: '#E9EAEC',
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(32),
    lineHeight: moderateScale(40),
    color: Colors.gray[60],
    marginRight: scale(16),
  },
  headerDivider: {
    width: 1,
    height: verticalScale(21),
    backgroundColor: Colors.gray[30],
    marginRight: scale(16),
  },
  subtitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    color: Colors.gray[60],
  },
  settingsList: {
    gap: verticalScale(16),
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: scale(16),
  },
  iconButton: {
    width: scale(24),
    height: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    width: scale(24),
    height: scale(24),
    backgroundColor: Colors.gray[30],
    borderRadius: scale(4),
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    color: Colors.gray[60],
    marginBottom: verticalScale(2),
  },
  settingSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    color: Colors.gray[40],
  },
  toggleContainer: {
    marginLeft: scale(16),
  },
});
