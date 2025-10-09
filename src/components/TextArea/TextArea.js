import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './TextArea.styles';

const TextArea = ({
  value = '',
  onChangeText,
  placeholder = '',
  maxLength,
  editable = true,
  darkMode = false,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    const isFilled = value && value.length > 0;
    
    if (darkMode) {
      if (isFilled) {
        return styles.containerDarkFilled;
      } else if (isFocused) {
        return styles.containerDarkActive;
      } else {
        return styles.containerDarkEmpty;
      }
    } else {
      if (isFocused) {
        return styles.containerLightActive;
      } else {
        return styles.containerLight;
      }
    }
  };

  const getTextStyle = () => {
    const isFilled = value && value.length > 0;
    
    if (darkMode) {
      return isFilled ? styles.textDarkFilled : styles.textDarkEmpty;
    } else {
      return isFilled ? styles.textLightFilled : styles.textLightEmpty;
    }
  };

  return (
    <View style={[getContainerStyle(), style]}>
      <TextInput
        style={[styles.input, getTextStyle()]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={darkMode ? '#6C707A' : '#8E949F'}
        multiline={true}
        numberOfLines={4}
        maxLength={maxLength}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        textAlignVertical="top"
        {...props}
      />
    </View>
  );
};

export default TextArea;

