import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './HealthImprovements.styles';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const HealthImprovements = ({ navigation }) => {
  const improvementsData = [
    {
      id: 1,
      title: "10% Cut",
      description: "Even small reductions help your heart and blood pressure start to stabilize.",
      icon: require('../../../../assets/images/icons/kas2.png'),
      completed: true
    },
    {
      id: 2,
      title: "25% Cut",
      description: "Breathing feels easier as your lungs get more oxygen and less smoke.",
      icon: require('../../../../assets/images/icons/kas2.png'),
      completed: true
    },
    {
      id: 3,
      title: "50% Cut",
      description: "Half the cigarettes gone — stamina rises, and energy returns faster.",
      icon: require('../../../../assets/images/icons/kas2.png'),
      completed: true
    }
  ];

  const upcomingImprovements = [
    {
      id: 4,
      title: "75% Cut",
      description: "With most toxins reduced, sleep improves and your body recovers quicker.",
      icon: require('../../../../assets/images/icons/kas2.png'),
      progress: 35,
      completed: false
    },
    {
      id: 5,
      title: "Consistent 2 Weeks",
      description: "Holding your reduction builds resilience and lowers craving intensity.",
      icon: require('../../../../assets/images/icons/kas2.png'),
      progress: 24,
      completed: false
    },
    {
      id: 6,
      title: "Cigarette-Free Days",
      description: "Every full smoke-free day multiplies the benefits — your body thanks you.",
      icon: require('../../../../assets/images/icons/kas2.png'),
      progress: 6,
      completed: false
    }
  ];

  console.log("=== HEALTH IMPROVEMENTS COMPONENT LOADED ===");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
        
        {/* Completed Improvements */}
        <View style={styles.section}>
          <View style={styles.improvementsList}>
            {improvementsData.map((improvement) => (
              <ListItem
                key={improvement.id}
                leadingType="icon"
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
                Maintain under 5/day for 3 more days to hit your milestone.
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

export default HealthImprovements;
