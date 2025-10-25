import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopNavigation from '../../../../components/TopNavigation';
import { Colors } from '../../../../constants/Colors';
import { useUser } from '../../../../context/UserContext';
import { styles } from './OnboardingData.styles';

const OnboardingData = ({ navigation }) => {
  const { quitMethod, userData } = useUser();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.gray[5]} />
      
      <TopNavigation
        title="Onboarding Verileri"
        onBackPress={handleBack}
        showBackButton={true}
      />

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quit Method</Text>
          <Text style={styles.dataText}>{quitMethod || 'Seçilmedi'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reminder Preferences</Text>
          {userData.reminders && userData.reminders.length > 0 ? (
            userData.reminders.map((reminder, index) => (
              <Text key={index} style={styles.dataText}>
                • {reminder.title} {reminder.checked ? '✓' : '✗'}
              </Text>
            ))
          ) : (
            <Text style={styles.dataText}>Seçilmedi</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quit Reason Type</Text>
          <Text style={styles.dataText}>{userData.quitReasonType || 'Seçilmedi'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quit Date (Cold Turkey)</Text>
          <Text style={styles.dataText}>
            {userData.quitDate ? new Date(userData.quitDate).toLocaleDateString('tr-TR') : 'Seçilmedi'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Cigarettes (Gradual)</Text>
          <Text style={styles.dataText}>{userData.dailyCigarettes || 'Seçilmedi'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Target Reduction (Gradual)</Text>
          <Text style={styles.dataText}>{userData.targetReduction || 'Seçilmedi'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Quit Reason</Text>
          <Text style={styles.dataText}>{userData.personalQuitReason || 'Yazılmadı'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnboardingData;
