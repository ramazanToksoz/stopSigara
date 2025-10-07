import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      'DMSans-Regular': require('./src/assets/fonts/DMSans-Regular.ttf'),
      'DMSans-Medium': require('./src/assets/fonts/DMSans-Medium.ttf'),
      'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
      'DMSans-ExtraBold': require('./src/assets/fonts/DMSans-ExtraBold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}