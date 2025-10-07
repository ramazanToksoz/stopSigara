import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Welcome1.styles';

const Welcome1 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Welcome2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <Text style={styles.subtitle}>
        Sigarayı bırakma yolculuğunuza başlıyorsunuz.
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome1;

