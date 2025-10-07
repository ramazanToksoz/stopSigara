import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Welcome2.styles';

const Welcome2 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Welcome3');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sağlığınızı Geri Kazanın</Text>
      <Text style={styles.subtitle}>
        Sigarayı bırakarak akciğerlerinizi temizleyin ve 
        daha sağlıklı bir yaşam sürdürün.
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome2;

