import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { styles } from './SignUp.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { signUpWithEmail, signInWithGoogle } from '../../../../services/authService'
import { saveUserProfile } from '../../../../services/firestoreService'
import { useUser } from '../../../../context/UserContext'

// Validation schema
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta adresi gerekli'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .required('Şifre gerekli'),
});

const SignUp = ({ navigation }) => {
  console.log('SignUp');
  const { quitMethod, userData } = useUser();

  const handleSignUp = async (values, { setSubmitting, setFieldError }) => {
    console.log('Sign Up:', values);
    
    try {
      const result = await signUpWithEmail(values.email, values.password);

      if (result.success) {
        console.log('Kayıt başarılı:', result.user.uid);
        
        // Kullanıcı profilini Firestore'a kaydet
        const profileData = {
          email: values.email,
          emailPrefix: values.email.split('@')[0], // @'den önceki kısım (örn: ramazan.toksoz)
          quitMethod: quitMethod,
          onboardingData: userData,
          createdAt: new Date().toISOString(),
        };
        
        const saveResult = await saveUserProfile(result.user.uid, profileData);
        
        if (saveResult.success) {
          console.log('Profil Firestore\'a kaydedildi');
        } else {
          console.error('Firestore kayıt hatası:', saveResult.error);
        }
        
        navigation.navigate('Home');
      } else {
        // Firebase'den gelen hatayı işle
        console.error('Kayıt hatası:', result.error.code);
        if (result.error.code === 'auth/email-already-in-use') {
          setFieldError('email', 'Bu e-posta adresi zaten kullanılıyor.');
        } else if (result.error.code === 'auth/weak-password') {
          setFieldError('password', 'Şifre çok zayıf. En az 6 karakter olmalı.');
        } else if (result.error.code === 'auth/invalid-email') {
          setFieldError('email', 'Geçersiz e-posta adresi.');
        } else {
          setFieldError('email', 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
        }
      }
    } catch (e) {
      // Beklenmedik bir hata olursa
      console.error('Beklenmedik hata:', e);
      setFieldError('email', 'Beklenmedik bir hata oluştu.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignIn = () => {
    navigation.navigate('EmailLogin');
  };



  const handleGoogleAuth = async () => {
    console.log('Google sign up');
    try {
      const result = await signInWithGoogle();
      
      if (result.success) {
        console.log('Google ile giriş başarılı:', result.user.uid);
        
        // Google kullanıcı bilgilerini al
        const googleUser = result.user;
        
        // Kullanıcı profilini Firestore'a kaydet
        const profileData = {
          email: googleUser.email,
          emailPrefix: googleUser.email ? googleUser.email.split('@')[0] : googleUser.uid,
          displayName: googleUser.displayName,
          photoURL: googleUser.photoURL,
          quitMethod: quitMethod,
          onboardingData: userData,
          createdAt: new Date().toISOString(),
        };
        
        const saveResult = await saveUserProfile(result.user.uid, profileData);
        
        if (saveResult.success) {
          console.log('Google profil Firestore\'a kaydedildi');
        } else {
          console.error('Firestore kayıt hatası:', saveResult.error);
        }
        
        navigation.navigate('Home');
      } else {
        console.error('Google ile giriş hatası:', result.error.code);
        // Hata mesajı göster
        Alert.alert('Hata', 'Google ile giriş yapılırken bir hata oluştu.');
      }
    } catch (e) {
      console.error('Beklenmedik Google giriş hatası:', e);
      Alert.alert('Hata', 'Beklenmedik bir hata oluştu.');
    }
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
              <Button
                text="Continue with Google"
                onPress={handleGoogleAuth}
                buttonStyle="outline"
                type="neutral"
                hasIconLeft={true}
                leftIcon={require('../../../../assets/images/icons/Google_icon.png')}
              />
              
             
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