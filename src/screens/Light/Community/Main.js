import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Main.styles';
import TopNavigation from '../../../components/TopNavigation';
import Input from '../../../components/Input/Input';
import CardPost from '../../../components/CardPost/CardPost';
import Comments from './Comments/Comments';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { usePosts, useLikeStatus } from '../../../hooks/useCommunity';
import { useTranslation } from '../../../hooks/useTranslation';

const CommunityMain = ({ navigation }) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('Senin İçin');
  const [searchText, setSearchText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const filterOptions = ['Senin İçin', 'Takip Edilenler', 'Beğenilenler', 'Kaydedilenler'];
  const filters = useMemo(() => ({ visibility: 'public' }), []);
  const { posts, isLoading, loadMore, refresh } = usePosts(filters, 10);

  const handleCommentPress = (postId) => {
    setSelectedPostId(postId);
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
                title={"Topluluk"}
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
          {(posts || []).map((post) => (
            <CardPost
              key={post.id}
              name={post.authorName || 'User'}
              time={''}
              avatar={post.authorAvatar ? { uri: post.authorAvatar } : undefined}
              text={post.content || ''}
              type={post.type || 'Text'}
              likes={String(post.likesCount || 0)}
              comments={String(post.commentsCount || 0)}
              onLike={() => { /* like handled per detail or future update */ }}
              onComment={() => handleCommentPress(post.id)}
              onSave={() => {}}
              onMore={() => {}}
            />
          ))}
        </View>
      </ScrollView>

              {/* Comments Modal */}
              <Comments
                visible={showComments}
                onClose={handleCloseComments}
                postId={selectedPostId}
                navigation={navigation}
              />
            </View>
  );
};

export default CommunityMain;
