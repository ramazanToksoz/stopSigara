import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './ListItem.styles';

const ListItem = ({
  // Type
  type = 'default', // 'default', 'checkbox'
  
  // Leading Item (Sol taraf)
  hasLeadingItem = true,
  leadingType = 'image', // 'image', 'icon', 'none'
  leadingImage,
  leadingIcon,
  leadingBackgroundColor = '#E8F5E9',
  leadingSize = 40, // Özelleştirilebilir boyut
  leadingBorderRadius = 8, // Özelleştirilebilir border radius
  leadingIconSize = 24, // İkon boyutu
  
  // Text Content
  titleText = 'Title Text',
  hasSupportingText = false,
  supportingText = 'Supporting Text',
  titleStyle, // Özel title stili
  supportingStyle, // Özel supporting text stili
  
  // Trailing Item (Sağ taraf)
  hasTrailingItem = true,
  trailingType = 'more', // 'more', 'icon', 'checkbox', 'radio', 'none'
  trailingIcon,
  trailingIconSize = 24, // Trailing icon boyutu
  trailingIconColor, // Trailing icon rengi
  
  // Checkbox (for type='checkbox' or trailingType='checkbox')
  checkboxState = 'unchecked', // 'checked', 'unchecked'
  onCheckboxChange,
  
  // Radio (for trailingType='radio')
  radioState = 'inactive', // 'active', 'inactive'
  onRadioChange,
  
  // Interaction
  onPress,
  onTrailingPress,
  
  // Style
  darkMode = false,
  variant = 'default', // 'default', 'compact'
  containerStyle, // Özel container stili
  backgroundColor, // Özel arkaplan rengi
}) => {
  
  // Leading Item Render
  const renderLeadingItem = () => {
    if (!hasLeadingItem) return null;
    
    const leadingContainerStyle = {
      width: leadingSize,
      height: leadingSize,
      borderRadius: leadingBorderRadius,
    };
    
    if (leadingType === 'image' && leadingImage) {
      return (
        <View style={[styles.leadingItem, leadingContainerStyle]}>
          <Image 
            source={leadingImage}
            style={styles.leadingImage}
            resizeMode="cover"
          />
        </View>
      );
    }
    
    if (leadingType === 'icon' && leadingIcon) {
      return (
        <View style={[
          styles.leadingItem, 
          leadingContainerStyle,
          { backgroundColor: leadingBackgroundColor }
        ]}>
          <Image 
            source={leadingIcon}
            style={{ width: leadingIconSize, height: leadingIconSize }}
            resizeMode="contain"
          />
        </View>
      );
    }
    
    return null;
  };
  
  // Checkbox Render
  const renderCheckbox = () => {
    const isChecked = checkboxState === 'checked';
    
    return (
      <TouchableOpacity 
        style={styles.checkboxContainer}
        onPress={() => onCheckboxChange && onCheckboxChange(!isChecked)}
        activeOpacity={0.7}
      >
        <View style={[
          styles.checkbox,
          isChecked && styles.checkboxChecked,
          darkMode && !isChecked && styles.checkboxDark
        ]}>
          {isChecked && (
            <View style={styles.checkmark} />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  
  // Radio Button Render
  const renderRadio = () => {
    const isActive = radioState === 'active';
    
    return (
      <TouchableOpacity 
        style={styles.radioContainer}
        onPress={() => onRadioChange && onRadioChange(!isActive)}
        activeOpacity={0.7}
      >
        <View style={[
          styles.radio,
          darkMode && styles.radioDark,
        ]}>
          {isActive && (
            <View style={[
              styles.radioInner,
              darkMode && styles.radioInnerDark,
            ]} />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  
  // Trailing Item Render
  const renderTrailingItem = () => {
    if (!hasTrailingItem) return null;
    
    if (trailingType === 'checkbox') {
      return renderCheckbox();
    }
    
    if (trailingType === 'radio') {
      return renderRadio();
    }
    
    if (trailingType === 'more') {
      return (
        <TouchableOpacity 
          style={styles.trailingItem}
          onPress={onTrailingPress}
          activeOpacity={0.7}
        >
          <View style={styles.moreIcon}>
            <View style={[styles.moreDot, darkMode && styles.moreDotDark]} />
            <View style={[styles.moreDot, darkMode && styles.moreDotDark]} />
            <View style={[styles.moreDot, darkMode && styles.moreDotDark]} />
          </View>
        </TouchableOpacity>
      );
    }
    
    if (trailingType === 'icon' && trailingIcon) {
      return (
        <TouchableOpacity 
          style={styles.trailingItem}
          onPress={onTrailingPress}
          activeOpacity={0.7}
        >
          <Image 
            source={trailingIcon}
            style={[
              styles.trailingIconImage,
              { 
                width: trailingIconSize, 
                height: trailingIconSize,
                tintColor: trailingIconColor || (darkMode ? '#FFFFFF' : '#54565F')
              }
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    }
    
    return null;
  };
  
  const finalContainerStyle = [
    styles.container,
    darkMode && styles.containerDark,
    variant === 'compact' && styles.containerCompact,
    type === 'checkbox' && styles.containerCheckbox,
    backgroundColor && { backgroundColor },
    containerStyle,
  ];
  
  const finalTitleStyle = [
    styles.titleText,
    darkMode && styles.titleTextDark,
    titleStyle,
  ];
  
  const finalSupportingStyle = [
    styles.supportingText,
    darkMode && styles.supportingTextDark,
    supportingStyle,
  ];
  
  // Checkbox type için özel render
  if (type === 'checkbox') {
    return (
      <TouchableOpacity 
        style={finalContainerStyle}
        onPress={() => onCheckboxChange && onCheckboxChange(checkboxState !== 'checked')}
        activeOpacity={0.7}
      >
        {/* Leading Checkbox */}
        {renderCheckbox()}
        
        {/* Text Content */}
        <View style={[styles.textContainer, !hasLeadingItem && styles.textContainerFull]}>
          <Text 
            style={finalTitleStyle}
            numberOfLines={1}
          >
            {titleText}
          </Text>
          {hasSupportingText && (
            <Text 
              style={finalSupportingStyle}
              numberOfLines={1}
            >
              {supportingText}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
  
  // Default type render
  return (
    <TouchableOpacity 
      style={finalContainerStyle}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      {/* Main Content */}
      <View style={styles.main}>
        {/* Leading Item */}
        {renderLeadingItem()}
        
        {/* Text Content */}
        <View style={[styles.textContainer, !hasLeadingItem && styles.textContainerFull]}>
          <Text 
            style={finalTitleStyle}
            numberOfLines={1}
          >
            {titleText}
          </Text>
          {hasSupportingText && (
            <Text 
              style={finalSupportingStyle}
              numberOfLines={1}
            >
              {supportingText}
            </Text>
          )}
        </View>
      </View>
      
      {/* Trailing Item */}
      {renderTrailingItem()}
    </TouchableOpacity>
  );
};

export default ListItem;

