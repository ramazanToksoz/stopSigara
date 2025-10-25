import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import TopNavigation from '../../../../components/TopNavigation';
import TabsGroup from '../../../../components/TabsGroup';
import Accordion from '../../../../components/Accordion';
import { Colors } from '../../../../constants/Colors';
import { styles } from './Help.styles';
import ListItem from '../../../../components/ListItem';
const Help = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [searchText, setSearchText] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const tabs = ['FAQ', 'Support'];
  const categories = ['General', 'Account', 'Payment', 'Community'];

  const faqData = [
    {
      id: 1,
      title: 'How long do cravings usually last?',
      description: 'Most cravings peak within 2–3 minutes and then fade away. That\'s why Unsmoke gives you quick tools — like breathing, mini-games, or short exercises — to help you ride the wave until it passes.',
      isOpen: true,
    },
    {
      id: 2,
      title: 'What if I slip and smoke again?',
      description: 'Don\'t worry, slips are part of the journey. Unsmoke\'s compassion mode will help you get back on track with supportive tips and encouragement.',
      isOpen: false,
    },
    {
      id: 3,
      title: 'Can I change my quit plan after starting?',
      description: 'Yes, you can switch between Cold Turkey and Gradual plans at any time. Go to Settings > Quit Plan to make changes.',
      isOpen: false,
    },
    {
      id: 4,
      title: 'How does the AI coach personalize my journey?',
      description: 'Our AI analyzes your patterns, triggers, and progress to provide personalized advice, reminders, and support strategies.',
      isOpen: false,
    },
    {
      id: 5,
      title: 'Will my data and progress be private?',
      description: 'Absolutely. All your data is encrypted and stored securely. We never share your personal information with third parties.',
      isOpen: false,
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
        title="Help & Support"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tab Group */}
        <View style={styles.tabGroupContainer}>
          <TabsGroup
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            darkMode={false}
          />
        </View>

        {/* Categories - Only show for FAQ tab */}
        {activeTab === 0 && (
          <View style={styles.categoriesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categoriesWrapper}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryButton,
                      selectedCategory === category && styles.categoryButtonActive,
                    ]}
                    onPress={() => handleCategoryPress(category)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.categoryButtonText,
                        selectedCategory === category && styles.categoryButtonTextActive,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Search Field - Only show for FAQ tab */}
        {activeTab === 0 && (
          <View style={styles.searchContainer}>
            <View style={styles.searchField}>
              <View style={styles.searchIconContainer}>
                <Text style={styles.searchIcon}>🔍</Text>
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor={Colors.gray[30]}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
          </View>
        )}

        {/* Content based on active tab */}
        {activeTab === 0 ? (
          /* FAQ List */
          <View style={styles.faqContainer}>
            {faqData.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                description={item.description}
                isOpen={item.isOpen}
                darkMode={false}
              />
            ))}
          </View>
        ) : (
          /* Support List */
          <View style={styles.supportContainer}>
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/messages.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="Chat with us"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../assets/images/icons/arrow-right.png')}
              trailingIconSize={24}
              onPress={() => console.log('Chat with us pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
            
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/book.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="Knowledgebase"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../assets/images/icons/arrow-right.png')}
              trailingIconSize={24}
              onPress={() => console.log('Knowledgebase pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
            
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/chrome1.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="Website"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../assets/images/icons/external-square.png')}
              trailingIconSize={24}
              onPress={() => console.log('Website pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
            
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/instagram.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="Instagram"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
                trailingIcon={require('../../../../assets/images/icons/external-square.png')}
                trailingIconSize={24}
              onPress={() => console.log('Instagram pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
            
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/tiktok.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="TikTok"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../assets/images/icons/external-square.png')}
              trailingIconSize={24}
              onPress={() => console.log('TikTok pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
            
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/threads.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="Threads"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../assets/images/icons/external-square.png')}
              trailingIconSize={24}
              onPress={() => console.log('Threads pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
            
            <ListItem
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={require('../../../../assets/images/icons/twitter.png')}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText="X (Twitter)"
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../assets/images/icons/external-square.png')}
              trailingIconSize={24}
              onPress={() => console.log('X (Twitter) pressed')}
              darkMode={false}
              containerStyle={styles.supportItem}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Help;
