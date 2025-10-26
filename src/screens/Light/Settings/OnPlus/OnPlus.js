import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './OnPlus.styles';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import Logout from '../Logout';
import { useProfileData } from '../../../../hooks/useProfileData';

const OnPlus = ({ navigation }) => {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const { profileData } = useProfileData();
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleQuitPlanPress = () => {
    navigation.navigate('QuitPlan');
  };

  const handleSubscriptionPress = () => {
    navigation.navigate('Subscription');
  };

  const handlePaymentMethodsPress = () => {
    navigation.navigate('PaymentMethodsList');
  };

  const handleSecurityPress = () => {
    navigation.navigate('SecurityOptions');
  };

  const handleNotificationsPress = () => {
    navigation.navigate('SettingsNotificationsScreen');
  };

  const handleLanguagePress = () => {
    navigation.navigate('Language');
  };

  const handleHelpSupportPress = () => {
    navigation.navigate('Help');
  };

  const handleAboutPress = () => {
    navigation.navigate('About');
  };

  const handleLogoutPress = () => {
    setIsLogoutModalVisible(true);
  };

  const handleLogoutConfirm = () => {
    // Navigate back to Welcome screen
    navigation.navigate('Welcome');
  };

  const handleLogoutClose = () => {
    setIsLogoutModalVisible(false);
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
            leadingAvatarSource={
              typeof profileData?.photoURL === 'string' 
                ? { uri: profileData.photoURL } 
                : require('../../../../assets/images/avatars/Avatarprofile.png')
            }
            leadingSize={40}
            titleText={profileData?.displayName || profileData?.emailPrefix || "User"}
            hasSupportingText={true}
            supportingText={profileData?.email || "user@example.com"}
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

      {/* Logout Modal */}
      <Logout
        visible={isLogoutModalVisible}
        onClose={handleLogoutClose}
        onConfirm={handleLogoutConfirm}
      />
    </View>
  );
};

export default OnPlus;
