import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './OnFree.styles';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import UpgradePlusModal from '../../../../components/UpgradePlusModal';
import Logout from '../Logout';

const OnFree = ({ navigation }) => {
  console.log("onfree")
  const [isUpgradeModalVisible, setIsUpgradeModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  const handleQuitPlanPress = () => {
    navigation.navigate('QuitPlan');
  };

  const handlePaymentMethodsPress = () => {
    navigation.navigate('PaymentMethodsList');
  };

  const handleSecurityPress = () => {
    // Navigate to security settings
    console.log('Security pressed');
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
    // Handle actual logout logic here
    console.log('User confirmed logout');
    // You can add logout logic here, e.g., clear user data, navigate to login, etc.
  };

  const handleLogoutClose = () => {
    setIsLogoutModalVisible(false);
  };

  const handleUpgradePress = () => {
    console.log('Upgrade pressed, opening modal');
    setIsUpgradeModalVisible(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setIsUpgradeModalVisible(false);
  };

  const handleStartTrial = () => {
    console.log('Start trial pressed');
    setIsUpgradeModalVisible(false);
  };

  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar} />
      
      {/* Top Navigation */}
      
      
      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Upgrade Offer Card */}
        <TopNavigation
        showLeadingItem={false}
        showCenterItem={true}
        centerType="title"
        title="Settings"
        showTrailingItem={false}
        darkMode={false}
      />
        <TouchableOpacity 
          style={styles.offerCard}
          onPress={handleUpgradePress}
          activeOpacity={0.8}
        >
          <View style={styles.waveBackground} />
          <View style={styles.offerContent}>
            <View style={styles.offerIconContainer}>
              <Image
                source={require('../../../../assets/images/icons/crown.png')}
                style={styles.offerIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.offerText}>
              <Text style={styles.offerTitle}>Upgrade to PLUS</Text>
              <Text style={styles.offerSubtitle}>
                Unlock all AI features, including smart memory and personalization
              </Text>
            </View>
          </View>
        </TouchableOpacity>

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

      {/* Upgrade Plus Modal */}
      <UpgradePlusModal
        visible={isUpgradeModalVisible}
        onClose={handleCloseModal}
        onStartTrial={handleStartTrial}
        navigation={navigation}
      />

      {/* Logout Modal */}
      <Logout
        visible={isLogoutModalVisible}
        onClose={handleLogoutClose}
        onConfirm={handleLogoutConfirm}
      />
    </View>
  );
};

export default OnFree;
