import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { styles } from './Checkbox.styles';

const Checkbox = ({
  checked = false,
  onPress,
  darkMode = false,
  disabled = false,
}) => {
  const getContainerStyle = () => {
    const baseStyle = [styles.container];
    
    if (checked) {
      baseStyle.push(styles.checked);
    } else {
      if (darkMode) {
        baseStyle.push(styles.uncheckedDark);
      } else {
        baseStyle.push(styles.uncheckedLight);
      }
    }
    
    return baseStyle;
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={getContainerStyle()}
    >
      {checked && (
        <View style={styles.checkmark} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

