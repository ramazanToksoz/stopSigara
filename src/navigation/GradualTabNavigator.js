import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../components/BottomTab/BottomTab.styles';
import IconButton from '../components/IconButton';

// Import screens
import GradualHome from '../screens/Light/Home/Gradual';
import GradualStatistics from '../screens/Light/Statistics/Gradual';
import Notifications from '../screens/Light/Notifications';
import CommunityMain from '../screens/Light/Community/Main';
import CravingAssistance from '../screens/Light/CravingAssistance';
import OnFree from '../screens/Light/Settings/OnFree';
import OnPlus from  "../screens/Light/Settings/OnPlus"
const Tab = createBottomTabNavigator();

const GradualTabNavigator = ({ navigation }) => {
  const CustomTabBar = ({ state, descriptors, navigation }) => {
    // Tab iconları sırası: Home, Statistics, Community, Settings
    // Her tab'a karşılık gelen route indeksi ile eşleştiriyoruz
    const tabs = [
      { id: 'home', icon: require('../assets/images/icons/home.png') },          // Index 0: GradualHome
      { id: 'chart', icon: require('../assets/images/icons/chart-square.png') }, // Index 1: GradualStatistics
      { id: 'placeholder', icon: null },                                        // Index 2: CravingAssistance (center, boş)
      { id: 'people', icon: require('../assets/images/icons/people.png') },     // Index 3: CommunityMain
      { id: 'settings', icon: require('../assets/images/icons/setting-2.png') } // Index 4: Settings
    ];

    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {/* İlk 2 tab (0 ve 1): Home ve Statistics */}
          {tabs.slice(0, 2).map((tab, index) => {
            const isFocused = state.index === index;
            return (
              <TouchableOpacity
                key={tab.id}
                style={styles.tabItem}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: state.routes[index].key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(state.routes[index].name);
                  }
                }}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={tab.icon}
                    style={[
                      styles.tabIcon,
                      isFocused && styles.activeIcon
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            );
          })}
          
          {/* Center IconButton: CravingAssistance */}
          <View style={styles.centerButtonContainer}>
            <IconButton
              type="Primary"
              style="Default"
              size="Default"
              icon={require('../assets/images/icons/flash.png')}
              onPress={() => navigation.navigate('CravingAssistance')}
            />
          </View>
          
          {/* Son 2 tab (3 ve 4): Community ve Settings */}
          {tabs.slice(3).map((tab, index) => {
            const routeIndex = index + 3; // Index 3 (CommunityMain) ve 4 (Settings)
            const isFocused = state.index === routeIndex;
            return (
              <TouchableOpacity
                key={tab.id}
                style={styles.tabItem}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: state.routes[routeIndex].key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(state.routes[routeIndex].name);
                  }
                }}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={tab.icon}
                    style={[
                      styles.tabIcon,
                      isFocused && styles.activeIcon
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="GradualHome" 
        component={GradualHome}
        options={{ tabBarLabel: '' }}
      />
      <Tab.Screen 
        name="GradualStatistics" 
        component={GradualStatistics}
        options={{ tabBarLabel: '' }}
      />
      <Tab.Screen 
        name="CravingAssistance" 
        component={CravingAssistance}
        options={{ tabBarLabel: '' }}
      />
      <Tab.Screen 
        name="CommunityMain" 
        component={CommunityMain}
        options={{ tabBarLabel: '' }}
      />
      <Tab.Screen 
        name="Settings" 
        component={OnPlus}
        options={{ tabBarLabel: '' }}
      />
    </Tab.Navigator>
  );
};

export default GradualTabNavigator;
