import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TabsGroup.styles';

const TabsGroup = ({
  tabs = ['Tab 1', 'Tab 2'],
  activeTab = 0,
  onTabChange,
  darkMode = false,
}) => {
  const handleTabPress = (index) => {
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabItem,
              isActive && styles.tabItemActive,
              darkMode && styles.tabItemDark,
            ]}
            onPress={() => handleTabPress(index)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                isActive && styles.tabTextActive,
                darkMode && styles.tabTextDark,
                isActive && darkMode && styles.tabTextActiveDark,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabsGroup;
