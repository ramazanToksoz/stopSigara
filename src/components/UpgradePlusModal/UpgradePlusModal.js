import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { styles } from './UpgradePlusModal.styles';
import TopNavigation from '../TopNavigation';
import ListItem from '../ListItem';

const UpgradePlusModal = ({ visible, onClose, onStartTrial, navigation }) => {
  console.log('UpgradePlusModal - visible:', visible);
  
  const handleStartTrial = () => {
    onClose();
    if (navigation) {
      navigation.navigate('CongratsPLUS');
    }
  };

  const features = [
    {
      id: 1,
      title: 'Personalized AI Coaching',
      description: 'Get adaptive daily guidance and craving predictions tailored just for you.',
      icon: require('../../assets/images/icons/emoji-happy.png'),
    },
    {
      id: 2,
      title: 'Unlimited Craving Toolkit',
      description: 'Access the full set of tools — breathing, games, meditations, and more — whenever you need them.',
      icon: require('../../assets/images/icons/bubble.png'),
    },
    {
      id: 3,
      title: 'Advanced Progress Insights',
      description: 'See deeper stats: money saved, cigarettes avoided, and upcoming health milestones.',
      icon: require('../../assets/images/icons/document.png'),
    },
    {
      id: 4,
      title: 'Exclusive Achievements & Rewards',
      description: 'Unlock premium badges and celebrate milestones with special animations.',
      icon: require('../../assets/images/icons/crown.png'),
    },
    {
      id: 5,
      title: 'Priority & Community Support',
      description: 'Connect with expert-backed resources and supportive community tips.',
      icon: require('../../assets/images/icons/star.png'),
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <TouchableOpacity 
          style={styles.backdropTouchable}
          activeOpacity={1}
          onPress={onClose}
        >
          <TouchableOpacity 
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Top Navigation */}
            <TopNavigation
              showLeadingItem={false}
              showCenterItem={false}
              showTrailingItem={true}
              trailingType="icon"
              trailingIcon="close-circle2"
              onTrailingPress={onClose}
              darkMode={false}
              backgroundColor="#FFFFFF"
            />

            {/* Content */}
            <ScrollView 
              style={styles.content} 
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              {/* Header */}
              <View style={styles.header}>
                <View style={styles.logoContainer}>
                  <View style={styles.logoBackground}>
                    <Image
                      source={require('../../assets/images/icons/logo.png')}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                
                <View style={styles.headerText}>
                  <Text style={styles.headerTitle}>Unlock Your Smoke-Free Journey</Text>
                  <Text style={styles.headerSubtitle}>
                    Get full support from your AI coach, personalized tools, and science-backed features to stay on track — every step of the way.
                  </Text>
                </View>
              </View>

              {/* Features List */}
              <View style={styles.featuresSection}>
                <Text style={styles.featuresTitle}>What's included</Text>
                
                <View style={styles.featuresList}>
                  {features.map((feature, index) => (
                    <View key={feature.id}>
                      <ListItem
                        type="default"
                        leadingType="icon"
                        leadingIcon={feature.icon}
                        leadingBackgroundColor="#58B658"
                        leadingSize={40}
                        leadingIconSize={20}
                        titleText={feature.title}
                        hasSupportingText={true}
                        supportingText={feature.description}
                        hasTrailingItem={false}
                        backgroundColor="#FFFFFF"
                        containerStyle={styles.featureItem}
                      />
                      {index < features.length - 1 && <View style={styles.divider} />}
                    </View>
                  ))}
                </View>
              </View>

              {/* Bottom Section */}
              <View style={styles.bottomSection}>
                <View style={styles.pricingContainer}>
                  <Text style={styles.priceText}>$9.99/month</Text>
                  
                  <TouchableOpacity 
                    style={styles.startTrialButton}
                    onPress={handleStartTrial}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.startTrialText}>Start 7-day free trial</Text>
                    <Image
                      source={require('../../assets/images/icons/arrow-right2.png')}
                      style={styles.arrowIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  
                  <Text style={styles.trialText}>
                    After your trial ends, you'll be charged $9.99/month starting August 24, 2025. You can always cancel before then.
                  </Text>
                </View>
                
                {/* Home Indicator */}
                
              </View>
            </ScrollView>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default UpgradePlusModal;