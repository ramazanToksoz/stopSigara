import React, { useRef, useEffect } from 'react';
import { View, Animated, Text, Image } from 'react-native';
import { styles } from './Loading.styles';

const Loading = ({ 
  variant = 'primary', // primary, secondary, tertiary
  size = 'medium', // small, medium, large
  type = 'default', // default, fullscreen
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => spin());
    };
    
    spin();

    // Cleanup function
    return () => {
      spinValue.stopAnimation();
    };
  }, [spinValue]);

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'medium':
        return styles.medium;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };

  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return '#CBF2CB'; // Brand/20
      case 'secondary':
        return '#E9EAEC'; // Gray/10
      case 'tertiary':
        return '#C5C8CE'; // Gray/20
      default:
        return '#CBF2CB';
    }
  };

  const getArcColor = () => {
    switch (variant) {
      case 'primary':
        return '#58B658'; // Brand/60
      case 'secondary':
        return '#54565F'; // Gray/60
      case 'tertiary':
        return '#3C3E44'; // Gray/80
      default:
        return '#58B658';
    }
  };

  const rotation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Fullscreen type for loading screens with logo
  if (type === 'fullscreen') {
    return (
      <View style={styles.fullscreenContainer}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/icons/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          
          {/* Spinning circle around logo */}
          <Animated.View 
            style={[
              styles.spinningCircleContainer,
              { transform: [{ rotate: rotation }] }
            ]}
          >
            <View style={[
              styles.spinningCircle,
              { borderColor: getArcColor() }
            ]} />
          </Animated.View>
        </View>
        
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Default type (existing spinner)
  return (
    <View style={[styles.container, getSizeStyle()]}>
      {/* Background circle */}
      <View style={[
        styles.backgroundCircle, 
        getSizeStyle(), 
        { borderColor: getBackgroundColor() }
      ]} />
      
      {/* Rotating arc */}
      <Animated.View 
        style={[
          styles.arcContainer,
          getSizeStyle(),
          { transform: [{ rotate: rotation }] }
        ]}
      >
        <View style={[
          styles.arc,
          getSizeStyle(),
          { borderColor: getArcColor() }
        ]} />
      </Animated.View>
    </View>
  );
};

export default Loading;