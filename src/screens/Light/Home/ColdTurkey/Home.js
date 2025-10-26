import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './Home.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import { Svg, Circle } from 'react-native-svg';
import CardPost from '../../../../components/CardPost';
import ListItem from '../../../../components/ListItem';
import TopNavigation from '../../../../components/TopNavigation';
import { useProfileData } from '../../../../hooks/useProfileData';
import { useTrackingData } from '../../../../hooks/useTrackingData';
import DailyCheckIn from '../../../../components/DailyCheckIn';

const ColdTurkeyHome = ({ navigation }) => {
  const { profileData, isProfileLoading: loading } = useProfileData();
  const { progressStats } = useTrackingData();
  
  // Cold Turkey için gerçek veriler (progressStats varsa onu kullan)
  const quitDate = progressStats?.quitDate 
    ? new Date(progressStats.quitDate) 
    : (profileData?.onboardingData?.quitDate ? new Date(profileData.onboardingData.quitDate) : new Date());
  
  const today = new Date();
  const daysQuit = progressStats?.daysQuit || Math.floor((today - quitDate) / (1000 * 60 * 60 * 24));
  
  // Günde kaç sigara içiyordu (onboarding'den alınıyor)
  const dailyCigarettes = progressStats?.dailyCigarettes || profileData?.onboardingData?.dailyCigarettes || 20;
  
  // Toplam kaç sigara önlendi (tracking'den geliyorsa onu kullan)
  const avoidedCigarettes = progressStats?.totalAvoided || (daysQuit * dailyCigarettes);
  
  // Tasarruf hesapla (sigara başına 5 TL)
  const savings = avoidedCigarettes * 5;
  
  // Next milestone (7 gün)
  const nextMilestone = 7;
  const daysUntilMilestone = Math.max(0, nextMilestone - daysQuit);
  
  console.log('ColdTurkeyHome', { profileData, progressStats, daysQuit, avoidedCigarettes, savings });
  
  const handleCheckInComplete = () => {
    // Check-in tamamlandığında tracking verilerini yenile
    console.log('Check-in completed, refreshing tracking data');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.brand[60]} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.topNavWrapper}>
            <TopNavigation
              leadingType="avatar"
              avatarSource={
                typeof profileData?.photoURL === 'string'
                  ? { uri: profileData.photoURL }
                  : require('../../../../assets/images/icons/Avatar.png')
              }
              greetingText="Good morning,"
              userName={profileData?.displayName || profileData?.emailPrefix || "User"}
              onLeadingPress={() => navigation.navigate('Profile')}
              trailingType="notification"
              notificationIcon={require('../../../../assets/images/icons/TrailingItem.png')}
              hasNotificationIndicator={true}
              onTrailingPress={() => navigation.navigate('Notifications')}
              backgroundColor="transparent"
              darkMode={true}
            />
          </View>
          
          <View style={styles.mainContent}>
            <View style={styles.topContent}>
              <Text style={styles.mainTitle}>{daysQuit} Days</Text>
              <Text style={styles.subtitle}>
                {daysUntilMilestone > 0 
                  ? `Just ${daysUntilMilestone} days away from better energy and deeper sleep.`
                  : 'You\'re making great progress!'
                }
              </Text>
            </View>
            
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{avoidedCigarettes}</Text>
                <Text style={styles.metricLabel}>Avoided</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>${savings}</Text>
                <Text style={styles.metricLabel}>Saved</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{daysQuit}</Text>
                <Text style={styles.metricLabel}>Days</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.content}>
            <View style={styles.cardMission}>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Daily Check-In</Text>
                <Text style={styles.cardSubtitle}>Tell us how you're feeling today</Text>
              </View>
              <DailyCheckIn onCheckInComplete={handleCheckInComplete} />
            </View>

            <View style={styles.cravingSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>Craving Assistance</Text>
                </View>
              </View>
              
              <View style={styles.assistanceList}>
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/message.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>AI Chat</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/game.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>Mini Game</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/emoji-normal.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>Breathing</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/category-2.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>Other</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.milestoneSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>Next Milestone</Text>
                </View>
              </View>
              
              <ListItem
                type="default"
                hasLeadingItem={true}
                leadingType="improvement"
                leadingIcon={require('../../../../assets/images/icons/kas.png')}
                leadingSize={60}
                leadingPercent="10%"
                leadingTime="7 Days"
                leadingCompleted={false}
                titleText="7 Days"
                hasSupportingText={true}
                supportingText="Eeenergy levels rise, your sense of taste improves, and sleep becomes more restful."
                hasTrailingItem={true}
                trailingType="more"
                onPress={() => console.log('Milestone pressed')}
              />
            </View>

                <View style={styles.communitySection}>
                  <View style={styles.sectionHeading}>
                    <View style={styles.sectionMain}>
                      <Text style={styles.sectionTitle}>Community Feed</Text>
                    </View>
                    <TouchableOpacity style={styles.viewAllButton}>
                      <Text style={styles.viewAllText}>View all</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/arrow-right.png')} 
                        style={[styles.arrowIcon, { tintColor: Colors.brand[60]}]}
                      />
                    </TouchableOpacity>
                  </View>
                  
                  <CardPost
                    type="Image"
                    name="Sarah"
                    time="14m ago"
                    text="One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud."
                    likes="1.4K"
                    comments="128"
                    onLike={() => console.log('Post liked')}
                    onComment={() => console.log('Post commented')}
                    onSave={() => console.log('Post saved')}
                    onMore={() => console.log('More options')}
                  />
                  
                  <CardPost
                    type="Text"
                    name="Mike"
                    time="1h ago"
                    text="Day 3 and feeling stronger! The cravings are real but I'm pushing through. Thanks for all the support! 💪"
                    likes="892"
                    comments="45"
                    onLike={() => console.log('Post liked')}
                    onComment={() => console.log('Post commented')}
                    onSave={() => console.log('Post saved')}
                    onMore={() => console.log('More options')}
                  />
                  
                  <CardPost
                    type="Link"
                    name="Emma"
                    time="2h ago"
                    text="Found this amazing article about the benefits of quitting smoking. Really motivating!"
                    likes="2.1K"
                    comments="156"
                    onLike={() => console.log('Post liked')}
                    onComment={() => console.log('Post commented')}
                    onSave={() => console.log('Post saved')}
                    onMore={() => console.log('More options')}
                  />
                </View>
           </View>
         </ScrollView>
     </View>
   )
 }

export default ColdTurkeyHome;