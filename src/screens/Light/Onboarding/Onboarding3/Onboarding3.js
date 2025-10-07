import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Onboarding3.styles';

const Onboarding3 = ({ navigation }) => {
  const handleFinish = () => {
    navigation.navigate('Home');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hazır mısınız?</Text>
      <Text style={styles.subtitle}>
        Artık sigarayı bırakma yolculuğunuza başlayabilirsiniz. 
        Size destek olmaya hazırız!
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

export default Onboarding3;

