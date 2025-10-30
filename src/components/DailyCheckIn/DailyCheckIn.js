import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './DailyCheckIn.styles';
import { useTranslation } from '../../hooks/useTranslation';

const DailyCheckIn = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <TouchableOpacity 
      style={styles.checkInButton}
      onPress={() => navigation.navigate('Mood')}
    >
      <Text style={styles.buttonText}>{t('home.dailyCheckInButton')}</Text>
    </TouchableOpacity>
  );
};

export default DailyCheckIn;
