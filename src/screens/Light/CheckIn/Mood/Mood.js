import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { scale } from 'react-native-size-matters';
import { styles } from './Mood.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import TopNavigation from '../../../../components/TopNavigation';
import Button from '../../../../components/Button';
import { useProfileData } from '../../../../hooks/useProfileData';
import { useTranslation } from '../../../../hooks/useTranslation';
import { useTodayCheckIn } from '../../../../hooks/useCheckIn';

const Mood = ({ navigation }) => {
  const { profileData } = useProfileData();
  const { t } = useTranslation();
  const { saveMood, isLoading } = useTodayCheckIn();
  const [selectedMood, setSelectedMood] = useState(null);
  const [saving, setSaving] = useState(false);

  // Mood seçenekleri - gerçek icon dosyaları
  const moods = [
    { id: 'very_sad', icon: require('../../../../assets/images/icons/smiley-crying-1.png'), label: 'Very Sad' },
    { id: 'sad', icon: require('../../../../assets/images/icons/sad-face--smiley-chat-message-emoji-sad-face-unsatisfied.png'), label: 'Sad' },
    { id: 'neutral', icon: require('../../../../assets/images/icons/straight-face--smiley-chat-message-indifferent-emoji-face-poker.png'), label: 'Neutral' },
    { id: 'happy', icon: require('../../../../assets/images/icons/happy-face--smiley-chat-message-smile-emoji-face-satisfied.png'), label: 'Happy' },
    { id: 'very_happy', icon: require('../../../../assets/images/icons/smiley-happy.png'), label: 'Very Happy' }
  ];

  const handleContinue = async () => {
    if (!selectedMood) {
      Alert.alert(
        t('mood.validation.title') || 'Warning',
        t('mood.validation.selectMood') || 'Please select a mood to continue'
      );
      return;
    }
    
    setSaving(true);
    
    // Save mood to backend
    const result = await saveMood({ moodType: selectedMood });
    
    if (result.success) {
      // Navigate to Craving screen with moodId
      navigation.navigate('Craving', {
        mood: selectedMood,
        moodId: result.moodId,
      });
    } else {
      Alert.alert(
        t('error.title') || 'Error',
        result.message || result.error?.message || 'Failed to save mood. Please try again.'
      );
    }
    
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.backgroundColor} />
      
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={() => navigation.goBack()}
        showCenterItem={true}
        centerType="title"
        title={t('mood.title')}
        showTrailingItem={false}
        backgroundColor="transparent"
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {t('mood.question', { name: profileData?.displayName || profileData?.emailPrefix || 'User' })}
          </Text>
        </View>

        {/* Arrow */}
        <View style={styles.arrowContainer}>
          <Image 
            source={require('../../../../assets/images/icons/bold-arrow-down.png')}
            style={styles.arrowIcon}
            resizeMode="contain"
          />
        </View>

        {/* Emotions */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.emotionsContainer}
          style={styles.emotionsScrollView}
          snapToInterval={scale(96) + scale(48)} // item width + gap
          decelerationRate="fast"
          bounces={false}
        >
          {moods.map((mood, index) => {
            const isSelected = selectedMood === mood.id;
            const isCenter = index === 2; // Middle one (neutral)

            return (
              <TouchableOpacity
                key={mood.id}
                style={[
                  styles.emotionItem,
                  isSelected && styles.emotionItemSelected,
                  isCenter && styles.emotionItemCenter
                ]}
                onPress={() => setSelectedMood(mood.id)}
                activeOpacity={0.7}
              >
                {isSelected && (
                  <>
                    <View style={styles.outerCircle} />
                    <View style={styles.innerCircle} />
                  </>
                )}
                <Image 
                  source={mood.icon}
                  style={[
                    styles.emotionIcon,
                    isSelected && styles.emotionIconSelected
                  ]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Continue Button */}
        <View style={styles.actionContainer}>
          <Button
            text={t('mood.continue')}
            type="primary"
            buttonStyle="default"
            size="default"
            mode="light"
            onPress={handleContinue}
            disabled={!selectedMood || saving || isLoading}
            hideArrow={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Mood;

