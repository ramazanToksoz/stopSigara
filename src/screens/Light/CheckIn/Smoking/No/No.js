import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './No.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../../constants/Colors';
import TopNavigation from '../../../../../components/TopNavigation';
import Button from '../../../../../components/Button';
import Slider from '../../../../../components/Slider';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { useTodayCheckIn } from '../../../../../hooks/useCheckIn';
import { updateCravingResolved } from '../../../../../services/checkInService';

const No = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { saveSmokingRecord, finishCheckIn, isLoading } = useTodayCheckIn();
  const [avoidedCount, setAvoidedCount] = useState(10);
  const [saving, setSaving] = useState(false);
  
  // Get IDs from previous screens
  const { moodId, cravingId } = route.params || {};

  const handleSliderChange = (value) => {
    setAvoidedCount(value);
  };

  const handleContinue = async () => {
    setSaving(true);
    
    // Mark craving as resolved first
    if (cravingId) {
      await updateCravingResolved(cravingId, true);
    }
    
    // Save smoking record (with avoided count)
    const recordResult = await saveSmokingRecord({
      didSmoke: false,
      cigarettesAvoided: avoidedCount,
      cravingId,
    });
    
    if (!recordResult.success) {
      Alert.alert(
        t('error.title') || 'Error',
        recordResult.message || recordResult.error?.message || 'Failed to save smoking record.'
      );
      setSaving(false);
      return;
    }
    
    // Complete check-in by linking all entries
    const checkInResult = await finishCheckIn({
      moodId,
      cravingId,
      smokingRecordId: recordResult.recordId,
    });
    
    if (checkInResult.success) {
      // Navigate to ProgressReward
      navigation.navigate('ProgressReward', {
        checkInId: checkInResult.checkInId,
        avoidedCount,
        type: 'no',
      });
    } else {
      Alert.alert(
        t('error.title') || 'Error',
        checkInResult.message || checkInResult.error?.message || 'Failed to complete check-in.'
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
        title={t('smokingNo.title') || 'Check-In'}
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
            {t('smokingNo.question') || 'How many cigarettes did you avoid today?'}
          </Text>
        </View>

        {/* Answer Section */}
        <View style={styles.answerContainer}>
          {/* Value Display */}
          <Text style={styles.valueText}>{avoidedCount}</Text>

          {/* Slider */}
          <View style={styles.sliderContainer}>
            <Slider
              minValue={1}
              maxValue={20}
              initialValue={10}
              step={1}
              onValueChange={handleSliderChange}
              showTicks={true}
              trackGradient={['#9BEC45', '#F5C343', '#FA556D']}
              containerStyle={styles.slider}
            />
          </View>
        </View>

        {/* Continue Button */}
        <View style={styles.actionContainer}>
          <Button
            text={t('smokingNo.continue') || 'Continue'}
            type="primary"
            buttonStyle="default"
            size="default"
            mode="light"
            onPress={handleContinue}
            disabled={saving || isLoading}
            hideArrow={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default No;

