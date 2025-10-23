import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './AchievementDetail.styles';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

const AchievementDetail = ({ navigation, route }) => {
  const { achievement } = route.params || { 
    achievement: {
      id: 1,
      title: 'Mindful',
      description: 'Completed your first meditation or breathing session.',
      earnedDate: '04 August 2025',
      unlocked: true,
      icon: 'Mindful'
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSharePress = () => {
    // Implement share functionality
    console.log('Share achievement:', achievement.title);
  };

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const getIconSource = () => {
    if (achievement.unlocked) {
      return require('../../../assets/images/icons/Mindful.png');
    } else {
      return require('../../../assets/images/icons/lock.png');
    }
  };

  return (
    <View style={styles.container}>
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={false}
        showTrailingItem={false}
        darkMode={false}
        backgroundColor="transparent"
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Top Section */}
          <View style={styles.topSection}>
            {/* Achievement Badge */}
            <View style={styles.achievementSection}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={getIconSource()}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Earned Date */}
            <View style={styles.earnedDateSection}>
              <View style={styles.earnedDateBadge}>
                <Image 
                  source={require('../../../assets/images/icons/calendar.png')}
                  style={styles.calendarIcon}
                  resizeMode="contain"
                />
                <Text style={styles.earnedDateText}>
                  Earned {achievement.earnedDate}
                </Text>
              </View>
            </View>

            {/* Achievement Info */}
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>
                {achievement.title}
              </Text>
              <Text style={styles.achievementDescription}>
                {achievement.description}
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.shareButton}
              onPress={handleSharePress}
              activeOpacity={0.7}
            >
              <Image 
                source={require('../../../assets/images/icons/share.png')}
                style={styles.shareIcon}
                resizeMode="contain"
              />
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackButtonPress}
              activeOpacity={0.7}
            >
              <Image 
                source={require('../../../assets/images/icons/arrow-left.png')}
                style={styles.backIcon}
                resizeMode="contain"
              />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AchievementDetail;
