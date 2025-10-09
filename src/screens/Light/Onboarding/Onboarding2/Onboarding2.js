import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Onboarding2.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import { Colors } from '../../../../constants/Colors'
import ListItem from '../../../../components/ListItem'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
const Onboarding2 = ({ navigation }) => {
  const handleSkip = () => {
    navigation.navigate('Onboarding4');
  };
  
  const handleNext = () => {
    navigation.navigate('Onboarding3');
  };
  
  // Radio state - Tek seçim yapılabilir
  const [selectedOption, setSelectedOption] = useState(1);
  
  const options = [
    { id: 1, title: 'Sağlığım için' },
    { id: 2, title: 'Ailem için' },
    { id: 3, title: 'Para biriktirmek için' },
    
  ];
  
  const handleRadioChange = (id) => {
    setSelectedOption(id);
  };

  const [otherReason, setOtherReason] = useState('');
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
        showCenterItem={false}
        centerType="progress"
        currentPage={2}
        totalPages={3}
        showTrailingItem={true}
        trailingType="button"
        trailingText="Skip"
        buttonType="neutral"
        buttonStyle="text"
        buttonSize="xs"
        onTrailingPress={handleSkip}
      />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.listContainer}>
        <Text style={styles.heading}>Neden bırakmak istiyorsun ?</Text>
        
        {options.map((option) => (
          <ListItem 
            key={option.id}
            leadingType="none"
            titleText={option.title}
            hasSupportingText={false}
            trailingType="radio"
            radioState={selectedOption === option.id ? 'active' : 'inactive'}
            onRadioChange={() => handleRadioChange(option.id)}
          />
        ))}
        <Input
      type="default"
      onChangeText={setOtherReason}
      placeholder="Diğer nedeni"
      value={otherReason}
        
      />
      </ScrollView>
      
      
      <View style={styles.buttonContainer}>
        <Button text="Devam Et" onPress={handleNext} />
      </View>
    </View>
  )
}

export default Onboarding2