import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { styles } from './SignUp.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Checkbox from '../../../../components/Checkbox'

// Validation schema
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta adresi gerekli'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermeli')
    .required('Şifre gerekli'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
    .required('Şifre tekrarı gerekli'),
  termsAccepted: Yup.boolean()
    .oneOf([true], 'Kullanım şartlarını kabul etmelisiniz')
});

const SignUp = ({ navigation }) => {
  console.log('SignUp');

  const handleSignUp = (values, { setSubmitting, setFieldError }) => {
    console.log('Sign Up:', values);
    
    // Simulate API call
    setTimeout(() => {
      if (values.email && values.password) {
        console.log('Sign up successful');
        navigation.navigate('Home');
      } else {
        setFieldError('email', 'Kayıt olurken bir hata oluştu');
      }
      setSubmitting(false);
    }, 1000);
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
      
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          termsAccepted: false
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
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
              <Text style={styles.title}>Kaydol</Text>
              <Text style={styles.subtitle}>Hesabınızı oluşturalım.</Text>
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
                  leadingIcon={require('../../../../assets/images/icons/sms.png')}
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
                  leadingIcon={require('../../../../assets/images/icons/lock.png')}
                  hasTrailingIcon={true}
                  trailingIcon={require('../../../../assets/images/icons/eye.png')}
                  hideSeparator={true}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Şifre Tekrarı</Text>
                <Input
                  type="password"
                  placeholder="Şifrenizi tekrar girin"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  hasLeadingIcon={true}
                  leadingIcon={require('../../../../assets/images/icons/lock.png')}
                  hasTrailingIcon={true}
                  trailingIcon={require('../../../../assets/images/icons/eye.png')}
                  hideSeparator={true}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              
              <View style={styles.termsContainer}>
                <TouchableOpacity 
                  style={styles.checkboxContainer}
                  onPress={() => setFieldValue('termsAccepted', !values.termsAccepted)}
                >
                  <Checkbox 
                    checked={values.termsAccepted}
                    onPress={() => setFieldValue('termsAccepted', !values.termsAccepted)}
                    darkMode={false}
                  />
                  <Text style={styles.termsText}>
                    <Text style={styles.termsText}>Kullanım Şartları</Text> ve <Text style={styles.termsText}>Gizlilik Politikası</Text>'nı kabul ediyorum.
                  </Text>
                </TouchableOpacity>
                {touched.termsAccepted && errors.termsAccepted && (
                  <Text style={styles.errorText}>{errors.termsAccepted}</Text>
                )}
              </View>
            </View>
            
            <Button 
              text={isSubmitting ? "Kayıt oluşturuluyor..." : "Kaydol"} 
              onPress={handleSubmit}
              disabled={isSubmitting}
            />
            
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>veya</Text>
              <View style={styles.dividerLine} />
            </View>
            
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton} onPress={handleGoogleAuth}>
                <Text style={styles.socialButtonText}>Google ile Kaydol</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.socialButton} onPress={handleAppleAuth}>
                <Text style={styles.socialButtonText}>Apple ile Kaydol</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.footer}>
              <Text style={styles.footerText}>Zaten hesabın var mı?</Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInLink}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;