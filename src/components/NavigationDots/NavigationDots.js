import React from 'react';
import { View } from 'react-native';
import { styles } from './NavigationDots.styles';

const NavigationDots = ({ mode = 'light', activePage = 1 }) => {
  const isDark = mode === 'dark';
  
  return (
    <View style={styles.container}>
      <View style={[
        activePage === 1 ? styles.dotActive : styles.dotInactive,
        isDark && activePage !== 1 && styles.dotInactiveDark
      ]} />
      <View style={[
        activePage === 2 ? styles.dotActive : styles.dotInactive,
        isDark && activePage !== 2 && styles.dotInactiveDark
      ]} />
      <View style={[
        activePage === 3 ? styles.dotActive : styles.dotInactive,
        isDark && activePage !== 3 && styles.dotInactiveDark
      ]} />
    </View>
  );
};

export default NavigationDots;

