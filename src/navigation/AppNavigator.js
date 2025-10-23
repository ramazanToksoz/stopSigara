import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import navigators
import WelcomeNavigator from './WelcomeNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import GradualTabNavigator from './GradualTabNavigator';
import ColdTurkeyTabNavigator from './ColdTurkeyTabNavigator';
import Notifications from '../screens/Light/Notifications';
import CravingAssistance from '../screens/Light/CravingAssistance';
import Statistics from '../screens/Light/Statistics';
import Improvements from '../screens/Light/Statistics/ColdTurkey/Improvements';
import HealthImprovements from '../screens/Light/Statistics/Gradual/HealthImprovements';
import Comments from '../screens/Light/Community/Comments/Comments';
import AddPost from '../screens/Light/Community/AddPost/AddPost';
import Posted from '../screens/Light/Community/Posted/Posted';
import Profile from '../screens/Light/Profile';
import Achievements from '../screens/Light/Achievements';
import AchievementDetail from '../screens/Light/AchievementDetail';
import QuitPlan from '../screens/Light/Settings/QuitPlan';
import CongratsPLUS from '../screens/Light/Settings/Congrats-PLUS';
import EditProfile from '../screens/Light/Settings/EditProfile';
import MainLayout from '../components/MainLayout';
import { useUser } from '../context/UserContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
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
          component={({ navigation }) => {
            const { quitMethod } = useUser();
            console.log("AppNavigator - Home - quitMethod:", quitMethod);
            
            if (quitMethod === 'gradual') {
              console.log("AppNavigator - Home - Using GradualTabNavigator");
              return <GradualTabNavigator navigation={navigation} />;
            } else if (quitMethod === 'coldturkey') {
              console.log("AppNavigator - Home - Using ColdTurkeyTabNavigator");
              return <ColdTurkeyTabNavigator navigation={navigation} />;
            }
            
            // Default to Gradual
            console.log("AppNavigator - Home - Default to GradualTabNavigator");
            return <GradualTabNavigator navigation={navigation} />;
          }}
        />
        
        {/* Notifications Screen */}
        <Stack.Screen 
          name="Notifications" 
          component={Notifications}
        />
        
        {/* Craving Assistance Screen */}
        <Stack.Screen 
          name="CravingAssistance" 
          component={CravingAssistance}
        />
        
        {/* Statistics Screen */}
        <Stack.Screen 
          name="Statistics" 
          component={Statistics}
        />
        
        {/* Improvements Screen */}
        <Stack.Screen 
          name="Improvements" 
          component={Improvements}
        />
        
        {/* Health Improvements Screen */}
        <Stack.Screen 
          name="HealthImprovements" 
          component={HealthImprovements}
        />
        
                {/* Comments Screen */}
                <Stack.Screen 
                  name="Comments" 
                  component={Comments}
                />
                
                {/* AddPost Screen */}
                <Stack.Screen 
                  name="AddPost" 
                  component={AddPost}
                />
                
                {/* Posted Screen */}
                <Stack.Screen 
                  name="Posted" 
                  component={Posted}
                />
                
                {/* Profile Screen */}
                <Stack.Screen 
                  name="Profile" 
                  component={Profile}
                />
                
                {/* Achievements Screen */}
                <Stack.Screen 
                  name="Achievements" 
                  component={Achievements}
                />
                
                {/* Achievement Detail Screen */}
                <Stack.Screen 
                  name="AchievementDetail" 
                  component={AchievementDetail}
                />
                
        {/* QuitPlan Screen */}
        <Stack.Screen 
          name="QuitPlan" 
          component={QuitPlan}
        />
        
        {/* CongratsPLUS Screen */}
        <Stack.Screen 
          name="CongratsPLUS" 
          component={CongratsPLUS}
        />
        
        {/* EditProfile Screen */}
        <Stack.Screen 
          name="EditProfile" 
          component={EditProfile}
        />
              </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
