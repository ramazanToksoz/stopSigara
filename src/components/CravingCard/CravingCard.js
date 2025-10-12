import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { styles } from './CravingCard.styles';

const CravingCard = ({
  title,
  description,
  icon,
  buttonText,
  amount,
  onPress,
  darkMode = false,
  disabled = false,
  variant = 'default', // 'default', 'compact', 'featured'
  loading = false,
  badge = null,
  progress = null,
  lastUsed = null,
  category = 'default', // 'awareness', 'calm', 'distraction', 'motivation'
  showTime = false
}) => {
  // Kategori bazlı renk belirleme
  const getCategoryColor = () => {
    switch (category) {
      case 'awareness': return '#4A90E2';
      case 'calm': return '#7B68EE';
      case 'distraction': return '#FF6B6B';
      case 'motivation': return '#58B658';
      default: return '#58B658';
    }
  };

  // Zaman formatı
  const formatLastUsed = (timestamp) => {
    if (!timestamp) return null;
    const now = new Date();
    const lastUsedDate = new Date(timestamp);
    const diffInMinutes = Math.floor((now - lastUsedDate) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}dk önce`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}sa önce`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}gün önce`;
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.cravingCard, 
        darkMode && styles.cravingCardDark,
        disabled && styles.cravingCardDisabled,
        variant === 'compact' && styles.cravingCardCompact,
        variant === 'featured' && styles.cravingCardFeatured
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {/* Badge */}
      {badge && (
        <View style={[
          styles.badge,
          { backgroundColor: getCategoryColor() }
        ]}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}

      <View style={styles.cardContent}>
        <View style={[
          styles.iconContainer,
          darkMode && styles.iconContainerDark,
          disabled && styles.iconContainerDisabled,
          { backgroundColor: `${getCategoryColor()}15` }
        ]}>
          <Image 
            source={icon}
            style={[
              styles.icon,
              disabled && styles.iconDisabled
            ]}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={[
              styles.title, 
              darkMode && styles.titleDark,
              disabled && styles.titleDisabled
            ]}>
              {title}
            </Text>
            {showTime && lastUsed && (
              <Text style={[
                styles.lastUsed,
                darkMode && styles.lastUsedDark
              ]}>
                {formatLastUsed(lastUsed)}
              </Text>
            )}
          </View>
          
          <Text style={[
            styles.description, 
            darkMode && styles.descriptionDark,
            disabled && styles.descriptionDisabled
          ]}>
            {description}
          </Text>

          {/* Progress Bar */}
          {progress !== null && (
            <View style={styles.progressContainer}>
              <View style={[
                styles.progressBar,
                darkMode && styles.progressBarDark
              ]}>
                <View 
                  style={[
                    styles.progressFill,
                    { 
                      width: `${progress}%`,
                      backgroundColor: getCategoryColor()
                    }
                  ]} 
                />
              </View>
              <Text style={[
                styles.progressText,
                darkMode && styles.progressTextDark
              ]}>
                {progress}%
              </Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.bottomSection}>
        {amount && (
          <View style={styles.amountContainer}>
            <Text style={[
              styles.amount, 
              darkMode && styles.amountDark,
              disabled && styles.amountDisabled
            ]}>
              {amount}
            </Text>
          </View>
        )}
        
        <View style={[
          styles.buttonContainer,
          { backgroundColor: getCategoryColor() },
          disabled && styles.buttonContainerDisabled,
          loading && styles.buttonContainerLoading
        ]}>
          {loading ? (
            <ActivityIndicator 
              size="small" 
              color="#FFFFFF" 
            />
          ) : (
            <>
              <Text style={[
                styles.buttonText,
                darkMode && styles.buttonTextDark,
                disabled && styles.buttonTextDisabled
              ]}>
                {buttonText}
              </Text>
              <Image 
                source={require('../../assets/images/icons/arrow-right.png')}
                style={[
                  styles.arrowIcon,
                  darkMode && styles.arrowIconDark,
                  disabled && styles.arrowIconDisabled
                ]}
                resizeMode="contain"
              />
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CravingCard;
