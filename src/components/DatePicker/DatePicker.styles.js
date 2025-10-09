import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: scale(16),
    width: scale(311),
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 1,
    shadowRadius: moderateScale(4),
    elevation: 4,
    borderRadius: moderateScale(16),
  },
  
  containerDark: {
    backgroundColor: '#3C3E44', // Gray/80
    borderWidth: 1,
    borderColor: '#303236', // Gray/90
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: verticalScale(16),
  },
  
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  
  monthText: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005,
    fontFamily: 'DMSans-Medium',
    fontWeight: '500',
    color: '#54565F', // Gray/60
  },
  
  monthTextDark: {
    color: '#F4F4F6', // Gray/5
  },
  
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: scale(14),
  },
  
  arrowIcon: {
    width: scale(20),
    height: verticalScale(20),
    tintColor: '#54565F', // Gray/60
  },
  
 
  
  arrowIconDark: {
    tintColor: '#F4F4F6', // Gray/5
  },
  
  // Main Calendar
  main: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  
  // Weekdays
  weekdays: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: verticalScale(8),
  },
  
  weekdayText: {
    flex: 1,
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    letterSpacing: -0.005,
    fontFamily: 'DMSans-Medium',
    fontWeight: '500',
    color: '#C5C8CE', // Gray/20
    textAlign: 'center',
  },
  
  weekdayTextDark: {
    color: '#60646C', // Gray/50
  },
  
  // Calendar Grid
  calendarGrid: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: verticalScale(4),
  },
  
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  
  // Day Slot
  daySlot: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: scale(40),
    height: verticalScale(34),
  },
  
  dayContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(40),
    height: verticalScale(34),
    borderRadius: moderateScale(8),
  },
  
  dayContainerSelected: {
    backgroundColor: '#58B658', // Brand/60
    borderRadius: moderateScale(100),
  },
  
  dayContainerSelectedDark: {
    backgroundColor: '#58B658', // Brand/60 (same in dark mode)
  },
  
  dayText: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    letterSpacing: -0.006,
    fontFamily: 'DMSans-Medium',
    fontWeight: '500',
    color: '#45454A', // Gray/70
    textAlign: 'center',
  },
  
  dayTextEmpty: {
    color: '#E8E9F1', // Very light gray for empty slots
  },
  
  dayTextDisabled: {
    color: '#E8E9F1', // Very light gray for disabled dates
  },
  
  dayTextToday: {
    color: '#58B658', // Brand/60 - Today's date
  },
  
  dayTextSelected: {
    color: '#FFFFFF', // White text on selected date
  },
  
  dayTextDark: {
    color: '#F4F4F6', // Gray/5
  },
  
  dayTextDisabledDark: {
    color: '#60646C', // Gray/50
  },
});
