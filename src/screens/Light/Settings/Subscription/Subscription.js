import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import TopNavigation from '../../../../components/TopNavigation';
import Button from '../../../../components/Button';
import { Colors } from '../../../../constants/Colors';
import { styles } from './Subscription.styles';

const Subscription = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleManagePlan = () => {
    // Navigate to manage plan or show options
    console.log('Manage Plan pressed');
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
        title="Subscription"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Current Plan Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Plan</Text>
          <View style={styles.planCard}>
            <View style={styles.planInfo}>
              <View style={styles.planHeader}>
                <Image 
                  source={require('../../../../assets/images/icons/crown.png')}
                  style={styles.crownIcon}
                  resizeMode="contain"
                />
                <Text style={styles.planName}>PLUS</Text>
              </View>
              <Text style={styles.planEndDate}>Ends in 01/12/2025</Text>
            </View>
            <TouchableOpacity 
              style={styles.manageButton}
              onPress={handleManagePlan}
              activeOpacity={0.7}
            >
              <Text style={styles.manageButtonText}>Manage Plan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Next Billing Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next Billing</Text>
          <View style={styles.billingCard}>
            <View style={styles.billingItem}>
              <Text style={styles.billingLabel}>Date</Text>
              <Text style={styles.billingValue}>08/24/2025</Text>
            </View>
            <View style={styles.billingItem}>
              <Text style={styles.billingLabel}>Payment Method</Text>
              <View style={styles.paymentMethod}>
                <Image 
                  source={require('../../../../assets/images/icons/card-tick.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
                <Text style={styles.paymentMethodText}>VISA</Text>
              </View>
            </View>
            <View style={styles.billingItem}>
              <Text style={styles.billingLabel}>Total</Text>
              <Text style={styles.billingValue}>$9.99</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Subscription;
