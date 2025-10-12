import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './Input.styles';
import { Colors } from '../../constants/Colors';
const Input = ({
  // Type
  type = 'default', // 'default', 'password', 'phone', 'action', 'code'
  
  // Basic Props
  value = '',
  onChangeText,
  placeholder = 'Enter text',
  editable = true,
  
  // Icon Props
  hasLeadingIcon = false,
  leadingIcon,
  hasTrailingIcon = false,
  trailingIcon,
  
  // Password Props
  secureTextEntry = false,
  showPasswordToggle = true,
  
  // Separator
  hideSeparator = false,
  
  // Phone Props
  countryCode = '+90',
  countryFlag,
  onCountryPress,
  phonePrefix = '',
  
  // Action Props
  actionText = 'Send',
  actionIcon,
  onActionPress,
  actionDisabled = false,
  
  // Code Props
  codeLength = 1,
  codeIndex = 0,
  
  // Validation
  hasError = false,
  hasSuccess = false,
  
  // Style
  darkMode = false,
  containerStyle,
  inputStyle,
  
  // Keyboard
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  maxLength,
  
  // Callbacks
  onFocus,
  onBlur,
  onSubmitEditing,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // State management
  const isEmpty = !value || value.length === 0;
  const isFilled = value && value.length > 0;
  const isActive = isFocused;
  
  // Handle focus
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
  // Get container style based on state
  const getContainerStyle = () => {
    const baseStyle = [styles.container];
    
    if (darkMode) {
      baseStyle.push(styles.containerDark);
      if (isEmpty) baseStyle.push(styles.containerDarkEmpty);
      if (isActive) baseStyle.push(styles.containerDarkActive);
      if (isFilled) baseStyle.push(styles.containerDarkFilled);
    } else {
      if (isActive) baseStyle.push(styles.containerActive);
    }
    
    if (type === 'phone') {
      baseStyle.push(styles.containerPhone);
    }
    
    if (type === 'action') {
      baseStyle.push(styles.containerAction);
    }
    
    if (type === 'code') {
      baseStyle.push(styles.containerCode);
    }
    
    if (hasError) {
      baseStyle.push(styles.containerError);
    }
    
    if (hasSuccess) {
      baseStyle.push(styles.containerSuccess);
    }
    
    if (containerStyle) {
      baseStyle.push(containerStyle);
    }
    
    return baseStyle;
  };
  
  // Get text input style
  const getTextInputStyle = () => {
    const baseStyle = [styles.textInput];
    
    if (type === 'code') {
      baseStyle.push(styles.textInputCode);
    }
    
    // Password style when hidden
    if (type === 'password' && !isPasswordVisible) {
      baseStyle.push(styles.textInputPassword);
    }
    
    if (darkMode) {
      baseStyle.push(styles.textInputDark);
      if (isEmpty) baseStyle.push(styles.textInputDarkEmpty);
    } else {
      if (isEmpty) baseStyle.push(styles.textInputEmpty);
      if (isFilled) baseStyle.push(styles.textInputFilled);
    }
    
    if (inputStyle) {
      baseStyle.push(inputStyle);
    }
    
    return baseStyle;
  };
  
  // Get placeholder color
  const getPlaceholderColor = () => {
    if (darkMode) {
      return '#60646C'; // Gray/50
    }
    return Colors.gray[30]; // Gray/30
  };
  
  // Render Leading Icon
  const renderLeadingIcon = () => {
    if (!hasLeadingIcon || !leadingIcon) return null;
    
    return (
      <Image 
        source={leadingIcon}
        style={[
          styles.icon,
          darkMode && styles.iconDark
        ]}
        resizeMode="contain"
      />
    );
  };
  
  // Render Trailing Icon
  const renderTrailingIcon = () => {
    // Password toggle
    if (type === 'password' && showPasswordToggle) {
      return (
        <TouchableOpacity 
          onPress={togglePasswordVisibility}
          activeOpacity={0.7}
        >
          <Image 
            source={
              isPasswordVisible 
                ? require('../../assets/images/icons/eye.png')
                : require('../../assets/images/icons/eye-slash.png')
            }
            style={[
              styles.icon,
              darkMode && styles.iconDark
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    }
    
    // Success/Error icons
    if (hasSuccess || hasTrailingIcon) {
      return (
        <Image 
          source={trailingIcon || require('../../assets/images/icons/tick-circle.png')}
          style={[
            styles.icon,
            darkMode && styles.iconDark
          ]}
          resizeMode="contain"
        />
      );
    }
    
    return null;
  };
  
  // Render Separator
  const renderSeparator = () => {
    if (hideSeparator) return null;
    if (!isActive && isEmpty) return null;
    
    return (
      <View style={[
        styles.separator,
        darkMode && styles.separatorDark
      ]} />
    );
  };
  
  // Render Phone Addon
  const renderPhoneAddon = () => {
    if (type !== 'phone') return null;
    
    return (
      <TouchableOpacity 
        style={[
          styles.phoneAddon,
          darkMode && styles.phoneAddonDark
        ]}
        onPress={onCountryPress}
        activeOpacity={0.7}
      >
        {countryFlag && (
          <Image 
            source={countryFlag}
            style={styles.flagIcon}
            resizeMode="contain"
          />
        )}
        <Image 
          source={require('../../assets/images/icons/arrow-down.png')}
          style={[
            styles.arrowIcon,
            darkMode && styles.arrowIconDark
          ]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };
  
  // Render Action Addon
  const renderActionAddon = () => {
    if (type !== 'action') return null;
    
    return (
      <TouchableOpacity 
        style={[
          styles.actionAddon,
          actionDisabled && styles.actionAddonDisabled
        ]}
        onPress={onActionPress}
        disabled={actionDisabled}
        activeOpacity={0.7}
      >
        {actionIcon && (
          <Image 
            source={actionIcon}
            style={styles.actionIcon}
            resizeMode="contain"
          />
        )}
        <Text style={styles.actionText}>{actionText}</Text>
      </TouchableOpacity>
    );
  };
  
  // Render Phone Prefix
  const renderPhonePrefix = () => {
    if (type !== 'phone' || !phonePrefix) return null;
    
    return (
      <Text style={[
        styles.phonePrefix,
        darkMode && styles.phonePrefixDark
      ]}>
        {phonePrefix}
      </Text>
    );
  };
  
  // Default Input
  if (type === 'default' || type === 'password') {
    return (
      <View style={getContainerStyle()}>
        <View style={styles.inputContainer}>
          {renderLeadingIcon()}
          <TextInput
            style={getTextInputStyle()}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={getPlaceholderColor()}
            secureTextEntry={type === 'password' && !isPasswordVisible}
            editable={editable}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={onSubmitEditing}
          />
          {renderSeparator()}
          {renderTrailingIcon()}
        </View>
      </View>
    );
  }
  
  // Phone Input
  if (type === 'phone') {
    return (
      <View style={getContainerStyle()}>
        {renderPhoneAddon()}
        <View style={styles.phoneInputContainer}>
          {renderPhonePrefix()}
          <TextInput
            style={getTextInputStyle()}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={getPlaceholderColor()}
            editable={editable}
            keyboardType="phone-pad"
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={onSubmitEditing}
          />
          {renderSeparator()}
        </View>
      </View>
    );
  }
  
  // Action Input
  if (type === 'action') {
    return (
      <View style={getContainerStyle()}>
        <View style={styles.actionInputContainer}>
          <TextInput
            style={getTextInputStyle()}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={getPlaceholderColor()}
            editable={editable}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={onSubmitEditing}
          />
          {renderSeparator()}
        </View>
        {renderActionAddon()}
      </View>
    );
  }
  
  // Code Input
  if (type === 'code') {
    return (
      <View style={getContainerStyle()}>
        <View style={styles.codeContainer}>
          <TextInput
            style={getTextInputStyle()}
            value={value}
            onChangeText={onChangeText}
            placeholder=""
            placeholderTextColor={getPlaceholderColor()}
            editable={editable}
            keyboardType="number-pad"
            maxLength={1}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={onSubmitEditing}
            textAlign="center"
          />
        </View>
      </View>
    );
  }
  
  return null;
};

export default Input;

