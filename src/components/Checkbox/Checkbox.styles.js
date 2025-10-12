import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    width: scale(18),
    height: scale(18),
    borderRadius: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // State=Default, Dark Mode=NO
  uncheckedLight: {
    backgroundColor: '#F4F4F6', // Gray/5
    borderWidth: 1,
    borderColor: '#C5C8CE', // Gray/20
  },
  
  // State=Default, Dark Mode=YES
  uncheckedDark: {
    backgroundColor: '#303236', // Gray/90
    borderWidth: 1,
    borderColor: '#54565F', // Gray/60
  },
  
  // State=Checked (Same for both modes)
  checked: {
    backgroundColor: '#46E01F', // Semantic/Success
    borderWidth: 1,
    borderColor: '#46E01F',
  },
  
  // Checkmark (white tick) - V shape
  checkmark: {
    width: scale(10),
    height: scale(7),
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '-45deg' }],
    marginTop: scale(-2),
  },
});

