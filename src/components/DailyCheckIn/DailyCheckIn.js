import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { styles } from './DailyCheckIn.styles';
import Input from '../Input';
import Button from '../Button';
import { createDailyTracking } from '../../services/trackingService';
import { auth } from '../../../firebaseConfig';

const DailyCheckIn = ({ onCheckInComplete }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cravings, setCravings] = useState('');
  const [mood, setMood] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleCheckIn = async () => {
    if (!auth.currentUser) {
      Alert.alert('Hata', 'Kullanıcı girişi yapmamış.');
      return;
    }

    try {
      const trackingData = {
        date: new Date().toISOString().split('T')[0],
        cravingsCount: parseInt(cravings) || 0,
        mood,
        difficulty,
        notes: '',
        timestamp: new Date().toISOString()
      };

      const result = await createDailyTracking(auth.currentUser.uid, trackingData);

      if (result.success) {
        Alert.alert('Başarılı', 'Günlük check-in kaydedildi!');
        setModalVisible(false);
        setCravings('');
        setMood('');
        setDifficulty('');
        
        if (onCheckInComplete) {
          onCheckInComplete();
        }
      } else {
        Alert.alert('Hata', 'Check-in kaydedilemedi. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Check-in error:', error);
      Alert.alert('Hata', 'Beklenmedik bir hata oluştu.');
    }
  };

  return (
    <>
      <TouchableOpacity 
        style={styles.checkInButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Check-in</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Günlük Check-In</Text>
            <Text style={styles.modalSubtitle}>Bugün nasıl geçti?</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Aşerme Sayısı</Text>
              <Input
                type="default"
                placeholder="Bugün kaç kez sigara isteği geldi?"
                value={cravings}
                onChangeText={setCravings}
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ruh Hali</Text>
              <Input
                type="default"
                placeholder="Bugün kendinizi nasıl hissediyorsunuz?"
                value={mood}
                onChangeText={setMood}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Zorluk Seviyesi</Text>
              <Input
                type="default"
                placeholder="1-5 arası değerlendirin"
                value={difficulty}
                onChangeText={setDifficulty}
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                text="İptal"
                onPress={() => setModalVisible(false)}
                buttonStyle="outline"
                type="neutral"
              />
              <Button
                text="Kaydet"
                onPress={handleCheckIn}
                buttonStyle="filled"
                type="primary"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DailyCheckIn;

