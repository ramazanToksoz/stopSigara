import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Improvements.styles';
import TopNavigation from '../../../../../components/TopNavigation';
import ListItem from '../../../../../components/ListItem';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Improvements = ({ navigation }) => {
  const improvementsData = [
    {
      id: 1,
      title: '1 Day',
      description: 'Nicotine begins leaving your body, and your heart rate returns closer to normal.',
      icon: require('../../../../../assets/images/icons/kas2.png'),
      completed: true
    },
    {
      id: 2,
      title: '3 Days',
      description: 'Your lungs start to heal, making each breath a little easier and cleaner.',
      icon: require('../../../../../assets/images/icons/kas2.png'),
      completed: true
    },
    {
      id: 3,
      title: '7 Days',
      description: 'Energy levels rise, your sense of taste improves, and sleep becomes more restful.',
      icon: require('../../../../../assets/images/icons/kas2.png'),
      completed: true
    }
  ];

  const upcomingImprovements = [
    {
      id: 4,
      title: '30 Days',
      description: 'Coughing and shortness of breath decrease as your lungs regain strength.',
      icon: require('../../../../../assets/images/icons/kas2.png'),
      progress: 75,
      completed: false
    },
    {
      id: 5,
      title: '90 Days',
      description: 'Blood circulation improves, exercise feels easier, and your stamina grows.',
      icon: require('../../../../../assets/images/icons/kas2.png'),
      progress: 24,
      completed: false
    },
    {
      id: 6,
      title: '1 Year',
      description: 'Your risk of heart disease is cut in half compared to when you smoked.',
      icon: require('../../../../../assets/images/icons/kas2.png'),
      progress: 6,
      completed: false
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Completed Improvements */}
        <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={() => navigation.goBack()}
        showTrailingItem={false}
        showCenterItem={true}
        centerType="title"
        title="Health Improvements"
      />
         <View style={styles.section}>
           <View style={styles.improvementsList}>
             {improvementsData.map((improvement) => (
               <ListItem
                 key={improvement.id}
                 leadingType= "icon"
                 leadingIcon={improvement.icon}
                 leadingBackgroundColor="#E8F5E9"
                 leadingSize={40}
                 leadingBorderRadius={8}
                 leadingIconSize={24}
                 leadingImage={improvement.icon}
                 leadingCompleted={improvement.completed}
                 titleText={improvement.title}
                 hasSupportingText={true}
                 supportingText={improvement.description}
                 hasTrailingItem={false}
                 titleStyle={styles.improvementTitle}
                 supportingStyle={styles.improvementDescription}
               />
             ))}
           </View>
         </View>

        {/* Upcoming Improvements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>
                What's Next
              </Text>
              <Text style={styles.sectionSubtitle}>
                8 days until your next milestone
              </Text>
            </View>
          </View>
          
           <View style={styles.improvementsList}>
             {upcomingImprovements.map((improvement) => (
               <ListItem
                 key={improvement.id}
                 leadingType="improvement"
                 leadingImage={improvement.icon}
                 leadingPercent={`${improvement.progress}%`}
                 leadingCompleted={improvement.completed}
                 titleText={improvement.title}
                 hasSupportingText={true}
                 supportingText={improvement.description}
                 hasTrailingItem={false}
                 titleStyle={styles.improvementTitle}
                 supportingStyle={styles.improvementDescription}
               />
             ))}
           </View>
        </View>
      </ScrollView>
      
    </View>
  );
};

export default Improvements;
