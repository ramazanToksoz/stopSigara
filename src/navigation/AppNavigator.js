import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import navigators
import WelcomeNavigator from './WelcomeNavigator';
import OnboardingNavigator from './OnboardingNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome" 
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
        
        {/* Future screens will be added here */}
        {/* Home, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
