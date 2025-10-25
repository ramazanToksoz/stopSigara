import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../../../../firebaseConfig'
import { styles } from './EmailLogin.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../../components/TopNavigation'
import { Colors } from '../../../../../constants/Colors'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import Checkbox from '../../../../../components/Checkbox'

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta adresi gerekli'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .required('Şifre gerekli'),
  keepSignedIn: Yup.boolean()
});

const EmailLogin = ({ navigation }) => {
  console.log('EmailLogin');

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    console.log('Login:', values);
    
    try {
      // Firebase ile giriş yap
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      
      console.log('Login successful:', user.uid);
      Alert.alert('Başarılı', 'Giriş yapıldı!');
      navigation.navigate('Home');
      
    } catch (error) {
      console.error('Login error:', error);
      setSubmitting(false);
      
      // Firebase hata kodlarına göre Türkçe mesajlar
      let errorMessage = 'Giriş yapılırken bir hata oluştu.';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Bu e-posta adresi ile kayıtlı kullanıcı bulunamadı.';
          setFieldError('email', errorMessage);
          break;
        case 'auth/wrong-password':
          errorMessage = 'Şifre yanlış.';
          setFieldError('password', errorMessage);
          break;
        case 'auth/invalid-email':
          errorMessage = 'Geçersiz e-posta adresi.';
          setFieldError('email', errorMessage);
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Çok fazla başarısız deneme. Lütfen daha sonra tekrar deneyin.';
          Alert.alert('Hata', errorMessage);
          break;
        case 'auth/network-request-failed':
          errorMessage = 'İnternet bağlantınızı kontrol edin.';
          Alert.alert('Bağlantı Hatası', errorMessage);
          break;
        default:
          errorMessage = error.message || 'Bilinmeyen bir hata oluştu.';
          Alert.alert('Giriş Hatası', errorMessage);
      }
    }
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
      
      <Formik
        initialValues={{
          email: '',
          password: '',
          keepSignedIn: false
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ 
          values, 
          errors, 
          touched, 
          handleChange, 
          handleBlur, 
          handleSubmit, 
          isSubmitting,
          setFieldValue 
        }) => (
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
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  hasLeadingIcon={true}
                  leadingIcon={require('../../../../../assets/images/icons/sms.png')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  hideSeparator={true}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Şifre</Text>
                <Input
                  type="password"
                  placeholder="Şifreniz"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  hasLeadingIcon={true}
                  leadingIcon={require('../../../../../assets/images/icons/lock.png')}
                  hasTrailingIcon={true}
                  trailingIcon={require('../../../../../assets/images/icons/eye.png')}
                  hideSeparator={true}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              
              <View style={styles.optionsRow}>
                <TouchableOpacity 
                  style={styles.checkboxContainer}
                  onPress={() => setFieldValue('keepSignedIn', !values.keepSignedIn)}
                >
                  <Checkbox 
                    checked={values.keepSignedIn}
                    onPress={() => setFieldValue('keepSignedIn', !values.keepSignedIn)}
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
              text={isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"} 
              onPress={handleSubmit}
              disabled={isSubmitting}
            />
            
            <View style={styles.footer}>
              <Text style={styles.footerText}>Hesabın yok mu?</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink}>Kaydol</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EmailLogin;