import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Login.styles'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../../../constants/Colors'
import Button from '../../../../components/Button'

const Login = ({ navigation }) => {
  console.log('Login');
  const handleGoogleAuth = () => {
    console.log('Google Auth');
    // TODO: Google authentication
  };

  const handleAppleAuth = () => {
    console.log('Apple Auth');
    // TODO: Apple authentication
  };

  const handleEmailAuth = () => {
    console.log('Email Auth');
    navigation.navigate('EmailLogin');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.content}>
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
            text="Continue with Apple"
            type="neutral"
            buttonStyle="soft"
            size="default"
            mode="light"
            onPress={handleAppleAuth}
            leftIcon={require('../../../../assets/images/icons/Apple_icon.png')}
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

