import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import TopNavigation from '../../../../../components/TopNavigation';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import { Colors } from '../../../../../constants/Colors';
import { styles } from './NewCard.styles';

const NewCard = ({ navigation }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: '',
    billingAddress: '',
    zipCode: ''
  });

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSaveCard = () => {
    // Save card logic here
    console.log('Saving card:', formData);
    // Navigate back to payment methods list
    navigation.goBack();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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
        title="Add New Card"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          {/* Card Number */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Card Number</Text>
            <Input
            hideSeparator={true}
              type="default"
              value={formData.cardNumber}
              onChangeText={(value) => handleInputChange('cardNumber', value)}
              placeholder="0000 0000 0000 0000"
              hasTrailingIcon={true}
              trailingIcon={require('../../../../../assets/images/icons/camera.png')}
              darkMode={false}
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* Expiry Date and CVV Row */}
          <View style={styles.rowContainer}>
            <View style={styles.halfFieldGroup}>
              <Text style={styles.fieldLabel}>Expiry Date</Text>
              <Input
              hideSeparator={true}
                type="default"
                value={formData.expiryDate}
                onChangeText={(value) => handleInputChange('expiryDate', value)}
                placeholder="MM/YY"
                darkMode={false}
                containerStyle={styles.inputContainer}
              />
            </View>
            
            <View style={styles.halfFieldGroup}>
              <Text style={styles.fieldLabel}>CVV</Text>
              <Input
              hideSeparator={true}
                type="default"
                value={formData.cvv}
                onChangeText={(value) => handleInputChange('cvv', value)}
                placeholder=""
                darkMode={false}
                containerStyle={styles.inputContainer}
              />
            </View>
          </View>

          {/* Holder Name */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Holder Name</Text>
            <Input
            hideSeparator={true}
              type="default"
              value={formData.holderName}
              onChangeText={(value) => handleInputChange('holderName', value)}
              placeholder="Name on card"
              darkMode={false}
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* Billing Address */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Billing Address</Text>
            <Input
            hideSeparator={true}
              type="default"
              value={formData.billingAddress}
              onChangeText={(value) => handleInputChange('billingAddress', value)}
              placeholder=""
              darkMode={false}
              containerStyle={styles.inputContainer}
            />
          </View>

          {/* ZIP Code */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>ZIP Code</Text>
            <Input
            hideSeparator={true}
              type="default"
              value={formData.zipCode}
              onChangeText={(value) => handleInputChange('zipCode', value)}
              placeholder=""
              darkMode={false}
              containerStyle={styles.inputContainer}
            />
          </View>
        </View>
        
        <Button
          text="Save Card"
          type="primary"
          buttonStyle="default"
          size="default"
          mode="light"
          onPress={handleSaveCard}
          hideArrow={true}
        />
      </ScrollView>
    </View>
  );
};

export default NewCard;
