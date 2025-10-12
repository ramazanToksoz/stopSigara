import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './NewPassword.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../../components/TopNavigation'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import Alert from '../../../../../components/Alert'

const NewPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    
    console.log('Password changed successfully');
    setShowSuccessAlert(true);
    
    // Navigate back to login after showing success
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  };

  const isFormValid = newPassword && confirmPassword && newPassword === confirmPassword;

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
          <Text style={styles.title}>Yeni Şifre Oluştur</Text>
          <Text style={styles.subtitle}>
            Lütfen yeni şifrenizi girin.
          </Text>
        </View>
        
        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Yeni Şifre</Text>
            <Input
              type="password"
              placeholder="Şifre"
              value={newPassword}
              onChangeText={setNewPassword}
              hasLeadingIcon={true}
              leadingIcon={require('../../../../../assets/images/icons/lock.png')}
              showPasswordToggle={true}
              hideSeparator={true}
            />
          </View>
          
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Yeni Şifreyi Onayla</Text>
            <Input
              type="password"
              placeholder="Şifre"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              hasLeadingIcon={true}
              leadingIcon={require('../../../../../assets/images/icons/lock.png')}
              showPasswordToggle={true}
              hideSeparator={true}
            />
          </View>
        </View>
        
        <Button 
          text="Gönder" 
          onPress={handleSubmit}
          disabled={!isFormValid}
          hideArrow={true}
        />
      </View>
      
      {showSuccessAlert && (
        <View style={styles.alertContainer}>
          <Alert
            type="success"
            message="Şifre değiştirildi"
            darkMode={true}
            onClose={() => setShowSuccessAlert(false)}
          />
        </View>
      )}
    </View>
  )
}

export default NewPassword

