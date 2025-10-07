import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    position: 'relative',
  },
  
  notch: {
    position: 'absolute',
    height: 30,
    left: 0,
    right: 0,
    top: 0,
  },
  
  // Time
  timeContainer: {
    position: 'absolute',
    width: 54,
    height: 21,
    left: 21,
    top: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  timeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  
  timeTextDark: {
    color: '#FFFFFF',
  },
  
  // Status Icons Container
  statusIcons: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    width: 69,
    height: 14,
    right: 14,
    top: 16,
  },
  
  // Network Signal
  networkSignal: {
    width: 20,
    height: 14,
    position: 'relative',
  },
  
  signalBar1: {
    position: 'absolute',
    left: '55%',
    right: '30%',
    top: '28.57%',
    bottom: '14.29%',
    backgroundColor: '#000000',
  },
  
  signalBar2: {
    position: 'absolute',
    left: '32.5%',
    right: '52.5%',
    top: '42.86%',
    bottom: '14.29%',
    backgroundColor: '#000000',
  },
  
  signalBar3: {
    position: 'absolute',
    left: '10%',
    right: '75%',
    top: '53.57%',
    bottom: '14.29%',
    backgroundColor: '#000000',
  },
  
  emptyBar: {
    position: 'absolute',
    left: '77.5%',
    right: '7.5%',
    top: '14.29%',
    bottom: '14.29%',
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
  },
  
  signalBarDark: {
    backgroundColor: '#FFFFFF',
  },
  
  emptyBarDark: {
    backgroundColor: 'rgba(235, 235, 245, 0.3)',
  },
  
  // WiFi Signal
  wifiSignal: {
    width: 16,
    height: 14,
    position: 'relative',
  },
  
  wifiPath1: {
    position: 'absolute',
    left: '37.11%',
    right: '35.57%',
    top: '63.85%',
    bottom: '14.29%',
    backgroundColor: '#000000',
  },
  
  wifiPath2: {
    position: 'absolute',
    left: '21.66%',
    right: '20.1%',
    top: '39.07%',
    bottom: '37.26%',
    backgroundColor: '#000000',
  },
  
  wifiPath3: {
    position: 'absolute',
    left: '6.25%',
    right: '4.69%',
    top: '14.29%',
    bottom: '54.84%',
    backgroundColor: '#000000',
  },
  
  wifiPathDark: {
    backgroundColor: '#FFFFFF',
  },
  
  // Battery
  battery: {
    width: 25,
    height: 14,
    position: 'relative',
  },
  
  batteryOutline: {
    position: 'absolute',
    width: 23,
    height: 12,
    left: 0,
    top: 1,
    borderWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.6)',
    borderRadius: 3,
  },
  
  batteryFill: {
    position: 'absolute',
    width: 19,
    height: 8,
    left: 2,
    top: 3,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  
  batteryTip: {
    position: 'absolute',
    width: 1,
    height: 4,
    left: 24,
    top: 5,
    backgroundColor: 'rgba(60, 60, 67, 0.6)',
  },
  
  batteryOutlineDark: {
    borderColor: 'rgba(235, 235, 245, 0.3)',
  },
  
  batteryFillDark: {
    backgroundColor: '#FFFFFF',
  },
  
  batteryTipDark: {
    backgroundColor: 'rgba(235, 235, 245, 0.3)',
  },
});

