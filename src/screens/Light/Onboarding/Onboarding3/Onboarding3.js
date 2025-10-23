import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Onboarding3.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import { Colors } from '../../../../constants/Colors'
import CardMethod from '../../../../components/CardMethod'
import Button from '../../../../components/Button'
import DatePicker from '../../../../components/DatePicker'
import { useUser } from '../../../../context/UserContext'

const Onboarding3 = ({ navigation }) => {
  const { updateQuitMethod, updateUserData } = useUser();
  
  const handleSkip = () => {
    navigation.navigate('Onboarding4');
  };
  
  const handleNext = () => {
    console.log("Onboarding3 - Next - Selected method:", selectedMethod);
    
    if (selectedMethod === 'gradual') {
      console.log("Onboarding3 - Setting quitMethod to 'gradual'");
      updateQuitMethod('gradual');
      navigation.navigate('SmokeSum');
    } else if (selectedMethod === 'cold-turkey' && quitDate) {
      console.log("Onboarding3 - Setting quitMethod to 'coldturkey'");
      updateQuitMethod('coldturkey');
      updateUserData({ quitDate: quitDate.toISOString() });
      console.log("Quit date:", quitDate.toLocaleDateString('tr-TR'));
      navigation.navigate('Onboarding4');
    }
  };
  
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [quitDate, setQuitDate] = useState(null);
  
  const methods = [
    {
      id: 'cold-turkey',
      title: 'Aniden Bırak',
      description: quitDate 
        ? `Tarih: ${quitDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}`
        : 'Seçtiğin tarihte bırak.',
      icon: require('../../../../assets/images/icons/calendar.png'),
    },
    {
      id: 'gradual',
      title: 'Yavaş Yavaş Azalt',
      description: 'Zamanla azaltarak bırak.',
      icon: require('../../../../assets/images/icons/trend-down.png'),
    },
  ];
  
  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    
    // Eğer "Aniden Bırak" seçildiyse DatePicker'ı aç
    if (methodId === 'cold-turkey') {
      setShowDatePicker(true);
    }
  };
  
  const [tempDate, setTempDate] = useState(null);
  
  const handleDateSelect = (date) => {
    setTempDate(date);
  };
  
  const handleDateConfirm = () => {
    if (tempDate) {
      setQuitDate(tempDate);
      setShowDatePicker(false);
      setTempDate(null);
    }
  };
  
  const handleModalClose = () => {
    setShowDatePicker(false);
    setTempDate(null);
    // Eğer tarih seçilmediyse, seçimi iptal et
    if (!quitDate) {
      setSelectedMethod(null);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.gray[5]} />
      </View>
      
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={() => navigation.goBack()}
        showCenterItem={true}
        centerType="progress"
        currentPage={3}
        totalPages={3}
        showTrailingItem={true}
        trailingType="button"
        trailingText="Skip"
        buttonType="neutral"
        buttonStyle="text"
        buttonSize="xs"
        onTrailingPress={handleSkip}
      />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Nasıl bırakmak istiyorsun?</Text>
        
        <View style={styles.methodsContainer}>
          {methods.map((method) => (
            <CardMethod 
              key={method.id}
              title={method.title}
              description={method.description}
              icon={method.icon}
              selected={selectedMethod === method.id}
              onPress={() => handleMethodSelect(method.id)}
            />
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <Button 
          text="Devam Et" 
          onPress={handleNext}
          disabled={
            !selectedMethod || 
            (selectedMethod === 'cold-turkey' && !quitDate)
          }
        />
      </View>
      
      {/* DatePicker Modal */}
      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleModalClose}
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.modalContent}>
              <TopNavigation
                showLeadingItem={true}
                leadingType="icon"
                leadingIcon={require('../../../../assets/images/icons/Arrow.png')}
                onLeadingPress={handleModalClose}
                showCenterItem={true}
                centerType="title"
                title="Tarih Seç"
                showTrailingItem={true}
                trailingType="button"
                trailingText="Seç"
                buttonType="primary"
                buttonStyle="text"
                buttonSize="xs"
                onTrailingPress={handleDateConfirm}
              />
              
              <View style={styles.datePickerContainer}>
                <DatePicker 
                  selectedDate={tempDate || quitDate || new Date()}
                  onDateSelect={handleDateSelect}
                  minDate={new Date()}
                />
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default Onboarding3