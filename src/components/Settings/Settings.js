import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { styles } from './Settings.styles';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    sounds: true,
    vibrations: false,
    autoSync: true,
    locationServices: false,
    analytics: true,
    crashReports: false,
    autoBackup: true,
    cloudSync: false,
    twoFactorAuth: true,
    biometricAuth: false,
    privacyMode: true,
    dataSharing: false,
    marketingEmails: false,
    pushNotifications: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const settingItems = [
    {
      id: 'notifications',
      title: 'Push Notifications',
      subtitle: 'Receive push notifications',
      icon: require('../../assets/images/icons/message.png'),
      hasToggle: true,
      value: settings.notifications
    },
    {
      id: 'darkMode',
      title: 'Dark Mode',
      subtitle: 'Switch to dark theme',
      icon: require('../../assets/images/icons/category-2.png'),
      hasToggle: true,
      value: settings.darkMode
    },
    {
      id: 'sounds',
      title: 'Sounds',
      subtitle: 'Play notification sounds',
      icon: require('../../assets/images/icons/game.png'),
      hasToggle: true,
      value: settings.sounds
    },
    {
      id: 'vibrations',
      title: 'Vibrations',
      subtitle: 'Vibrate on notifications',
      icon: require('../../assets/images/icons/emoji-normal.png'),
      hasToggle: true,
      value: settings.vibrations
    },
    {
      id: 'autoSync',
      title: 'Auto Sync',
      subtitle: 'Automatically sync data',
      icon: require('../../assets/images/icons/setting-2.png'),
      hasToggle: true,
      value: settings.autoSync
    },
    {
      id: 'locationServices',
      title: 'Location Services',
      subtitle: 'Allow location access',
      icon: require('../../assets/images/icons/trend-down.png'),
      hasToggle: true,
      value: settings.locationServices
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Help improve the app',
      icon: require('../../assets/images/icons/Icon.png'),
      hasToggle: true,
      value: settings.analytics
    },
    {
      id: 'crashReports',
      title: 'Crash Reports',
      subtitle: 'Send crash reports',
      icon: require('../../assets/images/icons/OUTLINE.png'),
      hasToggle: true,
      value: settings.crashReports
    },
    {
      id: 'autoBackup',
      title: 'Auto Backup',
      subtitle: 'Automatically backup data',
      icon: require('../../assets/images/icons/home.png'),
      hasToggle: true,
      value: settings.autoBackup
    },
    {
      id: 'cloudSync',
      title: 'Cloud Sync',
      subtitle: 'Sync with cloud storage',
      icon: require('../../assets/images/icons/Leading.png'),
      hasToggle: true,
      value: settings.cloudSync
    },
    {
      id: 'twoFactorAuth',
      title: 'Two-Factor Authentication',
      subtitle: 'Extra security layer',
      icon: require('../../assets/images/icons/lock.png'),
      hasToggle: true,
      value: settings.twoFactorAuth
    },
    {
      id: 'biometricAuth',
      title: 'Biometric Authentication',
      subtitle: 'Use fingerprint or face ID',
      icon: require('../../assets/images/icons/Avatar.png'),
      hasToggle: true,
      value: settings.biometricAuth
    },
    {
      id: 'privacyMode',
      title: 'Privacy Mode',
      subtitle: 'Enhanced privacy settings',
      icon: require('../../assets/images/icons/danger.png'),
      hasToggle: true,
      value: settings.privacyMode
    },
    {
      id: 'dataSharing',
      title: 'Data Sharing',
      subtitle: 'Share anonymous data',
      icon: require('../../assets/images/icons/tick-square.png'),
      hasToggle: true,
      value: settings.dataSharing
    },
    {
      id: 'marketingEmails',
      title: 'Marketing Emails',
      subtitle: 'Receive promotional emails',
      icon: require('../../assets/images/icons/message.png'),
      hasToggle: true,
      value: settings.marketingEmails
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.headerDivider} />
        <Text style={styles.subtitle}>Outline</Text>
      </View>
      
      <View style={styles.settingsList}>
        {settingItems.map((item, index) => (
          <View key={item.id} style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                  {/* Icon placeholder - using a simple View for now */}
                  <View style={styles.iconPlaceholder} />
                </TouchableOpacity>
              </View>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>{item.title}</Text>
                <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            
            {item.hasToggle && (
              <View style={styles.toggleContainer}>
                <Switch
                  value={item.value}
                  onValueChange={() => toggleSetting(item.id)}
                  trackColor={{
                    false: '#E9EAEC',
                    true: '#58B658'
                  }}
                  thumbColor={item.value ? '#FFFFFF' : '#FFFFFF'}
                  ios_backgroundColor="#E9EAEC"
                />
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Settings;
