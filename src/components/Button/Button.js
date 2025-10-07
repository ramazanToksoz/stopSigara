import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { styles } from './Button.styles';

const Button = ({ 
  text,
  type = 'primary', // primary, neutral
  buttonStyle = 'default', // default, outline, text, soft
  size = 'default', // default, sm, xs
  mode = 'light', // light, dark
  disabled = false,
  onPress,
  hideArrow = false, // Arrow'u gizlemek için
}) => {
  const isDark = mode === 'dark';
  
  const getContainerStyle = () => {
    const styleArray = [styles.container];
    
    // Size
    styleArray.push(styles[`container_${size}`]);
    
    // Type and Style
    if (buttonStyle === 'default') {
      styleArray.push(styles[`${type}_default`]);
      if (isDark) styleArray.push(styles[`${type}_default_dark`]);
      if (disabled) {
        styleArray.push(styles.disabled);
        if (isDark) styleArray.push(styles.disabled_dark);
      }
    } else if (buttonStyle === 'outline') {
      styleArray.push(styles[`${type}_outline`]);
      if (isDark) styleArray.push(styles[`${type}_outline_dark`]);
      if (disabled) {
        styleArray.push(styles.disabled_outline);
        if (isDark) styleArray.push(styles.disabled_outline_dark);
      }
    } else if (buttonStyle === 'soft') {
      styleArray.push(styles[`${type}_soft`]);
      if (isDark) styleArray.push(styles[`${type}_soft_dark`]);
      if (disabled) {
        styleArray.push(styles.disabled_soft);
        if (isDark) styleArray.push(styles.disabled_soft_dark);
      }
    }
    
    return styleArray;
  };
  
  const getTextStyle = () => {
    const styleArray = [styles.text];
    
    // Size
    styleArray.push(styles[`text_${size}`]);
    
    // Type and Style
    if (buttonStyle === 'default') {
      styleArray.push(styles.text_default);
    } else if (buttonStyle === 'outline' || buttonStyle === 'text' || buttonStyle === 'soft') {
      styleArray.push(styles[`text_${type}`]);
      if (buttonStyle === 'soft' && isDark && type === 'primary') {
        styleArray.push(styles.text_soft_dark);
      }
    }
    
    if (disabled) {
      styleArray.push(styles.text_disabled);
      if (isDark) styleArray.push(styles.text_disabled_dark);
    }
    
    return styleArray;
  };
  
  const getIconSize = () => {
    if (size === 'xs') return 18;
    if (size === 'sm') return 20;
    return 24;
  };
  
  // Arrow ikonunu göster (sadece default ve soft butonlarda)
  const shouldShowArrow = () => {
    if (hideArrow) return false;
    if (buttonStyle === 'text' || buttonStyle === 'outline') return false;
    return true;
  };
  
  if (buttonStyle === 'text') {
    return (
      <TouchableOpacity 
        style={[styles.textButton, styles[`textButton_${size}`]]} 
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <Text style={getTextStyle()}>{text}</Text>
      </TouchableOpacity>
    );
  }
  
  return (
    <TouchableOpacity 
      style={getContainerStyle()} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{text}</Text>
      {shouldShowArrow() && (
        <Image 
          source={require('../../assets/images/icons/arrow-right.png')} 
          style={{ 
            width: getIconSize(), 
            height: getIconSize(),
            tintColor: buttonStyle === 'default' ? '#FFFFFF' : (type === 'primary' ? '#58B658' : '#3C3E44')
          }} 
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

