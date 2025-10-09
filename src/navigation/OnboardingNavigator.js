import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import Onboarding1 from '../screens/Light/Onboarding/Onboarding1';
import Onboarding2 from '../screens/Light/Onboarding/Onboarding2';
import Onboarding3 from '../screens/Light/Onboarding/Onboarding3';
import Onboarding4 from '../screens/Light/Onboarding/Onboarding4';
import SmokeSum from '../screens/Light/Onboarding/Onboarding3/Gradual/SmokeSum';
import Target from '../screens/Light/Onboarding/Onboarding3/Gradual/Target';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Onboarding1"
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen 
        name="Onboarding1" 
        component={Onboarding1}
      />
      
      <Stack.Screen 
        name="Onboarding2" 
        component={Onboarding2}
      />
      
      <Stack.Screen 
        name="Onboarding3" 
        component={Onboarding3}
      />
      
      {/* Gradual Flow */}
      <Stack.Screen 
        name="SmokeSum" 
        component={SmokeSum}
      />
      
      <Stack.Screen 
        name="Target" 
        component={Target}
      />
      
      <Stack.Screen 
        name="Onboarding4" 
        component={Onboarding4}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;

