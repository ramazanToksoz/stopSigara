import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import Login from '../screens/Light/Auth/Login';
import EmailLogin from '../screens/Light/Auth/Login/EmailLogin';
import SignUp from '../screens/Light/Auth/SignUp';
import ForgotPassword from '../screens/Light/Auth/ForgotPassword';
import VerifyOTP from '../screens/Light/Auth/ForgotPassword/VerifyOTP';
import NewPassword from '../screens/Light/Auth/ForgotPassword/NewPassword';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={Login}
      />
      
      <Stack.Screen 
        name="EmailLogin" 
        component={EmailLogin}
      />
      
      <Stack.Screen 
        name="SignUp" 
        component={SignUp}
      />
      
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword}
      />
      
      <Stack.Screen 
        name="VerifyOTP" 
        component={VerifyOTP}
      />
      
      <Stack.Screen 
        name="NewPassword" 
        component={NewPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

