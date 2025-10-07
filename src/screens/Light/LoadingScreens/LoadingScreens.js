import React from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import { styles } from './LoadingScreens.styles';
import Loading from '../../../components/Loading';

const LoadingScreens = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/images/icons/homeIcon3.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appTitle}>stopSigara</Text>
      </View>
      
      <View style={styles.loadingContainer}>
        <Loading variant="primary" size="medium" />
      </View>
      
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>VERSİYON 1.0.0</Text>
      </View>
    </View>
  );
};

export default LoadingScreens;