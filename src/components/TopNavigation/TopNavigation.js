import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './TopNavigation.styles';

const TopNavigation = ({ 
  // Leading Item (Sol)
  showLeadingItem = true,
  leadingType = 'icon', // 'icon' or 'none'
  leadingIcon = 'arrow-circle-left', // icon type
  onLeadingPress,
  
  // Center Item (Orta)
  showCenterItem = false,
  centerType = 'progress', // 'progress', 'title', or 'none'
  title = '',
  currentPage = 1,
  totalPages = 3,
  
  // Trailing Item (Sağ)
  showTrailingItem = true,
  trailingType = 'button', // 'button', 'icon', or 'none'
  trailingText = 'Skip',
  onTrailingPress,
  
  // Button Properties (Trailing Button için)
  buttonType = 'neutral', // 'primary', 'neutral'
  buttonStyle = 'text', // 'default', 'text'
  buttonSize = 'xs', // 'xs', 'sm', 'md'
  hasIconLeft = false,
  iconLeft = 'add-circle',
  hasIconRight = false,
  iconRight = 'arrow-right',
  
  // Mode
  darkMode = false,
}) => {
  
  // Leading Item Render
  const renderLeadingItem = () => {
    if (!showLeadingItem) return <View style={styles.leading} />;
    
    if (leadingType === 'icon') {
      return (
        <TouchableOpacity 
          style={styles.leading}
          onPress={onLeadingPress}
          activeOpacity={0.7}
        >
          <Image 
            source={require('../../assets/images/icons/Leading.png')}
            style={[
              styles.leadingIcon,
              { tintColor: darkMode ? '#FFFFFF' : '#54565F' }
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    }
    
    return <View style={styles.leading} />;
  };
  
  // Center Item Render
  const renderCenterItem = () => {
    if (!showCenterItem) return <View style={styles.center} />;
    
    if (centerType === 'progress') {
      // Progress yüzdesi hesapla
      const progressPercentage = (currentPage / totalPages) * 100;
      
      return (
        <View style={styles.center}>
          <View style={styles.progressWrapper}>
            {/* Track (Gri arka plan) */}
            <View style={[styles.progressTrack, darkMode && styles.progressTrackDark]} />
            
            {/* Progress (Yeşil bar) */}
            <View 
              style={[
                styles.progressBar,
                { width: `${progressPercentage}%` },
                darkMode && styles.progressBarDark
              ]} 
            />
          </View>
        </View>
      );
    }
    
    if (centerType === 'title') {
      return (
        <View style={styles.center}>
          <Text style={[styles.title, darkMode && styles.titleDark]}>
            {title}
          </Text>
        </View>
      );
    }
    
    return <View style={styles.center} />;
  };
  
  // Trailing Item Render
  const renderTrailingItem = () => {
    if (!showTrailingItem) return <View style={styles.trailing} />;
    
    if (trailingType === 'button') {
      const getButtonStyles = () => {
        let styles_array = [styles.button, styles[`button_${buttonSize}`]];
        
        if (buttonStyle === 'default') {
          styles_array.push(styles[`button_default_${buttonType}`]);
        }
        
        if (darkMode) {
          styles_array.push(styles.button_dark);
        }
        
        return styles_array;
      };

      const getButtonTextStyles = () => {
        let styles_array = [styles.buttonText, styles[`buttonText_${buttonSize}`]];
        
        if (buttonStyle === 'default') {
          styles_array.push(styles.buttonText_default);
        } else {
          styles_array.push(styles[`buttonText_${buttonType}`]);
        }
        
        if (darkMode && buttonStyle !== 'default') {
          styles_array.push(styles.buttonText_dark);
        }
        
        return styles_array;
      };
      
      const getIconSize = () => {
        if (buttonSize === 'xs') return 16;
        if (buttonSize === 'sm') return 18;
        return 20;
      };
      
      return (
        <View style={styles.trailing}>
          <TouchableOpacity 
            style={getButtonStyles()}
            onPress={onTrailingPress}
            activeOpacity={0.7}
          >
            {hasIconLeft && (
              <Image 
                source={require('../../assets/images/icons/Arrow.png')}
                style={{
                  width: getIconSize(),
                  height: getIconSize(),
                  tintColor: buttonStyle === 'default' ? '#FFFFFF' : (buttonType === 'primary' ? '#58B658' : '#54565F'),
                  marginRight: 4
                }}
                resizeMode="contain"
              />
            )}
            
            <Text style={getButtonTextStyles()}>{trailingText}</Text>
            
            {hasIconRight && (
              <Image 
                source={require('../../assets/images/icons/arrow-right.png')}
                style={{
                  width: getIconSize(),
                  height: getIconSize(),
                  tintColor: buttonStyle === 'default' ? '#FFFFFF' : (buttonType === 'primary' ? '#58B658' : '#54565F'),
                  marginLeft: 4
                }}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </View>
      );
    }
    
    return <View style={styles.trailing} />;
  };

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      {renderLeadingItem()}
      {renderCenterItem()}
      {renderTrailingItem()}
    </View>
  );
};

export default TopNavigation;
