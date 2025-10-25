import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TopNavigation from '../../../../components/TopNavigation';
import { Colors } from '../../../../constants/Colors';
import { styles } from './Terms.styles';

const Terms = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
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
        title="Terms of Use"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.effectiveDate}>Effective Date: July 25, 2025</Text>
        
        <View style={styles.textContainer}>
          <View style={styles.section}>
            <Text style={styles.paragraph}>
              These Terms of Use ("Terms") govern your access to and use of our application, services, and content provided by Unsmoke ("we", "our", "us"). By using the app, you agree to these Terms. Please read them carefully.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionNumber}>1. Eligibility</Text>
            <Text style={styles.paragraph}>
              You must be at least 13 years old (or older if required by your local laws) to use the app. If you're using the app on behalf of an organization, you must have the authority to bind that organization.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionNumber}>2. Use of Services</Text>
            <Text style={styles.paragraph}>
              You agree to use the app only for lawful purposes. You must not use the app to generate, upload, or share content that is illegal, harmful, offensive, or violates the rights of others.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionNumber}>3. User Content & Privacy</Text>
            <Text style={styles.paragraph}>
              You retain ownership of the content you create. By using the app, you grant us a license to store and process your data as outlined in our Privacy Policy.
            </Text>
            <Text style={styles.paragraph}>
              We respect your privacy. Refer to the Privacy Policy for details on how your information and AI interactions are handled.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionNumber}>4. Voice & Media Generation</Text>
            <Text style={styles.paragraph}>
              By using features like voice cloning or media generation, you confirm you have the rights to use any materials submitted (e.g., images, voice samples), and you agree not to impersonate or misuse anyone's identity.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionNumber}>5. Subscriptions & Payments</Text>
            <Text style={styles.paragraph}>
              Some features may require a paid subscription. All payments are final unless otherwise stated in our refund policy. We reserve the right to change pricing or features with notice.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Terms;
