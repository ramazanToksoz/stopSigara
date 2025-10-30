import { View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './ProgressReward.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import Button from '../../../../components/Button';
import { useTranslation } from '../../../../hooks/useTranslation';
import { useTodayCheckIn } from '../../../../hooks/useCheckIn';
import { getToday, getWeekRange, calculateDaysBetween } from '../../../../utils/dateHelpers';
import { useProfileData } from '../../../../hooks/useProfileData';

const ProgressReward = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { markReward, checkIn } = useTodayCheckIn();
  const { profileData } = useProfileData();
  
  // Route parametrelerinden gelen veriler
  const { checkInId, smokedCount, avoidedCount, type } = route.params || {};
  
  // Mark reward as shown when component mounts
  useEffect(() => {
    if (checkInId && !checkIn?.rewardShown) {
      markReward(checkInId);
    }
  }, [checkInId, checkIn?.rewardShown, markReward]);

  // Calculate days smoke-free from quit date
  const quitDate = profileData?.onboardingData?.quitDate 
    ? new Date(profileData.onboardingData.quitDate) 
    : new Date();
  const daysSmokeFree = Math.max(0, calculateDaysBetween(quitDate, getToday()));
  
  // Calculate cigarettes avoided (use route params or default)
  const cigarettesAvoided = avoidedCount || 0;
  
  // Week data - this would ideally come from getCheckInHistory, but for now use simple logic
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Simple week data - in a real implementation, fetch from backend
  const weekData = weekDays.map((day, index) => {
    // Today is completed
    if (index === dayOfWeek - 1 || (dayOfWeek === 0 && index === 6)) {
      return { day, completed: true };
    }
    // Past days might be completed (simplified)
    if (index < dayOfWeek - 1 || (dayOfWeek === 0 && index < 6)) {
      return { day, completed: Math.random() > 0.3 }; // Random for demo
    }
    return { day, completed: false };
  });

  const handleDone = () => {
    // Check-in tamamlandı, Home ekranına dön
    // Tüm check-in stack'ini temizleyip Home'a git
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.backgroundColor} />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Card */}
        <View style={styles.card}>
          {/* Decorative Background - Gradient Shapes */}
          <View style={styles.decorativeBackground}>
            {/* Top Left Gradient */}
            <LinearGradient
              colors={['#9BEC45', '#F5C343', '#FA556D']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientShape1}
            />
            
            {/* Top Right Gradient */}
            <LinearGradient
              colors={['#9BEC45', '#F5C343']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientShape2}
            />
            
            {/* Bottom Left Gradient */}
            <LinearGradient
              colors={['#FA556D', '#F5C343', '#9BEC45']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientShape3}
            />
            
            {/* Center Right Gradient */}
            <LinearGradient
              colors={['#9BEC45', '#F5C343']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientShape4}
            />
            
            {/* Decorative Icons */}
            <View style={styles.decorativeIcons}>
              <Image
                source={require('../../../../assets/images/icons/star.png')}
                style={styles.decorativeStar1}
                resizeMode="contain"
              />
              <Image
                source={require('../../../../assets/images/icons/star2.png')}
                style={styles.decorativeStar2}
                resizeMode="contain"
              />
              <Image
                source={require('../../../../assets/images/icons/heart.png')}
                style={styles.decorativeHeart1}
                resizeMode="contain"
              />
              <Image
                source={require('../../../../assets/images/icons/crown.png')}
                style={styles.decorativeCrown}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Days Smoke Free */}
            <View style={styles.daysContainer}>
              {/* Celebration Icons */}
              <View style={styles.celebrationIcons}>
                <Image
                  source={require('../../../../assets/images/icons/star.png')}
                  style={styles.celebrationStarLeft}
                  resizeMode="contain"
                />
                <Image
                  source={require('../../../../assets/images/icons/star2.png')}
                  style={styles.celebrationStarRight}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.daysNumber}>{daysSmokeFree}</Text>
              <Text style={styles.daysLabel}>
                {t('progressReward.daysSmokeFree') || 'days smoke-free'}
              </Text>
            </View>

            {/* Encouragement Message */}
            <Text style={styles.encouragementText}>
              {t('progressReward.encouragement') || "You're building a strong streak!"}
            </Text>

            {/* Week Calendar */}
            <View style={styles.weekContainer}>
              <View style={styles.weekDays}>
                {weekData.map((item, index) => (
                  <View key={index} style={styles.dayItem}>
                    <Text style={styles.dayLabel}>{item.day}</Text>
                    {item.completed === true ? (
                      <Image
                        source={require('../../../../assets/images/icons/tick-circle.png')}
                        style={styles.dayIcon}
                        resizeMode="contain"
                      />
                    ) : item.completed === false && index === 0 ? (
                      <Image
                        source={require('../../../../assets/images/icons/close-circle.png')}
                        style={styles.dayIcon}
                        resizeMode="contain"
                      />
                    ) : (
                      <View style={styles.emptyCircle} />
                    )}
                  </View>
                ))}
              </View>

              {/* Summary Text */}
              <Text style={styles.summaryText}>
                {t('progressReward.summary', { count: cigarettesAvoided }) || 
                  `Even with urges, you've avoided ${cigarettesAvoided} cigarettes this week.`}
              </Text>
            </View>

            {/* Done Button */}
            <View style={styles.buttonContainer}>
              <Button
                text={t('progressReward.done') || 'Done'}
                type="primary"
                buttonStyle="default"
                size="default"
                mode="light"
                onPress={handleDone}
                hideArrow={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgressReward;

