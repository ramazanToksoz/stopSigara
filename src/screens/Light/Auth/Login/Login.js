import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Login.styles'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../../../constants/Colors'
import Button from '../../../../components/Button'
import Alert from '../../../../components/Alert'
import { signInWithGoogle } from '../../../../services/authService'

const Login = ({ navigation }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithGoogle();
      if (result.success) {
        showAlert('success', 'Google ile giriş başarılı!');
        setTimeout(() => {
          setAlertVisible(false);
          navigation.navigate('Home');
        }, 2000);
      } else {
        showAlert('error', 'Google ile giriş başarısız.');
      }
    } catch (e) {
      showAlert('error', 'Beklenmedik bir hata oluştu.');
    }
  };

  const handleEmailAuth = () => {
    console.log('Email Auth');
    navigation.navigate('EmailLogin');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.content}>
        {alertVisible && (
          <View style={styles.alertContainer}>
            <Alert
              type={alertType}
              message={alertMessage}
              visible={true}
              onClose={() => setAlertVisible(false)}
              darkMode={false}
            />
          </View>
        )}
        <View style={styles.blank} />
        
        <View style={styles.logoContainer}>
          <View style={styles.logoMark}>
            <Image 
              source={require('../../../../assets/images/icons/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.logoText}>STOPSİGARA</Text>
        </View>
        
        <View style={styles.ssoContainer}>
          <Button
            text="Continue with Google"
            type="neutral"
            buttonStyle="soft"
            size="default"
            mode="light"
            onPress={handleGoogleAuth}
            leftIcon={require('../../../../assets/images/icons/Google_icon.png')}
            hideArrow={true}
          />
          
          <Button
            text="Continue with Email"
            type="neutral"
            buttonStyle="soft"
            size="default"
            mode="light"
            onPress={handleEmailAuth}
            leftIcon={require('../../../../assets/images/icons/sms.png')}
            hideArrow={true}
          />
        </View>
      </View>
    </View>
  )
}

export default Login

