import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/context/UserContext';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
    configureGoogleSignIn();
  }, []);

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      // Web application Client ID (Firebase'den gelen)
      webClientId: '690845394417-co0j25ssuf2jsqj9gb93tfb7342krori.apps.googleusercontent.com',
      offlineAccess: true,
    });
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      'DMSans-Regular': require('./src/assets/fonts/DMSans-Regular.ttf'),
      'DMSans-Medium': require('./src/assets/fonts/DMSans-Medium.ttf'),
      'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
      'DMSans-ExtraBold': require('./src/assets/fonts/DMSans-ExtraBold.ttf'),
      "DMSans_24pt-bold": require('./src/assets/fonts/DMSans_24pt-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}