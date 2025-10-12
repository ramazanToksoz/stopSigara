import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from './BottomTab.styles';
import IconButton from '../IconButton';

const BottomTab = ({ activeTab = 'home', onTabPress }) => {
  const tabs = [
    { id: 'home', icon: require('../../assets/images/icons/home.png'), isActive: activeTab === 'home' },
    { id: 'chart', icon: require('../../assets/images/icons/chart-square.png'), isActive: activeTab === 'chart' },
    { id: 'people', icon: require('../../assets/images/icons/people.png'), isActive: activeTab === 'people' },
    { id: 'settings', icon: require('../../assets/images/icons/setting-2.png'), isActive: activeTab === 'settings' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.slice(0, 2).map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => onTabPress && onTabPress(tab.id)}
          >
            <View style={styles.iconContainer}>
              <Image
                source={tab.icon}
                style={[
                  styles.tabIcon,
                  tab.isActive && styles.activeIcon
                ]}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        ))}
        
        {/* Center IconButton */}
        <View style={styles.centerButtonContainer}>
          <IconButton
            type="Primary"
            style="Default"
            size="Default"
            icon={require('../../assets/images/icons/flash.png')}
            onPress={() => onTabPress && onTabPress('flash')}
          />
        </View>
        
        {tabs.slice(2).map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => onTabPress && onTabPress(tab.id)}
          >
            <View style={styles.iconContainer}>
              <Image
                source={tab.icon}
                style={[
                  styles.tabIcon,
                  tab.isActive && styles.activeIcon
                ]}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomTab;
