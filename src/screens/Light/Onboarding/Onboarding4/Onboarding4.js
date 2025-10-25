import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Onboarding4.styles'
import { StatusBar } from 'expo-status-bar'
import TopNavigation from '../../../../components/TopNavigation'
import { Colors } from '../../../../constants/Colors'
import Button from '../../../../components/Button'
import TextArea from '../../../../components/TextArea'
import { useUser } from '../../../../context/UserContext'

const Onboarding4 = ({ navigation }) => {
  console.log('Onboarding4');
  const { updateUserData } = useUser();
  const [text, setText] = useState('');
  
  const handleNext = () => {
    updateUserData({ personalQuitReason: text });
    console.log("Onboarding4 - Saved personal quit reason:", text);
    navigation.navigate('Auth');
  };

  const handleTestData = () => {
    navigation.navigate('OnboardingData');
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
        currentPage={4}
        totalPages={4}
        showTrailingItem={false}
      />
      
      <View style={styles.content}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionSubtitle}>Cümleyi tamamla.</Text>
          <Text style={styles.questionTitle}>Sigarayı bırakıyorum çünkü…</Text>
        </View>
        
        <View style={styles.answerContainer}>
          <TextArea
            placeholder="Cümleyi tamamla."
            onChangeText={setText}
            value={text}
          />
          
          <View style={styles.tipsContainer}>
            <Image 
              source={require('../../../../assets/images/icons/lamp-on.png')} 
              style={styles.tipIcon}
            />
            <Text style={styles.tipText}>
              Bu sebepler seni sigarayı bırakman için motive edecek.
            </Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            text="Verileri Görüntüle (Test)" 
            onPress={handleTestData}
            hideArrow={true}
            buttonStyle="neutral"
          />
          <Button 
            text="Bitir" 
            onPress={handleNext}
            hideArrow={true}
          />
        </View>
      </View>
    </View>
  )
}

export default Onboarding4

