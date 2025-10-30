import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  
  // Background circle
  backgroundCircle: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 4,
    backgroundColor: 'transparent',
  },
  
  // Arc container
  arcContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Rotating arc
  arc: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 4,
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  
  // Sizes
  small: {
    width: 24,
    height: 24,
  },
  medium: {
    width: 32,
    height: 32,
  },
  large: {
    width: 40,
    height: 40,
  },

  // Fullscreen type styles
  fullscreenContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    zIndex: 1,
  },
  spinningCircleContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinningCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.brand[60],
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  loadingText: {
    marginTop: 24,
    fontSize: 16,
    color: Colors.gray[60],
    fontFamily: 'PlusJakartaSans-Medium',
  },
});