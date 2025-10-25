import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import TopNavigation from '../../../../../components/TopNavigation';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import { Colors } from '../../../../../constants/Colors';
import { styles } from './ChangePassword.styles';

const ChangePassword = ({ navigation }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChangePassword = () => {
    console.log('Changing password:', formData);
    // Implement password change logic here
    navigation.goBack();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
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
        title="Change Password"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          {/* Old Password Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Old Password</Text>
            <Input
              type="password"
              state="filled"
              value={formData.oldPassword}
              onChangeText={(value) => handleInputChange('oldPassword', value)}
              placeholder="●●●●●●●●●●●●"
              hasTrailingIcon={true}
              trailingIcon={require('../../../../../assets/images/icons/eye-slash.png')}
              onTrailingIconPress={() => togglePasswordVisibility('oldPassword')}
              darkMode={false}
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
          </View>

          {/* New Password Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>New Password</Text>
            <Input
              type="password"
              state="filled"
              value={formData.newPassword}
              onChangeText={(value) => handleInputChange('newPassword', value)}
              placeholder="New password"
              hasTrailingIcon={true}
              trailingIcon={require('../../../../../assets/images/icons/eye-slash.png')}
              onTrailingIconPress={() => togglePasswordVisibility('newPassword')}
              darkMode={false}
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
            <Text style={styles.helperText}>Minimum 8 characters</Text>
          </View>

          {/* Confirm New Password Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Confirm New Password</Text>
            <Input
              type="password"
              state="filled"
              value={formData.confirmPassword}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
              placeholder="Confirm new password"
              hasTrailingIcon={true}
              trailingIcon={require('../../../../../assets/images/icons/eye-slash.png')}
              onTrailingIconPress={() => togglePasswordVisibility('confirmPassword')}
              darkMode={false}
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
            <Text style={styles.helperText}>Minimum 8 characters</Text>
          </View>
        </View>
        
        <Button
          text="Change Password"
          type="primary"
          buttonStyle="default"
          size="default"
          mode="light"
          onPress={handleChangePassword}
          hideArrow={true}
        />
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
