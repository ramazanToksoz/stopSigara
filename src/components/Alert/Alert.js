import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Alert.styles';

const Alert = ({
  type = 'error', // 'error', 'warning', 'success'
  message = 'This is an alert',
  darkMode = false,
  onClose,
  visible = true,
}) => {
  if (!visible) return null;

  const getIcon = () => {
    switch (type) {
      case 'error':
        return (
          <Image 
            source={require('../../assets/images/icons/forbidden-2.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        );
      case 'warning':
        return (
          <Image 
            source={require('../../assets/images/icons/danger.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        );
      case 'success':
        return (
          <Image 
            source={require('../../assets/images/icons/tick-square.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        );
      default:
        return null;
    }
  };

  const containerStyle = darkMode ? styles.containerLight : styles.containerDark;
  const textStyle = darkMode ? styles.textLight : styles.textDark;
  const closeStyle = darkMode ? styles.closeDark : styles.closeLight;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.main}>
        {getIcon()}
        <Text style={[styles.text, textStyle]}>{message}</Text>
      </View>
      
      {onClose && (
        <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
          <Image source={require('../../assets/images/icons/close.png')} style={styles.closeButton} resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Alert;

