import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background
    paddingTop: verticalScale(60),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(20),
  },
  
  filterScrollContainer: {
    marginBottom: verticalScale(32),
  },
  
  filterContainer: {
    flexDirection: 'row',
    gap: scale(6),
    paddingHorizontal: scale(20),
  },
  
  filterButton: {
    backgroundColor: '#E9EAEC', // Gray/10
    borderRadius: scale(8), // rounded-sm
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    minWidth: scale(76),
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  filterButtonActive: {
    backgroundColor: '#58B658', // Brand/60
    shadowColor: 'rgba(88, 182, 88, 0.3)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },
  
  filterButtonText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14), // Body sm/Bold
    fontWeight: '700',
    lineHeight: moderateScale(20),
    color: '#54565F', // Gray/60
    textAlign: 'center',
  },
  
  filterButtonTextActive: {
    color: '#FFFFFF', // Gray/0 (White)
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    color: Colors.gray[60],
    textAlign: 'center',
    marginBottom: verticalScale(16),
  },
  subtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    color: Colors.gray[40],
    textAlign: 'center',
    paddingTop: verticalScale(40),
  },
});
