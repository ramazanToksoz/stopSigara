import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './DatePicker.styles';

const DatePicker = ({
  // Selected date
  selectedDate,
  onDateSelect,
  
  // Min/Max dates
  minDate,
  maxDate,
  
  // Style
  darkMode = false,
  containerStyle,
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  
  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    // Convert Sunday (0) to 7 for Monday-first week
    return firstDay === 0 ? 6 : firstDay - 1;
  };
  
  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  // Check if date is selected
  const isDateSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };
  
  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };
  
  // Check if date is disabled
  const isDateDisabled = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    
    return false;
  };
  
  // Handle date selection
  const handleDateSelect = (day) => {
    if (isDateDisabled(day)) return;
    
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect && onDateSelect(newDate);
  };
  
  // Generate calendar grid
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const weeks = [];
    let week = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      week.push(null);
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    
    // Add remaining days to last week
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }
    
    return weeks;
  };
  
  const weeks = generateCalendar();
  
  return (
    <View style={[
      styles.container,
      darkMode && styles.containerDark,
      containerStyle
    ]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={[
            styles.monthText,
            darkMode && styles.monthTextDark
          ]}>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Text>
        </View>
        
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={goToPreviousMonth} activeOpacity={0.7}>
            <Image 
              source={require('../../assets/images/icons/arrow-left.png')}
              style={[
                styles.arrowIcon,
                styles.arrowLeft,
                darkMode && styles.arrowIconDark
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={goToNextMonth} activeOpacity={0.7}>
            <Image 
              source={require('../../assets/images/icons/arrow-right1.png')}
              style={[
                styles.arrowIcon,
                darkMode && styles.arrowIconDark
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main Calendar */}
      <View style={styles.main}>
        {/* Weekdays */}
        <View style={styles.weekdays}>
          {weekDays.map((day, index) => (
            <Text 
              key={index}
              style={[
                styles.weekdayText,
                darkMode && styles.weekdayTextDark
              ]}
            >
              {day}
            </Text>
          ))}
        </View>
        
        {/* Calendar Grid */}
        <View style={styles.calendarGrid}>
          {weeks.map((week, weekIndex) => (
            <View key={weekIndex} style={styles.weekRow}>
              {week.map((day, dayIndex) => (
                <TouchableOpacity
                  key={dayIndex}
                  style={styles.daySlot}
                  onPress={() => day && handleDateSelect(day)}
                  disabled={!day || isDateDisabled(day)}
                  activeOpacity={0.7}
                >
                  {day && (
                    <View style={[
                      styles.dayContainer,
                      isDateSelected(day) && styles.dayContainerSelected,
                      isDateSelected(day) && darkMode && styles.dayContainerSelectedDark,
                    ]}>
                      <Text style={[
                        styles.dayText,
                        !day && styles.dayTextEmpty,
                        isDateDisabled(day) && styles.dayTextDisabled,
                        isToday(day) && !isDateSelected(day) && styles.dayTextToday,
                        isDateSelected(day) && styles.dayTextSelected,
                        darkMode && styles.dayTextDark,
                        darkMode && isDateDisabled(day) && styles.dayTextDisabledDark,
                      ]}>
                        {day || ''}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DatePicker;
