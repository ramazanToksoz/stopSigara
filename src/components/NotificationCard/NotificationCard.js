import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './NotificationCard.styles';
import { Colors } from '../../constants/Colors';

const NotificationCard = ({
  // Notification Type
  type = 'info', // 'info', 'success', 'warning', 'error', 'achievement', 'large'
  
  // Content
  title = 'Notification Title',
  message = 'This is a notification message',
  time = '2m ago',
  detailedMessage,
  
  // Icon
  icon,
  
  // Avatar
  avatarSource,
  notificationType = 'follow', // follow, reply, mention, like
  
  // Actions
  onPress,
  onDismiss,
  
  // Style
  darkMode = false,
  isRead = false,
  
  // Customization
  showTime = true,
  largeIcon = false, // For special large icon notifications
}) => {
  
  const getNotificationIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'success':
        return { uri: 'https://via.placeholder.com/20x20/58B658/FFFFFF?text=✓' };
      case 'warning':
        return { uri: 'https://via.placeholder.com/20x20/FFB800/FFFFFF?text=⚠' };
      case 'error':
        return { uri: 'https://via.placeholder.com/20x20/FF6565/FFFFFF?text=✗' };
      case 'achievement':
        return { uri: 'https://via.placeholder.com/20x20/8B5CF6/FFFFFF?text=🏆' };
      case 'large':
        return { uri: 'https://via.placeholder.com/20x20/FF6B6B/FFFFFF?text=♥' };
      case 'reply':
        return { uri: 'https://via.placeholder.com/20x20/3B82F6/FFFFFF?text=↩' };
      default: // info
        return { uri: 'https://via.placeholder.com/20x20/58B658/FFFFFF?text=i' };
    }
  };

  const getNotificationTypeIcon = () => {
    switch (notificationType) {
      case 'follow':
        return require('../../assets/images/icons/user.png');
      case 'reply':
        return require('../../assets/images/icons/undo.png');
      case 'mention':
        return require('../../assets/images/icons/heart.png');
      case 'like':
        return require('../../assets/images/icons/heart.png');
      default:
        return require('../../assets/images/icons/user.png');
    }
  };

  const getNotificationTypeColor = () => {
    switch (notificationType) {
      case 'follow':
        return '#6461FC'; // Purple
      case 'reply':
        return '#53D5FF'; // Blue
      case 'mention':
        return '#FFD143'; // Yellow
      case 'like':
        return '#FF6565'; // Red
      default:
        return Colors.brand[60];
    }
  };

  const getNotificationColor = () => {
    switch (type) {
      case 'success':
        return Colors.brand[60]; // Green
      case 'warning':
        return '#FFB800'; // Orange
      case 'error':
        return Colors.semantic.destructive; // Red
      case 'achievement':
        return '#8B5CF6'; // Purple
      case 'large':
        return '#FF6B6B'; // Pink/Red for heart
      case 'reply':
        return '#3B82F6'; // Blue for reply
      default: // info
        return Colors.brand[60]; // Blue
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.notificationCard,
        darkMode && styles.darkNotificationCard,
        !isRead && styles.unreadCard
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.notificationContent}>
        {/* Avatar + Icon */}
        {avatarSource ? (
          <View style={styles.avatarIconContainer}>
            <Image 
              source={avatarSource}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={[
              styles.notificationTypeIcon,
              { backgroundColor: getNotificationTypeColor() }
            ]}>
              <Image 
                source={getNotificationTypeIcon()}
                style={styles.notificationTypeIconImage}
                resizeMode="contain"
              />
            </View>
          </View>
        ) : (
          <View style={[
            largeIcon ? styles.largeIconContainer : styles.iconContainer, 
            { backgroundColor: getNotificationColor() + '15' }
          ]}>
            <Image 
              source={getNotificationIcon()}
              style={[
                largeIcon ? styles.largeNotificationIcon : styles.notificationIcon, 
                { tintColor: getNotificationColor() }
              ]}
              resizeMode="contain"
            />
          </View>
        )}
        
        {/* Content */}
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={[
              styles.notificationTitle,
              darkMode && styles.darkNotificationTitle,
              !isRead && styles.unreadTitle
            ]}>
              {title}
            </Text>
            {showTime && (
              <Text style={[
                styles.notificationTime,
                darkMode && styles.darkNotificationTime
              ]}>
                {time}
              </Text>
            )}
          </View>
          <Text style={[
            styles.notificationMessage,
            darkMode && styles.darkNotificationMessage
          ]}>
            {message}
          </Text>
          
          {/* Detailed Message (for reply notifications) */}
          {detailedMessage && (
            <View style={styles.detailedMessageContainer}>
              <Text style={[
                styles.detailedMessage,
                darkMode && styles.darkDetailedMessage
              ]}>
                {detailedMessage}
              </Text>
            </View>
          )}
        </View>
        
        {/* Unread Indicator */}
        {!isRead && (
          <View style={[styles.unreadIndicator, { backgroundColor: getNotificationColor() }]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
