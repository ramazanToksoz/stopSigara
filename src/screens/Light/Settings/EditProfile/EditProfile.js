import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './EditProfile.styles';
import TopNavigation from '../../../../components/TopNavigation';
import Input from '../../../../components/Input';

const EditProfile = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: 'Peter',
    lastName: 'Brian',
    email: 'its.brian@domain.com',
    phone: '(000) 000-0000',
    countryCode: '+01'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    // Handle save profile
    console.log('Save profile:', formData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Top Navigation */}
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={true}
        centerType="title"
        title="Edit Profile"
        showTrailingItem={false}
        darkMode={false}
        backgroundColor="#FCFCFD"
      />

      {/* Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          {/* First Name Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>First Name</Text>
            <Input
              type="default"
              value={formData.firstName}
              onChangeText={(value) => handleInputChange('firstName', value)}
              placeholder="Enter first name"
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
          </View>

          {/* Last Name Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Last Name</Text>
            <Input
              type="default"
              value={formData.lastName}
              onChangeText={(value) => handleInputChange('lastName', value)}
              placeholder="Enter last name"
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
          </View>

          {/* Email Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Email Address</Text>
            <Input
              type="default"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder="Enter email address"
              keyboardType="email-address"
              autoCapitalize="none"
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
          </View>

          {/* Phone Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Phone</Text>
            <Input
              type="phone"
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              placeholder="(000) 000-0000"
              countryCode={formData.countryCode}
              countryFlag={require('../../../../assets/images/icons/flag-us.png')}
              onCountryPress={() => console.log('Country pressed')}
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
          </View>
        </View>
      </ScrollView>

      
    </View>
  );
};

export default EditProfile;
