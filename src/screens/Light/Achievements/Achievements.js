import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList ,StatusBar} from 'react-native';
import { styles } from './Achievements.styles';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';

const Achievements = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Achievement data
  const achievements = [
    { id: 1, title: 'Check-In', unlocked: true, icon: 'check-in' },
    { id: 2, title: 'Crusher', unlocked: true, icon: 'Crusher' },
    { id: 3, title: 'Mindful', unlocked: true, icon: 'Mindful' },
    { id: 4, title: 'A Seeker', unlocked: true, icon: 'ASeeker' },
  ];

  const renderAchievement = ({ item, index }) => {
    const getIconSource = () => {
      if (item.unlocked) {
        // Use placeholder icons for unlocked achievements
        return require('../../../assets/images/icons/check-in.png');
      } else {
        // Use lock icon for locked achievements
        return require('../../../assets/images/icons/lock.png');
      }
    };

    return (
      <TouchableOpacity 
        style={styles.achievementCard}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('AchievementDetail', { achievement: item })}
      >
        <View style={styles.achievementContent}>
          <View style={[
            styles.achievementBadge,
            !item.unlocked && styles.lockedBadge
          ]}>
            <Image 
              source={getIconSource()}
              style={[
                styles.achievementIcon,
                !item.unlocked && styles.lockedIcon
              ]}
              resizeMode="contain"
            />
          </View>
          <Text style={[
            styles.achievementTitle,
            !item.unlocked && styles.lockedTitle
          ]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={true}
        centerType="title"
        title="Achievements"
        showTrailingItem={false}
        darkMode={false}
        backgroundColor="transparent"
      />
      
      <View style={styles.content}>
        <FlatList
          data={achievements}
          renderItem={renderAchievement}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

export default Achievements;
