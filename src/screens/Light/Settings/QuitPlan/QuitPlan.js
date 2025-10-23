import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './QuitPlan.styles';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import TextArea from '../../../../components/TextArea';

const QuitPlan = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('coldTurkey'); // 'coldTurkey' or 'gradual'
  const [quitDate, setQuitDate] = useState('01 Feb 2026');
  const [quitReason, setQuitReason] = useState("I'm quitting smoking because of my daughter");

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleColdTurkeyPress = () => {
    setSelectedMethod('coldTurkey');
  };

  const handleGradualPress = () => {
    setSelectedMethod('gradual');
  };

  const handleQuitDatePress = () => {
    // Navigate to date picker
    console.log('Quit Date pressed');
  };

  const handleReasonChange = (text) => {
    setQuitReason(text);
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar} />
      
      {/* Top Navigation */}
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={true}
        centerType="title"
        title="Quit Plan"
        showTrailingItem={false}
        darkMode={false}
      />
      
      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quit Method Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quit Method</Text>
          
          <View style={styles.optionsContainer}>
            {/* Cold Turkey Option */}
            <ListItem
              type="default"
              titleText="Cold Turkey"
              hasSupportingText={true}
              supportingText="Quit on chosen date"
              hasTrailingItem={true}
              trailingType="radio"
              radioState={selectedMethod === 'coldTurkey' ? 'active' : 'inactive'}
              onRadioChange={() => handleColdTurkeyPress()}
              backgroundColor="#FFFFFF"
              containerStyle={styles.listItemWithDivider}
              onPress={handleColdTurkeyPress}
            />
            
            {/* Quit Date (only for Cold Turkey) */}
            {selectedMethod === 'coldTurkey' && (
              <ListItem
                type="default"
                titleText="Quit Date"
                hasSupportingText={true}
                supportingText="Choose a date"
                hasTrailingItem={true}
                trailingType="text"
                trailingText={quitDate}
                trailingTextStyle={styles.dateText}
                backgroundColor="#FFFFFF"
                onPress={handleQuitDatePress}
              />
            )}
          </View>
          
          {/* Gradual Reduction Option */}
          <ListItem
            type="default"
            titleText="Gradual Reduction"
            hasSupportingText={true}
            supportingText="Tapering off over time."
            hasTrailingItem={true}
            trailingType="radio"
            radioState={selectedMethod === 'gradual' ? 'active' : 'inactive'}
            onRadioChange={() => handleGradualPress()}
            backgroundColor="#FFFFFF"
            onPress={handleGradualPress}
          />
        </View>

        {/* Quit Reason Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quit Reason</Text>
          
          <TextArea
            placeholder="Tell us why you're quitting..."
            value={quitReason}
            onChangeText={handleReasonChange}
            numberOfLines={6}
            style={styles.textArea}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default QuitPlan;

