import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Congrats-PLUS.styles';
import Button from '../../../../components/Button';

const CongratsPLUS = ({ navigation }) => {
  const handleTryFeatures = () => {
    // Navigate to main app or features
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar} />
      
      {/* Confetti Background */}
      <View style={styles.confettiContainer}>
        <View style={styles.confettiItem} />
        <View style={[styles.confettiItem, styles.confettiItem2]} />
        <View style={[styles.confettiItem, styles.confettiItem3]} />
        <View style={[styles.confettiItem, styles.confettiItem4]} />
        <View style={[styles.confettiItem, styles.confettiItem5]} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.mainCard}>
          {/* Crown Badge */}
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Image
                source={require('../../../../assets/images/icons/crown.png')}
                style={styles.crownIcon}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to PLUS!</Text>
            <Text style={styles.subtitle}>
              Your PLUS plan is now active. Unlock advanced features, faster performance, and priority support, all designed to elevate your creative workflow.
            </Text>
          </View>

          {/* Button */}
          <Button
            type="primary"
            size="default"
            text="Try PLUS features now"
            onPress={handleTryFeatures}
            style={styles.button}
          />
        </View>
      </View>

      {/* Home Indicator */}
      
    </View>
  );
};

export default CongratsPLUS;
