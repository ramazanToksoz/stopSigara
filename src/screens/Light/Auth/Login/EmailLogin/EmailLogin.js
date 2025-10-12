import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './EmailLogin.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../../components/TopNavigation'
import { Colors } from '../../../../../constants/Colors'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import Checkbox from '../../../../../components/Checkbox'

const EmailLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleLogin = () => {
    console.log('Login:', { email, password, keepSignedIn });
    // TODO: Login logic
    // Simulate successful login
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
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
          <Text style={styles.title}>E-posta ile Giriş Yap</Text>
          <Text style={styles.subtitle}>Lütfen e-posta adresinizi ve şifrenizi girin.</Text>
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
              leadingIcon={require('../../../../../assets/images/icons/sms.png')}
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
              leadingIcon={require('../../../../../assets/images/icons/lock.png')}
              showPasswordToggle={true}
              hideSeparator={true}
            />
          </View>
          
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => setKeepSignedIn(!keepSignedIn)}
            >
              <Checkbox 
                checked={keepSignedIn}
                onPress={() => setKeepSignedIn(!keepSignedIn)}
                darkMode={false}
              />
              <Text style={styles.checkboxLabel}>Beni Hatırla</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Button 
          text="Giriş Yap" 
          onPress={handleLogin}
          disabled={!email || !password}
        />
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Hesabın yok mu?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Kaydol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EmailLogin

