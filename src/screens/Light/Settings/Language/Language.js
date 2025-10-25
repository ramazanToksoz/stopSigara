import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import { Colors } from '../../../../constants/Colors';
import { styles } from './Language.styles';

const Language = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLanguageSelect = (languageId) => {
    setSelectedLanguage(languageId);
  };

  const suggestedLanguages = [
    {
      id: 'english',
      title: 'English (US)',
    },
    {
      id: 'france',
      title: 'France',
    },
  ];

  const availableLanguages = [
    {
      id: 'chinese',
      title: 'Chinese',
    },
    {
      id: 'spanish',
      title: 'Spanish',
    },
    {
      id: 'arabic',
      title: 'Arabic',
    },
    {
      id: 'russian',
      title: 'Russian',
    },
    {
      id: 'indonesian',
      title: 'Bahasa Indonesia',
    },
    {
      id: 'japanese',
      title: 'Japanese',
    },
    {
      id: 'korean',
      title: 'Korean',
    },
  ];

  return (
    <View style={styles.container}>
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={true}
        centerType="title"
        title="Language"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Suggested Languages Group */}
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>Suggested</Text>
          <View style={styles.optionsContainer}>
            {suggestedLanguages.map((language, index) => (
              <ListItem
                key={language.id}
                type="default"
                titleText={language.title}
                hasTrailingItem={true}
                trailingType="radio"
                radioState={selectedLanguage === language.id ? 'active' : 'inactive'}
                onRadioChange={() => handleLanguageSelect(language.id)}
                onPress={() => handleLanguageSelect(language.id)}
                darkMode={false}
                containerStyle={[
                  styles.listItem,
                  index === 0 && styles.firstItem,
                  index === suggestedLanguages.length - 1 && styles.lastItem,
                ]}
                grouped={false}
                isLastItem={index === suggestedLanguages.length - 1}
              />
            ))}
          </View>
        </View>

        {/* Available Languages Group */}
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>Available</Text>
          <View style={styles.optionsContainer}>
            {availableLanguages.map((language, index) => (
              <ListItem
                key={language.id}
                type="default"
                titleText={language.title}
                hasTrailingItem={true}
                trailingType="radio"
                radioState={selectedLanguage === language.id ? 'active' : 'inactive'}
                onRadioChange={() => handleLanguageSelect(language.id)}
                onPress={() => handleLanguageSelect(language.id)}
                darkMode={false}
                containerStyle={[
                  styles.listItem,
                  index === 0 && styles.firstItem,
                  index === availableLanguages.length - 1 && styles.lastItem,
                ]}
                grouped={false}
                isLastItem={index === availableLanguages.length - 1}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Language;
