import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import navigators
import WelcomeNavigator from './WelcomeNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import Notifications from '../screens/Light/Notifications';
import CravingAssistance from '../screens/Light/CravingAssistance';
import Statistics from '../screens/Light/Statistics';
import Improvements from '../screens/Light/Statistics/ColdTurkey/Improvements';
import MainLayout from '../components/MainLayout';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Auth" 
        screenOptions={{ 
          headerShown: false,
          animation: 'fade',
        }}
      >
        {/* Welcome Flow (Loading + Welcome1,2,3) */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeNavigator}
        />
        
        {/* Onboarding Flow (Onboarding1,2,3,4) */}
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingNavigator}
        />
        
        {/* Auth Flow (Login, EmailLogin, etc.) */}
        <Stack.Screen 
          name="Auth" 
          component={AuthNavigator}
        />
        
        {/* Home Flow (ColdTurkey or Gradual based on user choice) */}
        <Stack.Screen 
          name="Home" 
          component={({ navigation }) => (
            <MainLayout activeTab="home" navigation={navigation}>
              <HomeNavigator navigation={navigation} />
            </MainLayout>
          )}
        />
        
        {/* Notifications Screen */}
        <Stack.Screen 
          name="Notifications" 
          component={({ navigation }) => (
            <MainLayout activeTab="home" navigation={navigation}>
              <Notifications navigation={navigation} />
            </MainLayout>
          )}
        />
        
        {/* Craving Assistance Screen */}
        <Stack.Screen 
          name="CravingAssistance" 
          component={({ navigation }) => (
            <MainLayout activeTab="flash" navigation={navigation}>
              <CravingAssistance navigation={navigation} />
            </MainLayout>
          )}
        />
        
        {/* Statistics Screen */}
        <Stack.Screen 
          name="Statistics" 
          component={({ navigation }) => (
            <MainLayout activeTab="chart" navigation={navigation}>
              <Statistics navigation={navigation} />
            </MainLayout>
          )}
        />
        
        {/* Improvements Screen */}
        <Stack.Screen 
          name="Improvements" 
          component={({ navigation }) => (
            <MainLayout activeTab="chart" navigation={navigation}>
              <Improvements navigation={navigation} />
            </MainLayout>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
