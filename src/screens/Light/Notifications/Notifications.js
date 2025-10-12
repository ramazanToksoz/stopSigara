import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Notifications.styles';
import TopNavigation from '../../../components/TopNavigation';
import NotificationCard from '../../../components/NotificationCard';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../constants/Colors';

const Notifications = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // All notifications data
  const allNotifications = [
    {
      id: 1,
      type: 'follow',
      title: "Sarah",
      message: "Followed you",
      time: "1m ago",
      isRead: false,
      avatarSource: require('../../../assets/images/avatars/sarah.png'),
      notificationType: "follow",
      onPress: () => console.log('Follow notification pressed')
    },
    {
      id: 2,
      type: 'reply',
      title: "Brian",
      message: "Anybody got benefits after 7 days of quitting cigarettes?",
      time: "14m ago",
      isRead: false,
      avatarSource: require('../../../assets/images/avatars/brian.png'),
      notificationType: "reply",
      detailedMessage: "Yeah, I'm breathing easier. Still tough after meals, but I'm proud.",
      onPress: () => console.log('Reply notification pressed')
    },
    {
      id: 3,
      type: 'mention',
      title: "Henry",
      message: "Mentioned you",
      time: "2h ago",
      isRead: false,
      avatarSource: require('../../../assets/images/avatars/henry.png'),
      notificationType: "mention",
      detailedMessage: "Look at this article, I believe you will follow my methods.",
      onPress: () => console.log('Mention notification pressed')
    },
    {
      id: 4,
      type: 'like',
      title: "Emily",
      message: "Liked your post",
      time: "Yesterday",
      isRead: false,
      avatarSource: require('../../../assets/images/avatars/emily.png'),
      notificationType: "like",
      detailedMessage: "Anybody got benefits after 7 days of quitting cigarettes?",
      onPress: () => console.log('Like notification pressed')
    },
    {
      id: 5,
      type: 'follow',
      title: "Edward Chen",
      message: "Followed you",
      time: "2d ago",
      isRead: false,
      avatarSource: require('../../../assets/images/avatars/edward.png'),
      notificationType: "follow",
      onPress: () => console.log('Follow notification pressed')
    },
    {
      id: 6,
      type: 'reply',
      title: "David B",
      message: "Anybody got benefits after 7 days of quitting cigarettes?",
      time: "2d ago",
      isRead: true,
      avatarSource: require('../../../assets/images/avatars/david.png'),
      notificationType: "reply",
      detailedMessage: "Yeah, I'm breathing easier. Still tough after meals, but I'm proud.",
      onPress: () => console.log('Reply notification pressed')
    },
    {
      id: 7,
      type: 'follow',
      title: "Sarah",
      message: "Followed you",
      time: "3d ago",
      isRead: true,
      avatarSource: require('../../../assets/images/avatars/sarah.png'),
      notificationType: "follow",
      onPress: () => console.log('Follow notification pressed')
    }
  ];

  // Filter notifications based on active filter
  const filteredNotifications = allNotifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'follows') return notification.type === 'follow';
    if (activeFilter === 'replies') return notification.type === 'reply';
    if (activeFilter === 'mentions') return notification.type === 'mention';
    if (activeFilter === 'likes') return notification.type === 'like';
    return true;
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FCFCFD" />
      
      <TopNavigation
        leadingType="icon"
        leadingIcon={require('../../../assets/images/icons/arrow-left.png')}
        onLeadingPress={() => navigation.goBack()}
        showCenterItem={true}
        centerType="title"
        title="Notifications"
        showTrailingItem={true}
        trailingType="icon"
        trailingIcon={require('../../../assets/images/icons/setting-2.png')}
        onTrailingPress={() => console.log('Settings pressed')}
        backgroundColor="#FCFCFD"
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Filter Buttons */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterScrollContainer}
          contentContainerStyle={styles.filterContainer}
        >
          <TouchableOpacity 
            style={[styles.filterButton, activeFilter === 'all' && styles.filterButtonActive]}
            onPress={() => setActiveFilter('all')}
          >
            <Text style={[styles.filterButtonText, activeFilter === 'all' && styles.filterButtonTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, activeFilter === 'follows' && styles.filterButtonActive]}
            onPress={() => setActiveFilter('follows')}
          >
            <Text style={[styles.filterButtonText, activeFilter === 'follows' && styles.filterButtonTextActive]}>Follows</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, activeFilter === 'replies' && styles.filterButtonActive]}
            onPress={() => setActiveFilter('replies')}
          >
            <Text style={[styles.filterButtonText, activeFilter === 'replies' && styles.filterButtonTextActive]}>Replies</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, activeFilter === 'mentions' && styles.filterButtonActive]}
            onPress={() => setActiveFilter('mentions')}
          >
            <Text style={[styles.filterButtonText, activeFilter === 'mentions' && styles.filterButtonTextActive]}>Mentions</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, activeFilter === 'likes' && styles.filterButtonActive]}
            onPress={() => setActiveFilter('likes')}
          >
            <Text style={[styles.filterButtonText, activeFilter === 'likes' && styles.filterButtonTextActive]}>Likes</Text>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Dynamic Notifications */}
        {filteredNotifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
            time={notification.time}
            isRead={notification.isRead}
            avatarSource={notification.avatarSource}
            notificationType={notification.notificationType}
            detailedMessage={notification.detailedMessage}
            onPress={notification.onPress}
          />
        ))}

      </ScrollView>
    </View>
  );
};

export default Notifications;
