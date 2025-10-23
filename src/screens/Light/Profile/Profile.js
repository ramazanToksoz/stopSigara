import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,StatusBar } from 'react-native';
import { styles } from './Profile.styles';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

const Profile = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEditPress = () => {
    // Navigate to edit profile screen
    console.log('Edit profile pressed');
  };

  const handleCameraPress = () => {
    // Open camera for profile photo
    console.log('Camera pressed');
  };

  const handleDeletePress = () => {
    // Delete profile photo
    console.log('Delete pressed');
  };

  const handleViewAllAchievements = () => {
    navigation.navigate('Achievements');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showTrailingItem={true}
        trailingType="icon"
        trailingIcon="edit-2"
        onTrailingPress={handleEditPress}
        darkMode={false}
        backgroundColor="transparent"
      />
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../../assets/images/avatars/Avatarprofile.png')}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={styles.avatarButtons}>
              <TouchableOpacity 
                style={styles.avatarButton}
                onPress={handleDeletePress}
                activeOpacity={0.7}
              >
                <Image 
                  source={require('../../../assets/images/icons/trash.png')}
                  style={styles.avatarButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.avatarButton}
                onPress={handleCameraPress}
                activeOpacity={0.7}
              >
                <Image 
                  source={require('../../../assets/images/icons/camera.png')}
                  style={styles.avatarButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Plus Badge */}
          <View style={styles.plusBadge}>
            <Image 
              source={require('../../../assets/images/icons/crown.png')}
              style={styles.plusIcon}
              resizeMode="contain"
            />
            <Text style={styles.plusText}>PLUS</Text>
          </View>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Peter Brian</Text>
          <Text style={styles.memberSince}>Member since August 2025</Text>
        </View>

        {/* Metrics Card */}
        <View style={styles.metricsCard}>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>23</Text>
            <Text style={styles.metricLabel}>Achievements</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>7</Text>
            <Text style={styles.metricLabel}>Days Streak</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>45</Text>
            <Text style={styles.metricLabel}>Cigarettes Avoided</Text>
          </View>
        </View>

        {/* Achievements Section */}
        <View style={styles.achievementsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Achievements</Text>
              <Text style={styles.sectionSubtitle}>8/15 Unlocked</Text>
            </View>
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={handleViewAllAchievements}
              activeOpacity={0.7}
            >
              <Text style={styles.viewAllText}>View all</Text>
              <Image 
                source={require('../../../assets/images/icons/arrow-right.png')}
                style={styles.viewAllIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.achievementsList}>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/check-in.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/Crusher.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/Mindful.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/ASeeker.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Community Section */}
        <View style={styles.communitySection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Community</Text>
            </View>
          </View>
          
          <View style={styles.communityMetrics}>
            <View style={styles.communityItem}>
              <Image 
                source={require('../../../assets/images/icons/document.png')}
                style={styles.communityIcon}
                resizeMode="contain"
              />
              <View style={styles.communityTextContainer}>
                <Text style={styles.communityValue}>32</Text>
                <Text style={styles.communityLabel}>Posts</Text>
              </View>
            </View>
            <View style={styles.communityItem}>
              <Image 
                source={require('../../../assets/images/icons/heart.png')}
                style={styles.communityIcon}
                resizeMode="contain"
              />
              <View style={styles.communityTextContainer}>
                <Text style={styles.communityValue}>122</Text>
                <Text style={styles.communityLabel}>Likes</Text>
              </View>
            </View>
            <View style={styles.communityItem}>
              <Image 
                source={require('../../../assets/images/icons/people.png')}
                style={styles.communityIcon}
                resizeMode="contain"
              />
              <View style={styles.communityTextContainer}>
                <Text style={styles.communityValue}>743</Text>
                <Text style={styles.communityLabel}>Followers</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
