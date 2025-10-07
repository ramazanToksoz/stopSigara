import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Onboarding1.styles';

const Onboarding1 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sigarayı Bırakma Yolculuğu</Text>
      <Text style={styles.subtitle}>
        Uygulamamız size sigarayı bırakma sürecinde 
        rehberlik edecek ve motivasyon sağlayacak.
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding1;




