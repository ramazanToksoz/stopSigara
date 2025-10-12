import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './SignUp.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up:', { email, password });
    // TODO: Sign up logic
    // Simulate successful signup
    navigation.navigate('Home');
  };

  const handleGoogleAuth = () => {
    console.log('Google sign up');
    // TODO: Google authentication
  };

  const handleAppleAuth = () => {
    console.log('Apple sign up');
    // TODO: Apple authentication
  };

  const handleSignIn = () => {
    navigation.navigate('EmailLogin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      </View>
      
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={() => navigation.goBack()}
        showCenterItem={false}
        showTrailingItem={false}
      />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Kaydol</Text>
          <Text style={styles.subtitle}>Hesabınızı oluşturalım.</Text>
        </View>
        
        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>E-posta Adresi</Text>
            <Input
              type="default"
              placeholder="E-posta adresiniz"
              value={email}
              onChangeText={setEmail}
              hasLeadingIcon={true}
              leadingIcon={require('../../../../assets/images/icons/sms.png')}
              keyboardType="email-address"
              autoCapitalize="none"
              hideSeparator={true}
            />
          </View>
          
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Şifre</Text>
            <Input
              type="password"
              placeholder="Şifre"
              value={password}
              onChangeText={setPassword}
              hasLeadingIcon={true}
              leadingIcon={require('../../../../assets/images/icons/lock.png')}
              showPasswordToggle={true}
              hideSeparator={true}
            />
          </View>
        </View>
        
        <Button 
          text="Kaydol" 
          onPress={handleSignUp}
          disabled={false}
          hideArrow={true}
        />
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Zaten hesabın var mı?</Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInLink}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.orContinue}>
          <View style={styles.divider} />
          <Text style={styles.orText}>VEYA</Text>
          <View style={styles.divider} />
        </View>
        
        <View style={styles.ssoContainer}>
          <Button 
            text="Google ile Devam Et" 
            leftIcon={require('../../../../assets/images/icons/Google_icon.png')}
            hideArrow={true}
            onPress={handleGoogleAuth}
            buttonStyle="outline"
            type="neutral"
          />
          <Button 
            text="Apple ile Devam Et" 
            leftIcon={require('../../../../assets/images/icons/Apple_icon.png')}
            hideArrow={true}
            onPress={handleAppleAuth}
            buttonStyle="outline"
            type="neutral"
          />
        </View>
      </View>
    </View>
  )
}

export default SignUp

