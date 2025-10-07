import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Welcome3.styles';

const Welcome3 = ({ navigation }) => {
  const handleFinish = () => {
    navigation.navigate('Home');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Başlayalım!</Text>
      <Text style={styles.subtitle}>
        Artık hazırsınız! Sigarayı bırakma yolculuğunuzda 
        size rehberlik edeceğiz.
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Text style={styles.finishButtonText}>Başla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome3;

