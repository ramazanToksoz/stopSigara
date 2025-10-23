import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './OnPlus.styles';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';

const OnPlus = ({ navigation }) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleQuitPlanPress = () => {
    navigation.navigate('QuitPlan');
  };

  const handleSubscriptionPress = () => {
    // Navigate to subscription settings
    console.log('Subscription pressed');
  };

  const handlePaymentMethodsPress = () => {
    // Navigate to payment methods
    console.log('Payment Methods pressed');
  };

  const handleSecurityPress = () => {
    // Navigate to security settings
    console.log('Security pressed');
  };

  const handleNotificationsPress = () => {
    navigation.navigate('Notifications');
  };

  const handleLanguagePress = () => {
    // Navigate to language settings
    console.log('Language pressed');
  };

  const handleHelpSupportPress = () => {
    // Navigate to help & support
    console.log('Help & Support pressed');
  };

  const handleAboutPress = () => {
    // Navigate to about
    console.log('About pressed');
  };

  const handleLogoutPress = () => {
    // Handle logout
    console.log('Logout pressed');
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar} />
      
      {/* Top Navigation */}
      <TopNavigation
        showLeadingItem={false}
        showCenterItem={true}
        centerType="title"
        title="Settings"
        showTrailingItem={false}
        darkMode={false}
      />
      
      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.listGroup}>
          <ListItem
            type="default"
            leadingType="avatar"
            leadingAvatarSource={require('../../../../assets/images/avatars/Avatarprofile.png')}
            leadingSize={40}
            titleText="Peter Brian"
            hasSupportingText={true}
            supportingText="peter.brian@domain.com"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleProfilePress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/setting-5.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Quit Plan"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleQuitPlanPress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/crown2.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Subscription"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleSubscriptionPress}
            backgroundColor="#FFFFFF"
          />
        </View>

        {/* Account & Settings Section */}
        <View style={styles.listGroup}>
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/wallet.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Payment Methods"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handlePaymentMethodsPress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/lock.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Security"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleSecurityPress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/notification.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Notifications"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleNotificationsPress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/emoji-happy.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Language"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleLanguagePress}
            backgroundColor="#FFFFFF"
          />
        </View>

        {/* Support & About Section */}
        <View style={styles.listGroup}>
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/message-question.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Help & Support"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleHelpSupportPress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/document.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="About Unsmoke"
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleAboutPress}
            backgroundColor="#FFFFFF"
            containerStyle={styles.listItemWithDivider}
          />
          
          <ListItem
            type="default"
            leadingType="icon"
            leadingIcon={require('../../../../assets/images/icons/logout.png')}
            leadingBackgroundColor="#F4F4F6"
            leadingSize={40}
            leadingIconSize={20}
            titleText="Logout"
            titleStyle={styles.logoutText}
            hasTrailingItem={true}
            trailingType="icon"
            trailingIcon={require('../../../../assets/images/icons/arrow-right2.png')}
            trailingIconSize={24}
            onPress={handleLogoutPress}
            backgroundColor="#FFFFFF"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OnPlus;
