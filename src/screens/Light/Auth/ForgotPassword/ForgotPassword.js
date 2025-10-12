import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './ForgotPassword.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    navigation.navigate('VerifyOTP', { email });
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
          <Text style={styles.title}>Şifremi Sıfırla</Text>
          <Text style={styles.subtitle}>
            Şifrenizi sıfırlamak için e-posta adresinizi girin, bir sonraki adımda size OTP kodu göndereceğiz.
          </Text>
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
        </View>
        
        <Button 
          text="Devam Et" 
          onPress={handleContinue}
          disabled={!email}
        />
      </View>
    </View>
  )
}

export default ForgotPassword

