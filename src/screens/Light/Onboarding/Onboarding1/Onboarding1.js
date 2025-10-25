import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./Onboarding1.styles";
import { StatusBar } from "expo-status-bar";
import TopNavigation from "../../../../components/TopNavigation";
import ListItem from "../../../../components/ListItem";
import { Colors } from "../../../../constants/Colors";
import Button from "../../../../components/Button";
import { useUser } from "../../../../context/UserContext";

const Onboarding1 = ({ navigation }) => {
  console.log('Onboarding1');
  const { updateUserData } = useUser();
  
  const handleSkip = () => {
    navigation.navigate('Onboarding4');
  };
  
  const handleNext = () => {
    // Save reminder preferences to context
    updateUserData({ reminders: reminders });
    console.log('Onboarding1 - Saved reminders:', reminders);
    navigation.navigate('Onboarding2');
  };
  
  // Checkbox state'leri
  const [reminders, setReminders] = useState([
    { id: 1, title: 'Yemeklerden sonra', checked: true },
    { id: 2, title: 'Stres olduğunda ',  checked: false },
    { id: 3, title: 'Kahve ile birlikte',  checked: true },
    { id: 4, title: 'Sosyal etkinliklerde',  checked: false },
    { id: 5, title: 'Araba kullanırken', checked: true },
    { id: 6, title: 'Can sıkıntısında',  checked: false },
  ]);
  
  const handleCheckboxChange = (id, isChecked) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, checked: isChecked }
          : reminder
      )
    );
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
        showCenterItem={false}
        centerType="progress"
        currentPage={1}
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
        <Text style={styles.heading}>Sigara içme isteğin genellikle ne zaman geliyor?</Text>
       
        
        {reminders.map((reminder, index) => (
          <ListItem 
            key={reminder.id}
            leadingType="none"
            leadingIcon={require('../../../../assets/images/icons/homeIcon.png')}
            leadingBackgroundColor="#E8F5FF"
            leadingSize={40}
            leadingBorderRadius={8}
            titleText={reminder.title}
            supportingText={reminder.subtitle}
            hasSupportingText={false}
            trailingType="checkbox"
            checkboxState={reminder.checked ? 'checked' : 'unchecked'}
            onCheckboxChange={(isChecked) => handleCheckboxChange(reminder.id, isChecked)}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button text="Devam Et" onPress={handleNext} />
      </View>
    </View>
  );
};

export default Onboarding1;
