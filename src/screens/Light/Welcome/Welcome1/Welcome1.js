import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Welcome1.styles';
import TopNavigation from '../../../../components/TopNavigation';
import NavigationDots from '../../../../components/NavigationDots';
import Button from '../../../../components/Button';
const Welcome1 = ({ navigation }) => {
  console.log('Welcome1');
  const handleNext = () => {
    navigation.navigate('Welcome2');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate('Onboarding');
  };

  const handleSignIn = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      </View>
      
      <TopNavigation
        showLeadingItem={false}
        showCenterItem={false}
        centerType="progress"
        currentPage={1}
        totalPages={3}
        showTrailingItem={true}
        trailingType="button"
        trailingText="Skip"
        buttonType="neutral"
        buttonStyle="text"
        buttonSize="xs"
        onTrailingPress={handleSkip}
      />
      
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../../assets/images/journey.png')} resizeMode="contain" />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sigarasız Yolculuk</Text>
          <Text style={styles.subtitle}>
            Sağlığınızın kontrolünü alın, adım adım. Size rehberlik ediyoruz.
          </Text>
        </View>
        
        <NavigationDots activePage={1} mode="light" />
      </View>
      
      <View style={styles.bottomContainer}>
        <Button 
          text="Devam Et"
          type="primary"
          buttonStyle="default"
          size="default"
          mode="light"
          onPress={handleNext}
        />
        
        <TouchableOpacity onPress={handleSignIn} style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Zaten hesabınız var mı? <Text style={styles.signInLink}>Giriş Yapın</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome1;