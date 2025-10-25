import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from '../components/BottomTab/BottomTab.styles';
import IconButton from '../components/IconButton';

// Import screens
import ColdTurkeyHome from '../screens/Light/Home/ColdTurkey';
import ColdTurkeyStatistics from '../screens/Light/Statistics/ColdTurkey';
import Notifications from '../screens/Light/Notifications';
import CommunityMain from '../screens/Light/Community/Main';
import CravingAssistance from '../screens/Light/CravingAssistance';
import OnPlus from '../screens/Light/Settings/OnPlus';

const Tab = createBottomTabNavigator();

const ColdTurkeyTabNavigator = ({ navigation }) => {
  const CustomTabBar = ({ state, descriptors, navigation }) => {
    const tabs = [
      { id: 'home', icon: require('../assets/images/icons/home.png') },
      { id: 'chart', icon: require('../assets/images/icons/chart-square.png') },
      { id: 'people', icon: require('../assets/images/icons/people.png') },
      { id: 'settings', icon: require('../assets/images/icons/setting-2.png') }
    ];

    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
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
          
          {/* Center IconButton */}
          <View style={styles.centerButtonContainer}>
            <IconButton
              type="Primary"
              style="Default"
              size="Default"
              icon={require('../assets/images/icons/flash.png')}
              onPress={() => navigation.navigate('CravingAssistance')}
            />
          </View>
          
          {tabs.slice(2).map((tab, index) => {
            const routeIndex = index + 2;
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
        name="ColdTurkeyHome" 
        component={ColdTurkeyHome}
        options={{ tabBarLabel: '' }}
      />
      <Tab.Screen 
        name="ColdTurkeyStatistics" 
        component={ColdTurkeyStatistics}
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
      <Tab.Screen 
        name="CravingAssistance" 
        component={CravingAssistance}
        options={{ tabBarLabel: '' }}
      />
    </Tab.Navigator>
  );
};

export default ColdTurkeyTabNavigator;
