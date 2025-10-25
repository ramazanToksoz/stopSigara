import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Welcome3.styles';
import TopNavigation from '../../../../components/TopNavigation';
import NavigationDots from '../../../../components/NavigationDots';
import Button from '../../../../components/Button';

const Welcome3 = ({ navigation }) => {
  console.log('Welcome3');
  const handleFinish = () => {
    navigation.navigate('Onboarding');
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
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        showCenterItem={false}
        centerType="progress"
        currentPage={3}
        totalPages={3}
        showTrailingItem={false}
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
          <Image style={styles.image} source={require('../../../../assets/images/path11.png')} resizeMode="contain" />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Yolunu Seç</Text>
          <Text style={styles.subtitle}>
          Aniden bırak ya da yavaş yavaş azalt — sana en uygun olanı seç.
          </Text>
        </View>
        
        <NavigationDots activePage={3} mode="light" />
      </View>
      
      <View style={styles.bottomContainer}>
        <Button 
          text="Başla"
          type="primary"
          buttonStyle="default"
          size="default"
          mode="light"
          onPress={handleFinish}
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

export default Welcome3;




