import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>
      <Text style={styles.subtitle}>Sigara bırakma yolculuğunuza başlayın</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Ana Sayfaya Git</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[5],
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[90],
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    color: Colors.gray[60],
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.secondary[60],
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.gray[0],
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
  },
});

export default OnboardingScreen;
