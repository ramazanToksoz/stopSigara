import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import { Colors } from '../../../../constants/Colors';
import { styles } from './About.styles';

const About = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleWeAreHiring = () => {
    console.log('We are hiring pressed');
    // Navigate to hiring page or external link
  };

  const handleFeedback = () => {
    console.log('Feedback pressed');
    // Navigate to feedback page or external link
  };

  const handleRateUs = () => {
    console.log('Rate us pressed');
    // Navigate to app store rating
  };

  const handleTermsOfUse = () => {
    navigation.navigate('Terms');
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy pressed');
    // Navigate to privacy policy page
  };

  return (
    <View style={styles.container}>
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={true}
        centerType="title"
        title="About"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Image
                source={require('../../../../assets/images/icons/logo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.appName}>Unsmoke</Text>
          <Text style={styles.versionText}>Version 1.1.0</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <ListItem
            type="default"
            hasLeadingItem={true}
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/people.png')}
            leadingBackgroundColor="transparent"
            leadingSize={24}
            leadingBorderRadius={8}
            leadingIconSize={24}
            titleText="We are hiring"
            hasSupportingText={false}
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/external-square.png')}
            trailingIconSize={24}
            onPress={handleWeAreHiring}
            darkMode={false}
            containerStyle={styles.menuItem}
           
            isLastItem={false}
          />
          
          <ListItem
            type="default"
            hasLeadingItem={true}
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/message-text.png')}
            leadingBackgroundColor="transparent"
            leadingSize={24}
            leadingBorderRadius={8}
            leadingIconSize={24}
            titleText="Feedback"
            hasSupportingText={false}
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/external-square.png')}
            trailingIconSize={24}
            onPress={handleFeedback}
            darkMode={false}
            containerStyle={styles.menuItem}
            
            isLastItem={false}
          />
          
          <ListItem
            type="default"
            hasLeadingItem={true}
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/star2.png')}
            leadingBackgroundColor="transparent"
            leadingSize={24}
            leadingBorderRadius={8}
            leadingIconSize={24}
            titleText="Rate us"
            hasSupportingText={false}
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/external-square.png')}
            trailingIconSize={24}
            onPress={handleRateUs}
            darkMode={false}
            containerStyle={styles.menuItem}
            
            isLastItem={false}
          />
          
          <ListItem
            type="default"
            hasLeadingItem={true}
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/document-text.png')}
            leadingBackgroundColor="transparent"
            leadingSize={24}
            leadingBorderRadius={8}
            leadingIconSize={24}
            titleText="Terms of Use"
            hasSupportingText={false}
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right1.png')}
            trailingIconSize={24}
            onPress={handleTermsOfUse}
            darkMode={false}
            containerStyle={styles.menuItem}
            
            isLastItem={false}
          />
          
          <ListItem
            type="default"
            hasLeadingItem={true}
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/document-text.png')}
            leadingBackgroundColor="transparent"
            leadingSize={24}
            leadingBorderRadius={8}
            leadingIconSize={24}
            titleText="Privacy Policy"
            hasSupportingText={false}
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right1.png')}
            trailingIconSize={24}
            onPress={handlePrivacyPolicy}
            darkMode={false}
            containerStyle={styles.menuItem}
           
            isLastItem={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
