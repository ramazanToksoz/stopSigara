import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './IconButton.styles';

const IconButton = ({ 
  type = 'Primary', 
  style = 'Default', 
  state = 'Default', 
  size = 'Default', 
  icon, 
  onPress,
  disabled = false 
}) => {
  const getButtonStyle = () => {
    if (type === 'Primary' && style === 'Default') {
      return styles.primaryDefault;
    }
    if (type === 'Primary' && style === 'Outline') {
      return styles.primaryOutline;
    }
    if (type === 'Primary' && style === 'Soft') {
      return styles.primarySoft;
    }
    return styles.primaryDefault;
  };

  const getIconStyle = () => {
    if (type === 'Primary') {
      return styles.primaryIcon;
    }
    return styles.baseIcon;
  };

  const getSizeStyle = () => {
    if (size === 'Sm') {
      return styles.sizeSm;
    }
    if (size === 'Xs') {
      return styles.sizeXs;
    }
    return styles.sizeDefault;
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        getSizeStyle(),
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && (
        <Image
          source={icon}
          style={[
            getIconStyle(),
            size === 'Sm' && styles.iconSm,
            size === 'Xs' && styles.iconXs
          ]}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
