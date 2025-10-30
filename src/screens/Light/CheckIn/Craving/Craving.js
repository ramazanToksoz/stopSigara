import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Craving.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import TopNavigation from '../../../../components/TopNavigation';
import Button from '../../../../components/Button';
import Slider from '../../../../components/Slider';
import { useTranslation } from '../../../../hooks/useTranslation';
import { useTodayCheckIn } from '../../../../hooks/useCheckIn';

const Craving = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { saveCraving, isLoading } = useTodayCheckIn();
  const [cravingValue, setCravingValue] = useState(5);
  const [selectedTags, setSelectedTags] = useState([]);
  const [saving, setSaving] = useState(false);
  
  // Get moodId from previous screen
  const { moodId } = route.params || {};

  // Tag seçenekleri
  const tags = ['afterMeal', 'stress', 'coffee', 'social'];
 

  const handleTagPress = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleContinue = async () => {
    setSaving(true);
    
    // Save craving to backend
    const result = await saveCraving({
      intensity: cravingValue,
      tags: selectedTags,
      resolved: false,
    });
    
    if (result.success) {
      // Navigate to SmokingQuestion with IDs
      navigation.navigate('SmokingQuestion', {
        moodId,
        cravingId: result.cravingId,
        cravingValue,
        selectedTags,
      });
    } else {
      Alert.alert(
        t('error.title') || 'Error',
        result.message || result.error?.message || 'Failed to save craving. Please try again.'
      );
    }
    
    setSaving(false);
  };

  const handleSliderChange = (value) => {
    setCravingValue(value);
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
        title={t('craving.title') || 'Check-In'}
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
            {t('craving.question') || 'How strong are your cravings today?'}
          </Text>
        </View>

        {/* Answer Section */}
        <View style={styles.answerContainer}>
          {/* Value Display */}
          <Text style={styles.valueText}>{cravingValue}</Text>

          {/* Slider */}
          <View style={styles.sliderContainer}>
            <Slider
              minValue={0}
              maxValue={10}
              initialValue={5}
              step={1}
              onValueChange={handleSliderChange}
              showTicks={true}
              trackGradient={['#9BEC45', '#F5C343', '#FA556D']}
              containerStyle={styles.slider}
            />
          </View>

          {/* Tags */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tagsContainer}
            style={styles.tagsScrollView}
          >
            {tags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <Button
                  key={tag}
                  text={t(`craving.tags.${tag}`)}
                  type={isSelected ? 'primary' : 'neutral'}
                  buttonStyle="chip"
                  size="sm"
                  mode="light"
                  onPress={() => handleTagPress(tag)}
                  hideArrow={true}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Continue Button */}
        <View style={styles.actionContainer}>
          <Button
            text={t('craving.continue') || 'Continue'}
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

export default Craving;

