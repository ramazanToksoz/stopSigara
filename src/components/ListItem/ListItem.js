import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './ListItem.styles';
import LeadingItems from '../LeadingItems';
const ListItem = ({
  // Type
  type = 'default', // 'default', 'checkbox'
  
  // Leading Item (Sol taraf)
  hasLeadingItem = true,
  leadingType = 'image', // 'image', 'icon', 'none', 'improvement', 'avatar', 'iconButton'
  leadingImage,
  leadingIcon,
  leadingBackgroundColor = '#E8F5E9',
  leadingSize = 40, // Özelleştirilebilir boyut
  leadingBorderRadius = 8, // Özelleştirilebilir border radius
  leadingIconSize = 24, // İkon boyutu
  
  // LeadingItems props for new types
  leadingPercent, // Improvement tipi için
  leadingTime, // Improvement tipi için
  leadingCompleted, // Improvement tipi için
  leadingAvatarSource, // Avatar tipi için
  leadingOnPress, // IconButton tipi için
  
  // Text Content
  titleText = 'Title Text',
  hasSupportingText = false,
  supportingText = 'Supporting Text',
  titleStyle, // Özel title stili
  supportingStyle, // Özel supporting text stili
  
  // Trailing Item (Sağ taraf)
  hasTrailingItem = true,
  trailingType = 'more', // 'more', 'icon', 'checkbox', 'radio', 'switch', 'button', 'none'
  trailingIcon,
  trailingIconSize = 24, // Trailing icon boyutu
  trailingIconColor, // Trailing icon rengi
  
  // Checkbox (for type='checkbox' or trailingType='checkbox')
  checkboxState = 'unchecked', // 'checked', 'unchecked'
  onCheckboxChange,
  
  // Radio (for trailingType='radio')
  radioState = 'inactive', // 'active', 'inactive'
  onRadioChange,
  
  // Switch (for trailingType='switch')
  switchState = 'inactive', // 'active', 'inactive'
  onSwitchChange,
  
  // Button (for trailingType='button')
  trailingButtonText = 'Button',
  trailingButtonType = 'neutral', // 'primary', 'neutral'
  trailingButtonSize = 'sm', // 'xs', 'sm', 'md'
  onTrailingButtonPress,
  
  // Interaction
  onPress,
  onTrailingPress,
  
  // Style
  darkMode = false,
  variant = 'default', // 'default', 'compact'
  containerStyle, // Özel container stili
  backgroundColor, // Özel arkaplan rengi
  
  // Grouped
  grouped = false,
  isLastItem = false, // Son item kontrolü için
}) => {
  
  // Leading Item Render
  const renderLeadingItem = () => {
    if (!hasLeadingItem) return null;
    
    // LeadingItems ile uyumlu yeni tipler - sadece leading kısmında
    if (leadingType === 'improvement') {
      return (
        <View style={[styles.leadingContainer, { width: leadingSize, height: leadingSize }]}>
          <LeadingItems
            type="Improvement"
            percent={leadingPercent || "30%"}
            time={leadingTime || "1 Day"}
            completed={leadingCompleted || false}
            icon={leadingIcon}
            iconSize={leadingSize}
            darkMode={darkMode}
          />
        </View>
      );
    }
    
    if (leadingType === 'avatar') {
      return (
        <View style={[styles.leadingContainer, { width: leadingSize, height: leadingSize }]}>
          <LeadingItems
            type="Avatar"
            avatarSource={leadingAvatarSource || leadingImage}
            avatarSize={leadingSize}
            darkMode={darkMode}
          />
        </View>
      );
    }
    
    if (leadingType === 'iconButton') {
      return (
        <View style={[styles.leadingContainer, { width: leadingSize, height: leadingSize }]}>
          <LeadingItems
            type="IconButton"
            icon={leadingIcon}
            iconSize={leadingSize}
            onPress={leadingOnPress}
            darkMode={darkMode}
          />
        </View>
      );
    }
    
    // Geleneksel tipler (geriye uyumluluk için)
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
          isActive && styles.radioActive,
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
  
  // Switch Render
  const renderSwitch = () => {
    const isActive = switchState === 'active';
    
    return (
      <TouchableOpacity 
        style={styles.switchContainer}
        onPress={() => onSwitchChange && onSwitchChange(!isActive)}
        activeOpacity={0.7}
      >
        <View style={[
          styles.switch,
          isActive && styles.switchActive,
          darkMode && !isActive && styles.switchDark
        ]}>
          <View style={[
            styles.switchThumb,
            isActive && styles.switchThumbActive,
            darkMode && styles.switchThumbDark
          ]} />
        </View>
      </TouchableOpacity>
    );
  };
  
  // Trailing Button Render
  const renderTrailingButton = () => {
    const getButtonStyles = () => {
      let styles_array = [styles.trailingButton];
      
      if (trailingButtonType === 'primary') {
        styles_array.push(styles.trailingButtonPrimary);
      } else {
        styles_array.push(styles.trailingButtonNeutral);
      }
      
      if (trailingButtonSize === 'xs') {
        styles_array.push(styles.trailingButtonXs);
      } else if (trailingButtonSize === 'sm') {
        styles_array.push(styles.trailingButtonSm);
      } else {
        styles_array.push(styles.trailingButtonMd);
      }
      
      if (darkMode) {
        styles_array.push(styles.trailingButtonDark);
      }
      
      return styles_array;
    };

    const getButtonTextStyles = () => {
      let styles_array = [styles.trailingButtonText];
      
      if (trailingButtonSize === 'xs') {
        styles_array.push(styles.trailingButtonTextXs);
      } else if (trailingButtonSize === 'sm') {
        styles_array.push(styles.trailingButtonTextSm);
      } else {
        styles_array.push(styles.trailingButtonTextMd);
      }
      
      if (trailingButtonType === 'primary') {
        styles_array.push(styles.trailingButtonTextPrimary);
      } else {
        styles_array.push(styles.trailingButtonTextNeutral);
      }
      
      if (darkMode) {
        styles_array.push(styles.trailingButtonTextDark);
      }
      
      return styles_array;
    };

    return (
      <TouchableOpacity 
        style={getButtonStyles()}
        onPress={onTrailingButtonPress}
        activeOpacity={0.7}
      >
        <Text style={getButtonTextStyles()}>{trailingButtonText}</Text>
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
    
    if (trailingType === 'switch') {
      return renderSwitch();
    }
    
    if (trailingType === 'button') {
      return renderTrailingButton();
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
              numberOfLines={0}
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
              numberOfLines={0}
            >
              {supportingText}
            </Text>
          )}
        </View>
      </View>
      
      {/* Trailing Item */}
      {renderTrailingItem()}
      
      {/* Divider for grouped items (except last item) */}
      {grouped && !isLastItem && (
        <View style={styles.divider} />
      )}
    </TouchableOpacity>
  );
};

export default ListItem;

