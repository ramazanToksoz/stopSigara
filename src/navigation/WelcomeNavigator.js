import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import LoadingScreens from '../screens/Light/LoadingScreens';
import Welcome1 from '../screens/Light/Welcome/Welcome1';
import Welcome2 from '../screens/Light/Welcome/Welcome2';
import Welcome3 from '../screens/Light/Welcome/Welcome3';

const Stack = createNativeStackNavigator();

const WelcomeNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Loading"
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/* Loading Screen */}
      <Stack.Screen 
        name="Loading" 
        component={LoadingScreens}
        options={{
          animation: 'fade',
        }}
      />
      
      {/* Welcome Screens */}
      <Stack.Screen 
        name="Welcome1" 
        component={Welcome1}
      />
      
      <Stack.Screen 
        name="Welcome2" 
        component={Welcome2}
      />
      
      <Stack.Screen 
        name="Welcome3" 
        component={Welcome3}
      />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;

