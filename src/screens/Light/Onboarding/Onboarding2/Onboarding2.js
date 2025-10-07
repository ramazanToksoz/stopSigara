import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Onboarding2.styles';

const Onboarding2 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Onboarding3');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Özelliklerimiz</Text>
      <Text style={styles.subtitle}>
        • Günlük takip ve istatistikler{'\n'}
        • Motivasyon mesajları{'\n'}
        • Sağlık faydaları takibi{'\n'}
        • Kişiselleştirilmiş hedefler
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

export default Onboarding2;

