import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Posted.styles';
import Button from '../../../../components/Button/Button';
import TopNavigation from '../../../../components/TopNavigation/TopNavigation';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Posted = ({ navigation }) => {
  const handleShare = () => {
    console.log('Share pressed');
    // Share functionality will be implemented here
  };

  const handleClose = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      

      {/* Content */}
      <View style={styles.content}>
        {/* Top Spacer */}
        <View style={styles.topSpacer} />
        
        {/* Center Content */}
        <View style={styles.centerContent}>
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../../../assets/images/icons/tick-circle.png')}
              style={styles.successIcon}
              resizeMode="contain"
            />
          </View>
          
          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Post Submitted
            </Text>
            <Text style={styles.subtitle}>
              Your post has been submitted succesfully
            </Text>
          </View>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          {/* Share Button - Primary */}
          <Button
            text="Share"
            type="primary"
            buttonStyle="default"
            size="default"
            hideArrow={true}
            hasIconLeft={true}
            iconLeft="share"
            onPress={handleShare}
          />
          
          {/* Close Button - Neutral */}
          <Button
            text="Close"
            type="neutral"
            buttonStyle="soft"
            hideArrow={true}
            size="default"
            onPress={handleClose}
          />
        </View>
      </View>
    </View>
  );
};

export default Posted;
