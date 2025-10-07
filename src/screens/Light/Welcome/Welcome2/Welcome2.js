import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Welcome2.styles';
import TopNavigation from '../../../../components/TopNavigation';
import NavigationDots from '../../../../components/NavigationDots';
import Button from '../../../../components/Button';

const Welcome2 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Welcome3');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    // TODO: Skip to main screen (Home veya Onboarding)
    console.log('Skip to main screen');
  };

  const handleSignIn = () => {
    // TODO: Navigate to sign in
    console.log('Navigate to sign in');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      </View>
      
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        
        showCenterItem={false}
        centerType="progress"
        currentPage={4}
        totalPages={5}
        showTrailingItem={true}
        trailingType="button"
        trailingText="Skip"
        buttonType="neutral"
        buttonStyle="text"
        buttonSize="xs"
        onLeadingPress={handleBack}
        onTrailingPress={handleSkip}
      />
      
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../../assets/images/ai1.png')} resizeMode="contain" />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>7/24 Yapay Zeka Koçu</Text>
          <Text style={styles.subtitle}>
          Kişisel yapay zeka koçunuz ilerlemenizi takip etmenize, aşermeleri yönetmenize ve motive kalmanıza yardımcı olur.
          </Text>
        </View>
        
        <NavigationDots activePage={2} mode="light" />
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

export default Welcome2;




