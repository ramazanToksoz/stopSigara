import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './LeadingItems.styles';
import { Colors } from '../../constants/Colors';

import { Svg, Circle } from 'react-native-svg';

const LeadingItems = ({ 
  // Type options
  type = 'Default', // 'Default', 'IconWithBg', 'Icon', 'Payment', 'IconWithSoftBg', 'Social', 'Home', 'IconButton', 'Improvement', 'Locked Achievement', 'Avatar'
  
  // Content props
  title = "Leading Items",
  subtitle,
  percent = "30%",
  time = "1 Day",
  completed = false,
  
  // Icon props
  icon,
  iconSize = 24,
  iconBackgroundColor = Colors.gray[60],
  iconBorderRadius = 8,
  
  // Avatar props
  avatarSource,
  avatarSize = 40,
  
  // Payment props
  paymentIcon,
  paymentSize = 48,
  
  // Social props
  socialPlatform = 'Facebook', // 'Apple', 'Discord', 'Dribbble', 'Facebook', 'Figma', 'Github', 'Google', 'Instagram', 'LinkedIn', 'Medium', 'Pinterest', 'Reddit', 'Signal', 'Snapchat', 'Spotify', 'Telegram', 'TikTok', 'Tumblr', 'Behance', 'Twitch', 'VK', 'YouTube', 'X (Twitter)', 'Threads', 'WhatsApp', 'Messenger'
  
  // Achievement props
  achievementText = "Title",
  isLocked = false,
  
  // Style props
  darkMode = false,
  size = 'Default', // 'Default', 'Sm', 'Xs'
  
  // Interaction props
  onPress,
  disabled = false,
  
  // Layout props
  showDarkBg = false,
}) => {
  
  const renderDefault = () => (
    <View style={[styles.defaultContainer, darkMode && styles.darkDefaultContainer]}>
      {icon ? (
        <Image 
          source={icon} 
          style={[styles.defaultIcon, { width: iconSize, height: iconSize }]}
          resizeMode="contain"
        />
      ) : (
        <View style={[styles.defaultPlaceholder, { width: iconSize, height: iconSize }]} />
      )}
    </View>
  );

  const renderIconWithBg = () => (
    <View style={[styles.iconWithBgContainer, { backgroundColor: iconBackgroundColor }]}>
      {icon && (
        <Image 
          source={icon} 
          style={[styles.iconWithBgIcon, { width: iconSize, height: iconSize }]}
          resizeMode="contain"
        />
      )}
    </View>
  );

  const renderIcon = () => (
    <View style={styles.iconContainer}>
      {icon && (
        <Image 
          source={icon} 
          style={[styles.iconImage, { width: iconSize, height: iconSize }]}
          resizeMode="contain"
        />
      )}
    </View>
  );

  const renderIconWithSoftBg = () => (
    <View style={[styles.iconWithSoftBgContainer, { backgroundColor: darkMode ? '#2A2A2A' : '#F4F4F6' }]}>
      {icon && (
        <Image 
          source={icon} 
          style={[styles.iconWithSoftBgIcon, { width: iconSize, height: iconSize }]}
          resizeMode="contain"
        />
      )}
    </View>
  );

  const renderPayment = () => (
    <View style={[styles.paymentContainer, { width: paymentSize, height: paymentSize }]}>
      <View style={[styles.paymentBase, { borderRadius: paymentSize === 24 ? 4 : 6 }]}>
        {paymentIcon && (
          <Image 
            source={paymentIcon} 
            style={[styles.paymentIcon, { width: paymentSize * 0.6, height: paymentSize * 0.6 }]}
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  );

  const renderSocial = () => (
    <View style={[styles.socialContainer, { width: iconSize, height: iconSize }]}>
      {/* Social media logos would be implemented here based on platform */}
      <View style={[styles.socialPlaceholder, { width: iconSize, height: iconSize }]} />
    </View>
  );

  const renderHome = () => (
    <View style={styles.homeContainer}>
      <View style={[styles.homeAvatarContainer, { width: avatarSize, height: avatarSize }]}>
        {avatarSource ? (
          <Image 
            source={avatarSource} 
            style={styles.homeAvatar}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.homeAvatarPlaceholder} />
        )}
      </View>
      <View style={styles.homeTextContainer}>
        <Text style={[styles.homeGreeting, darkMode && styles.darkHomeGreeting]}>
          Good morning,
        </Text>
        <Text style={[styles.homeName, darkMode && styles.darkHomeName]}>
          {title}
        </Text>
      </View>
    </View>
  );

  const renderIconButton = () => (
    <TouchableOpacity 
      style={[styles.iconButtonContainer, { width: iconSize, height: iconSize }]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && (
        <Image 
          source={icon} 
          style={[styles.iconButtonIcon, { width: iconSize * 0.5, height: iconSize * 0.5 }]}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );

  const renderImprovement = () => {
    // Yüzde değerini sayıya çevir (örn: "85%" -> 85)
    console.log('LeadingItems Improvement - percent:', percent, 'iconSize:', iconSize);
    const percentValue = parseInt(percent.replace('%', ''));
    const radius = (iconSize - 8) / 2; // 4px border on each side
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * percentValue / 100);

    return (
      <View style={[styles.improvementContainer, { width: iconSize, height: iconSize }]}>
        <View style={[styles.improvementCircleContainer, { width: iconSize, height: iconSize }]}>
          {/* Background circle */}
          <View style={[styles.improvementBackgroundCircle, { width: iconSize, height: iconSize }]} />
          
          {/* Progress circle with SVG */}
          <Svg 
            width={iconSize} 
            height={iconSize} 
            style={styles.improvementSvgContainer}
          >
            {/* Background circle */}
            <Circle
              cx={iconSize / 2}
              cy={iconSize / 2}
              r={radius}
              stroke={Colors.gray[60]}
              strokeWidth="4"
              fill="none"
            />
            {/* Progress circle */}
            <Circle
              cx={iconSize / 2}
              cy={iconSize / 2}
              r={radius}
              stroke={Colors.brand[60]}
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${iconSize / 2} ${iconSize / 2})`}
            />
          </Svg>
          
          {/* Center icon */}
          {icon && (
            <View style={styles.improvementCenterIcon}>
              <Image 
                source={icon} 
                style={[styles.improvementIcon, { 
                  width: iconSize * 0.4, 
                  height: iconSize * 0.4 
                }]}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
        
        <Text style={[styles.improvementPercent, darkMode && styles.darkImprovementPercent]}>
          {percent}
        </Text>
      </View>
    );
  };

  const renderLockedAchievement = () => (
    <View style={styles.lockedAchievementContainer}>
      <View style={styles.lockedAchievementBadge}>
        <View style={styles.lockedAchievementPolygon}>
          <View style={styles.lockedAchievementInnerPolygon}>
            <Image 
              source={require('../../assets/images/icons/lock.png')} 
              style={styles.lockedAchievementIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <Text style={[styles.lockedAchievementText, darkMode && styles.darkLockedAchievementText]}>
        {achievementText}
      </Text>
    </View>
  );

  const renderAvatar = () => (
    <View style={[styles.avatarContainer, { width: avatarSize, height: avatarSize }]}>
      {avatarSource ? (
        <Image 
          source={avatarSource} 
          style={styles.avatarImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.avatarPlaceholder} />
      )}
    </View>
  );

  const renderContent = () => {
    switch (type) {
      case 'IconWithBg':
        return renderIconWithBg();
      case 'Icon':
        return renderIcon();
      case 'Payment':
        return renderPayment();
      case 'IconWithSoftBg':
        return renderIconWithSoftBg();
      case 'Social':
        return renderSocial();
      case 'Home':
        return renderHome();
      case 'IconButton':
        return renderIconButton();
      case 'Improvement':
        return renderImprovement();
      case 'Locked Achievement':
        return renderLockedAchievement();
      case 'Avatar':
        return renderAvatar();
      default:
        return renderDefault();
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      {showDarkBg && <View style={styles.darkBackground} />}
      
      {type === 'Default' && !title.includes('Leading') ? (
        <View style={styles.content}>
          <View style={styles.heading}>
            <Text style={[styles.title, darkMode && styles.darkTitle]}>
              {title}
            </Text>
          </View>
        </View>
      ) : (
        renderContent()
      )}
    </View>
  );
};

export default LeadingItems;
