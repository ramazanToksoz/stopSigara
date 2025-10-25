import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import TopNavigation from '../../../../components/TopNavigation';
import ListItem from '../../../../components/ListItem';
import { Colors } from '../../../../constants/Colors';
import { styles } from './SettingsNotificationsScreen.styles';

const SettingsNotificationsScreen = ({ navigation }) => {
  const [allNotifications, setAllNotifications] = useState(false);
  const [dailyCheckIn, setDailyCheckIn] = useState(true);
  const [aiCravingAlerts, setAiCravingAlerts] = useState(true);
  const [missionReminders, setMissionReminders] = useState(false);
  const [progressMilestones, setProgressMilestones] = useState(false);
  const [slipSupport, setSlipSupport] = useState(true);
  const [community, setCommunity] = useState(true);
  const [featureReleases, setFeatureReleases] = useState(true);
  const [promotionsOffers, setPromotionsOffers] = useState(false);
  const [serviceNotices, setServiceNotices] = useState(true);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const activityOptions = [
    {
      id: 'dailyCheckIn',
      title: 'Daily Check-In Reminder',
      supportingText: 'Gentle nudge to log mood & cravings.',
      switchState: dailyCheckIn,
      onSwitchChange: setDailyCheckIn,
    },
    {
      id: 'aiCravingAlerts',
      title: 'AI Craving Alerts (Predictive)',
      supportingText: 'Heads-up before your usual craving times.',
      switchState: aiCravingAlerts,
      onSwitchChange: setAiCravingAlerts,
    },
    {
      id: 'missionReminders',
      title: 'Mission & Practice Reminders',
      supportingText: 'Today\'s 3-min mission or breathing practice.',
      switchState: missionReminders,
      onSwitchChange: setMissionReminders,
    },
    {
      id: 'progressMilestones',
      title: 'Progress & Milestones',
      supportingText: 'Streaks, money saved, health milestones.',
      switchState: progressMilestones,
      onSwitchChange: setProgressMilestones,
    },
    {
      id: 'slipSupport',
      title: 'Slip Support (Compassion Mode)',
      supportingText: 'If you log a cigarette, get supportive next-step tips.',
      switchState: slipSupport,
      onSwitchChange: setSlipSupport,
    },
    {
      id: 'community',
      title: 'Community',
      supportingText: 'Replies, mentions, likes',
      switchState: community,
      onSwitchChange: setCommunity,
    },
  ];

  const appUpdateOptions = [
    {
      id: 'featureReleases',
      title: 'Feature Releases',
      supportingText: 'New tools and improvements in Unsmoke.',
      switchState: featureReleases,
      onSwitchChange: setFeatureReleases,
    },
    {
      id: 'promotionsOffers',
      title: 'Promotions & Offers',
      supportingText: 'Discounts, trials, and partner perks.',
      switchState: promotionsOffers,
      onSwitchChange: setPromotionsOffers,
    },
    {
      id: 'serviceNotices',
      title: 'Service Notices',
      supportingText: 'Account, billing, or policy updates.',
      switchState: serviceNotices,
      onSwitchChange: setServiceNotices,
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
        title="Notifications"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* All Notifications Switch */}
        <View style={styles.allNotificationsContainer}>
          <ListItem
            type="default"
            titleText="All Notifications"
            hasTrailingItem={true}
            trailingType="switch"
            switchState={allNotifications ? 'active' : 'inactive'}
            onSwitchChange={setAllNotifications}
            darkMode={false}
            containerStyle={styles.allNotificationsItem}
          />
        </View>

        {/* Activity Group */}
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>Activity</Text>
          <View style={styles.optionsContainer}>
            {activityOptions.map((option, index) => (
              <ListItem
                key={option.id}
                type="default"
                titleText={option.title}
                hasSupportingText={true}
                supportingText={option.supportingText}
                hasTrailingItem={true}
                trailingType="switch"
                switchState={option.switchState ? 'active' : 'inactive'}
                onSwitchChange={option.onSwitchChange}
                darkMode={false}
                containerStyle={[
                  styles.listItem,
                  index === 0 && styles.firstItem,
                  index === activityOptions.length - 1 && styles.lastItem,
                ]}
                grouped={false}
                isLastItem={index === activityOptions.length - 1}
              />
            ))}
          </View>
        </View>

        {/* App Updates Group */}
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>App Updates</Text>
          <View style={styles.optionsContainer}>
            {appUpdateOptions.map((option, index) => (
              <ListItem
                key={option.id}
                type="default"
                titleText={option.title}
                hasSupportingText={true}
                supportingText={option.supportingText}
                hasTrailingItem={true}
                trailingType="switch"
                switchState={option.switchState ? 'active' : 'inactive'}
                onSwitchChange={option.onSwitchChange}
                darkMode={false}
                containerStyle={[
                  styles.listItem,
                  index === 0 && styles.firstItem,
                  index === appUpdateOptions.length - 1 && styles.lastItem,
                ]}
                grouped={false}
                isLastItem={index === appUpdateOptions.length - 1}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsNotificationsScreen;
