import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './Main.styles';
import TopNavigation from '../../../components/TopNavigation';
import Input from '../../../components/Input/Input';
import CardPost from '../../../components/CardPost/CardPost';
import Comments from './Comments/Comments';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const CommunityMain = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('Senin İçin');
  const [searchText, setSearchText] = useState('');
  const [showComments, setShowComments] = useState(false);

  const filterOptions = ['Senin İçin', 'Takip Edilenler', 'Beğenilenler', 'Kaydedilenler'];

  const posts = [
    {
      id: 1,
      name: 'Edward Chen',
      time: '2m ago',
      avatar: require('../../../assets/images/avatars/brian.png'),
      text: "3 months smoke-free! Cravings aren't gone, but they're weaker now. I finally believe I can do this.",
      type: 'Text',
      likes: '1.4K',
      comments: '128'
    },
    {
      id: 2,
      name: 'Sarah',
      time: '14m ago',
      avatar: require('../../../assets/images/icons/kas2.png'),
      text: "One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud.",
      type: 'Image',
      likes: '1.4K',
      comments: '128'
    },
    {
      id: 3,
      name: 'Billy Murray',
      time: '3h ago',
      avatar: require('../../../assets/images/icons/kas2.png'),
      text: "One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud.",
      type: 'Link',
      likes: '1.4K',
      comments: '128'
    }
  ];

  const handleCommentPress = () => {
    setShowComments(true);
  };

  const handleCloseComments = () => {
    setShowComments(false);
  };

  const handleAddPostPress = () => {
    navigation.navigate('AddPost');
  };

  console.log("=== COMMUNITY MAIN COMPONENT LOADED ===");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
              <TopNavigation
                showLeadingItem={false}
                showCenterItem={true}
                centerType="title"
                title="Topluluk"
                showTrailingItem={true}
                trailingType="icon"
                trailingIcon="add"
                onTrailingPress={handleAddPostPress}
                backgroundColor="transparent"
              />
        <View style={styles.searchContainer}>
          <Input
            type="default"
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Ara..."
            hasLeadingIcon={true}
            leadingIcon={require('../../../assets/images/icons/search-normal.png')}
            containerStyle={styles.searchInputContainer}
          />
        </View>

        {/* Filter Buttons */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterScrollContainer}
          contentContainerStyle={styles.filterContainer}
        >
          {filterOptions.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.filterButtonActive
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text 
                style={[
                  styles.filterButtonText,
                  activeFilter === filter && styles.filterButtonTextActive
                ]}
                numberOfLines={1}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Posts */}
        <View style={styles.postsContainer}>
          {posts.map((post) => (
            <CardPost
              key={post.id}
              name={post.name}
              time={post.time}
              avatar={post.avatar}
              text={post.text}
              type={post.type}
              likes={post.likes}
              comments={post.comments}
              onLike={() => console.log('Like pressed')}
              onComment={handleCommentPress}
              onSave={() => console.log('Save pressed')}
              onMore={() => console.log('More pressed')}
            />
          ))}
        </View>
      </ScrollView>

              {/* Comments Modal */}
              <Comments
                visible={showComments}
                onClose={handleCloseComments}
                navigation={navigation}
              />
            </View>
  );
};

export default CommunityMain;
