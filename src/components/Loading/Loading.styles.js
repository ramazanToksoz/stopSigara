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
});