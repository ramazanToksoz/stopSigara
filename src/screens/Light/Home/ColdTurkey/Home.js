import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './Home.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import { Svg, Circle } from 'react-native-svg';
import CardPost from '../../../../components/CardPost';
import ListItem from '../../../../components/ListItem';
import TopNavigation from '../../../../components/TopNavigation';
import { useProfileData } from '../../../../hooks/useProfileData';
import { useTrackingData } from '../../../../hooks/useTrackingData';
import { usePosts } from '../../../../hooks/useCommunity';
import DailyCheckIn from '../../../../components/DailyCheckIn';
import Loading from '../../../../components/Loading';
import { useTranslation } from '../../../../hooks/useTranslation';

const ColdTurkeyHome = ({ navigation }) => {
  const { profileData, isProfileLoading: loading } = useProfileData();
  const { progressStats } = useTrackingData();
  const { t } = useTranslation();
  const publicFeedFilter = useMemo(() => ({ visibility: 'public' }), []);
  const { posts, isLoading: isPostsLoading } = usePosts(publicFeedFilter, 10);
  
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
  
  
  
  const handleCheckInComplete = () => {
    // Check-in tamamlandığında tracking verilerini yenile
    console.log('Check-in completed, refreshing tracking data');
  };

  if (loading) {
    return <Loading type="fullscreen" />;
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
              greetingText={t('home.greeting') + ','}
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
              <Text style={styles.mainTitle}>{daysQuit} {t('home.daysQuit')}</Text>
              <Text style={styles.subtitle}>
                {daysUntilMilestone > 0 
                  ? t('home.daysUntilMilestone', { days: daysUntilMilestone })
                  : t('home.greatProgress')
                }
              </Text>
            </View>
            
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{avoidedCigarettes}</Text>
                <Text style={styles.metricLabel}>{t('home.avoided')}</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>₺{savings}</Text>
                <Text style={styles.metricLabel}>{t('home.saved')}</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{daysQuit}</Text>
                <Text style={styles.metricLabel}>{t('home.days')}</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.content}>
            <View style={styles.cardMission}>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{t('home.dailyCheckIn')}</Text>
                <Text style={styles.cardSubtitle}>{t('home.dailyCheckInSubtitle')}</Text>
              </View>
              <DailyCheckIn onCheckInComplete={handleCheckInComplete} />
            </View>

            <View style={styles.cravingSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>{t('home.cravingAssistance')}</Text>
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
                  <Text style={styles.assistanceLabel}>{t('home.aiChat')}</Text>
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
                  <Text style={styles.assistanceLabel}>{t('home.miniGame')}</Text>
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
                  <Text style={styles.assistanceLabel}>{t('home.breathing')}</Text>
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
                  <Text style={styles.assistanceLabel}>{t('home.other')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.milestoneSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>{t('home.nextMilestone')}</Text>
                </View>
              </View>
              
              <ListItem
                type="default"
                hasLeadingItem={true}
                leadingType="improvement"
                leadingIcon={require('../../../../assets/images/icons/kas.png')}
                leadingSize={60}
                leadingPercent="10%"
                leadingTime={t('home.milestoneTitle')}
                leadingCompleted={false}
                titleText={t('home.milestoneTitle')}
                hasSupportingText={true}
                supportingText={t('home.milestoneDescription')}
                hasTrailingItem={true}
                trailingType="more"
                onPress={() => console.log('Milestone pressed')}
              />
            </View>

                <View style={styles.communitySection}>
              <View style={styles.sectionHeading}>
                    <View style={styles.sectionMain}>
                      <Text style={styles.sectionTitle}>{t('home.communityFeed')}</Text>
                    </View>
                    <TouchableOpacity style={styles.viewAllButton}>
                      <Text style={styles.viewAllText}>{t('home.viewAll')}</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/arrow-right.png')} 
                        style={[styles.arrowIcon, { tintColor: Colors.brand[60]}]}
                      />
                    </TouchableOpacity>
                  </View>
              {
                isPostsLoading ? (
                  <Loading />
                ) : (
                  (posts || []).map((post) => (
                    <CardPost
                      key={post.id}
                      type={post.type || 'Text'}
                      name={post.authorName || 'User'}
                      time={''}
                      avatar={post.authorAvatar ? { uri: post.authorAvatar } : undefined}
                      text={post.content || ''}
                      likes={String(post.likesCount || 0)}
                      comments={String(post.commentsCount || 0)}
                      onLike={() => {}}
                      onComment={() => {}}
                      onSave={() => {}}
                      onMore={() => {}}
                    />
                  ))
                )
              }
                </View>
           </View>
         </ScrollView>
     </View>
   )
 }

export default ColdTurkeyHome;