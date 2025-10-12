import React from 'react';
import { View } from 'react-native';
import { styles } from './MainLayout.styles';
import BottomTab from '../BottomTab';

const MainLayout = ({ children, activeTab, navigation }) => {
  const handleTabPress = (tabId) => {
    switch (tabId) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'chart':
        navigation.navigate('Statistics');
        break;
      case 'people':
        // Navigate to community/people screen
        console.log('People tab pressed');
        break;
      case 'settings':
        // Navigate to settings screen
        console.log('Settings tab pressed');
        break;
      case 'flash':
        navigation.navigate('CravingAssistance');
        break;
      default:
        console.log('Tab pressed:', tabId);
    }
  };

  return (
    <View style={styles.container}>
      {children}
      <BottomTab 
        activeTab={activeTab} 
        onTabPress={handleTabPress}
      />
    </View>
  );
};

export default MainLayout;
