import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import navigators
import WelcomeNavigator from './WelcomeNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

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
          component={HomeNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
