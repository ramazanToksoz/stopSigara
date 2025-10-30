import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './EditProfile.styles';
import TopNavigation from '../../../../components/TopNavigation';
import Input from '../../../../components/Input';
import { useProfileData } from '../../../../hooks/useProfileData';
import { updateUserProfile } from '../../../../services/firestoreService';
import { auth } from '../../../../../firebaseConfig';
import { useUser } from '../../../../context/UserContext';
import Loading from '../../../../components/Loading';

const COUNTRIES = [
  { code: 'US', name: 'United States', flag: require('../../../../assets/images/icons/flag-us.png'), phoneCode: '+1' },
  { code: 'TR', name: 'Turkey', flag: require('../../../../assets/images/icons/flag-tr.png'), phoneCode: '+90' },
  { code: 'GB', name: 'United Kingdom', flag: require('../../../../assets/images/icons/flag-gb.png'), phoneCode: '+44' },
  { code: 'DE', name: 'Germany', flag: require('../../../../assets/images/icons/flag-de.png'), phoneCode: '+49' },
  { code: 'FR', name: 'France', flag: require('../../../../assets/images/icons/flag-fr.png'), phoneCode: '+33' },
  { code: 'IT', name: 'Italy', flag: require('../../../../assets/images/icons/flag-it.png'), phoneCode: '+39' },
  { code: 'ES', name: 'Spain', flag: require('../../../../assets/images/icons/flag-es.png'), phoneCode: '+34' },
];

const EditProfile = ({ navigation }) => {
  const { profileData } = useProfileData();
  const { updateProfileData } = useUser();
  const userId = auth.currentUser?.uid;
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Canlı verilerden formData'yı başlat
  const getInitialFormData = () => {
    const displayName = profileData?.displayName || '';
    const nameParts = displayName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    return {
      firstName: firstName,
      lastName: lastName,
      email: profileData?.email || '',
      phone: profileData?.phone || '',
      countryCode: profileData?.countryCode || '+90'
    };
  };

  const [formData, setFormData] = useState(getInitialFormData());
  
  // Seçili ülkeyi bul
  const getSelectedCountry = () => {
    const countryCode = formData?.countryCode || profileData?.countryCode || '+90';
    return COUNTRIES.find(c => c.phoneCode === countryCode) || COUNTRIES.find(c => c.code === 'TR');
  };

  const selectedCountry = getSelectedCountry();
  
  // Profil verisi yüklendiğinde formData'yı güncelle
  useEffect(() => {
    if (profileData) {
      const displayName = profileData?.displayName || '';
      const nameParts = displayName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      setFormData({
        firstName: firstName,
        lastName: lastName,
        email: profileData?.email || '',
        phone: profileData?.phone || '',
        countryCode: profileData?.countryCode || '+90'
      });
    }
  }, [profileData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      countryCode: country.phoneCode
    }));
    setCountryModalVisible(false);
  };

  const handleCountryPress = () => {
    setCountryModalVisible(true);
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
      activeOpacity={0.7}
    >
      <Image source={item.flag} style={styles.countryFlag} resizeMode="contain" />
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.countryCode}>{item.phoneCode}</Text>
    </TouchableOpacity>
  );

  const handleBackPress = async () => {
    if (!userId) {
      navigation.goBack();
      return;
    }

    // Eğer zaten kayıt yapılıyorsa tekrar basılamaz
    if (isSaving) {
      return;
    }

    setIsSaving(true);

    try {
      // displayName'i firstName ve lastName'den oluştur ve undefined'ı engelle
      const displayNameCandidate = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
      const displayName = displayNameCandidate || profileData?.displayName || null;

      // Firestore'a kaydet (undefined göndermemek için null'la normalize et)
      const updateData = {
        displayName: displayName,
        email: formData.email ?? '',
        phone: formData.phone || null,
        countryCode: formData.countryCode || null,
        updatedAt: new Date().toISOString()
      };

      const result = await updateUserProfile(userId, updateData);
      
      if (result.success) {
        // Context'i de güncelle
        updateProfileData({ ...profileData, ...updateData });
        console.log('Profile updated successfully');
        
        // Kısa bir bekleme sonrası geri git (kullanıcı feedback görmesi için)
        await new Promise(resolve => setTimeout(resolve, 300));
      } else {
        console.error('Profile update error:', result.error);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Loading Overlay */}
      {isSaving && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#58B658" />
            <Text style={styles.loadingText}>Kaydediliyor...</Text>
          </View>
        </View>
      )}

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
              countryCode={selectedCountry.phoneCode}
              countryFlag={selectedCountry.flag}
              onCountryPress={handleCountryPress}
              containerStyle={styles.inputContainer}
              hideSeparator={true}
            />
          </View>
        </View>
      </ScrollView>

      {/* Country Selection Modal */}
      <Modal
        visible={countryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setCountryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity
                onPress={() => setCountryModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={COUNTRIES}
              renderItem={renderCountryItem}
              keyExtractor={(item) => item.code}
              style={styles.countryList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfile;
