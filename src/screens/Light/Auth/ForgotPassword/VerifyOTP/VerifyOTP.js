import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './VerifyOTP.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../../components/TopNavigation'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'

const VerifyOTP = ({ navigation, route }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(24);
  const [hasError, setHasError] = useState(false);
  
  const email = route?.params?.email || 'pe***an@domain.com';

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Clear error when user types
      if (hasError) {
        setHasError(false);
      }
    }
  };

  const handleContinue = () => {
    const otpCode = otp.join('');
    console.log('OTP Code:', otpCode);
    
    // TODO: Replace with actual API call
    // Simulating correct OTP for demo
    const isCorrect = true; // This should come from API
    
    if (!isCorrect) {
      setHasError(true);
    } else {
      // Navigate to reset password
      navigation.navigate('NewPassword');
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(24);
      console.log('Resend OTP');
      // TODO: Resend OTP logic
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

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
          <Text style={styles.title}>Kodunuzu Doğrulayın</Text>
          <Text style={styles.subtitle}>
            {email} adresine bir doğrulama kodu gönderildi. Devam etmek için aşağıya girin.
          </Text>
        </View>
        
        <View style={styles.form}>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <Input
                key={index}
                type="code"
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                keyboardType="number-pad"
                maxLength={1}
                hasError={hasError}
              />
            ))}
          </View>
          {hasError && (
            <Text style={styles.errorText}>
              Girdiğiniz kod yanlış. Lütfen tekrar deneyin.
            </Text>
          )}
        </View>
        
        <Button 
          text="Devam Et" 
          onPress={handleContinue}
          disabled={!isOtpComplete}
        />
        
        <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
          <Text style={styles.footerText}>
            Kodu almadınız mı? {timer > 0 ? `Bekleyin (${timer}s)` : 'Tekrar Gönder'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VerifyOTP

