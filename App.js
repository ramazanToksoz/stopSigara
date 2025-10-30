import React, { useEffect, useState, useRef } from 'react';
import * as Font from 'expo-font';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/context/UserContext';
import { LanguageProvider } from './src/context/LanguageContext';
import { } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useUser } from './src/context/UserContext';
import {
  setupAndroidChannel as notificationsSetupAndroidChannel,
  requestPermissionsAndGetToken as notificationsRequestPermissionsAndGetToken,
  scheduleLocalTestNotification as notificationsScheduleLocalTestNotification,
  addListeners as notificationsAddListeners,
  removeListeners as notificationsRemoveListeners,
} from './src/services/notifications/expoNotificationsService';

// Bildirim handler ve ayarlar service içinde yönetilir

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
    configureGoogleSignIn();
    registerForPushNotificationsAsync();
    notificationsSetupAndroidChannel();

    const subs = notificationsAddListeners({
      onReceived: n => console.log('[Notification][received]', n),
      onResponse: r => console.log('[Notification][response]', r),
    });

    return () => {
      notificationsRemoveListeners(subs);
    };
  }, []);

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
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
      'DMSans_24pt-bold': require('./src/assets/fonts/DMSans_24pt-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  // Expo Push Notification izin alma ve token loglama fonksiyonu
  async function registerForPushNotificationsAsync() {
    const token = await notificationsRequestPermissionsAndGetToken();
    if (!token) {
      alert('Push bildirim izni verilmedi!');
      return;
    }
    console.log('Expo push notification token:', token);

    // Otomatik test bildirimi planlanmıyor
  }

  // Android için bildirim kanalı oluştur (gerekiyor)
  async function setupAndroidChannel() {}

  async function sendTestLocalNotification() {}

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LanguageProvider>
      <UserProvider>
        <AuthStateBridge />
        <AppNavigator />
        {/* Test butonu kaldırıldı */}
      </UserProvider>
    </LanguageProvider>
  );
}

// Auth state değiştiğinde kullanıcı önbelleğini temizle
function AuthStateBridge() {
  const { clearProfileData, updateQuitMethod } = useUser();
  const lastUidRef = useRef(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const currentUid = user?.uid || null;
      if (lastUidRef.current && lastUidRef.current !== currentUid) {
        // Hesap değişti: cache'i temizle
        clearProfileData();
        updateQuitMethod(null);
      }
      lastUidRef.current = currentUid;
    });
    return () => unsub();
  }, [clearProfileData, updateQuitMethod]);

  return null;
}