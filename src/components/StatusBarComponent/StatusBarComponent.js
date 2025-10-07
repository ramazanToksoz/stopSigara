import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './StatusBarComponent.styles';

const StatusBarComponent = ({ mode = 'light' }) => {
  const isDark = mode === 'dark';
  
  return (
    <View style={styles.container}>
      <View style={styles.notch} />
      
      {/* Time */}
      <View style={styles.timeContainer}>
        <Text style={[styles.timeText, isDark && styles.timeTextDark]}>
          9:41
        </Text>
      </View>
      
      {/* Status Icons */}
      <View style={styles.statusIcons}>
        {/* Network Signal */}
        <View style={styles.networkSignal}>
          <View style={[styles.signalBar1, isDark && styles.signalBarDark]} />
          <View style={[styles.signalBar2, isDark && styles.signalBarDark]} />
          <View style={[styles.signalBar3, isDark && styles.signalBarDark]} />
          <View style={[styles.emptyBar, isDark && styles.emptyBarDark]} />
        </View>
        
        {/* WiFi Signal */}
        <View style={styles.wifiSignal}>
          <View style={[styles.wifiPath1, isDark && styles.wifiPathDark]} />
          <View style={[styles.wifiPath2, isDark && styles.wifiPathDark]} />
          <View style={[styles.wifiPath3, isDark && styles.wifiPathDark]} />
        </View>
        
        {/* Battery */}
        <View style={styles.battery}>
          <View style={[styles.batteryOutline, isDark && styles.batteryOutlineDark]} />
          <View style={[styles.batteryFill, isDark && styles.batteryFillDark]} />
          <View style={[styles.batteryTip, isDark && styles.batteryTipDark]} />
        </View>
      </View>
    </View>
  );
};

export default StatusBarComponent;

