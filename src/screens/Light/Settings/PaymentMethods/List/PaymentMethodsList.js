import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import TopNavigation from '../../../../../components/TopNavigation';
import ListItem from '../../../../../components/ListItem';
import Button from '../../../../../components/Button';
import { Colors } from '../../../../../constants/Colors';
import { styles } from './PaymentMethodsList.styles';

const PaymentMethodsList = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('visa');

  const paymentMethods = [
    {
      id: 'visa',
      title: 'VISA',
      supportingText: 'Ending in ••••3456',
      leadingIcon: require("../../../../../assets/images/icons/visa-logo.png"),
      isSelected: selectedMethod === 'visa'
    },
    {
      id: 'mastercard',
      title: 'MasterCard',
      supportingText: 'Ending in ••••4444',
      leadingIcon: require("../../../../../assets/images/icons/Mastercard.png"),
      isSelected: selectedMethod === 'mastercard'
    },
    {
      id: 'applepay',
      title: 'Apple Pay',
      supportingText: '',
      leadingIcon: require("../../../../../assets/images/icons/ApplePay.png"),
      isSelected: selectedMethod === 'applepay'
    },
    {
      id: 'googlepay',
      title: 'Google Pay',
      supportingText: '',
      leadingIcon: require("../../../../../assets/images/icons/GooglePay.png"),
      isSelected: selectedMethod === 'googlepay'
    }
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAddNewCard = () => {
    navigation.navigate('NewCard');
  };

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
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
        title="Payment Methods"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.optionsContainer}>
          {paymentMethods.map((method) => (
            <ListItem
              key={method.id}
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={method.leadingIcon}
              leadingBackgroundColor={Colors.gray[0]}
              leadingSize={40}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText={method.title}
              hasSupportingText={!!method.supportingText}
              supportingText={method.supportingText}
              hasTrailingItem={true}
              trailingType="radio"
              radioState={method.isSelected ? 'active' : 'inactive'}
              onRadioChange={() => handlePaymentMethodSelect(method.id)}
              onPress={() => handlePaymentMethodSelect(method.id)}
              darkMode={false}
              containerStyle={styles.listItem}
            />
          ))}
        </View>
        
        <Button
          text="Add New Card"
          type="neutral"
          buttonStyle="default"
          size="default"
          mode="light"
          onPress={handleAddNewCard}
          hideArrow={false}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentMethodsList;
