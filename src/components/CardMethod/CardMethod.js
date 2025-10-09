import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './CardMethod.styles';

const CardMethod = ({
  // Content
  title = 'Method Title',
  description = 'Method description',
  icon,
  
  // State
  selected = false,
  onPress,
  
  // Style
  darkMode = false,
  containerStyle,
}) => {
  
  const getContainerStyle = () => {
    const baseStyle = [styles.container];
    
    if (selected) {
      baseStyle.push(styles.containerSelected);
    }
    
    if (darkMode) {
      baseStyle.push(styles.containerDark);
      if (selected) {
        baseStyle.push(styles.containerSelectedDark);
      }
    }
    
    if (containerStyle) {
      baseStyle.push(containerStyle);
    }
    
    return baseStyle;
  };
  
  return (
    <TouchableOpacity 
      style={getContainerStyle()}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon && (
        <Image 
          source={icon}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
      
      <View style={styles.textContainer}>
        <Text style={[
          styles.title,
          darkMode && styles.titleDark
        ]}>
          {title}
        </Text>
        
        <Text style={[
          styles.description,
          darkMode && styles.descriptionDark
        ]}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMethod;
