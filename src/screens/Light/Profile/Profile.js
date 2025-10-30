import React, { useMemo, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,StatusBar, Modal, ActivityIndicator } from 'react-native';
import { styles } from './Profile.styles';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';
import { useProfileData } from '../../../hooks/useProfileData';
import { useTrackingData } from '../../../hooks/useTrackingData';
import { useUserAchievements } from '../../../hooks/useAchievements';
import { usePosts } from '../../../hooks/useCommunity';
import { auth } from '../../../../firebaseConfig';
import { useTranslation } from '../../../hooks/useTranslation';
import { useUser } from '../../../context/UserContext';
import { pickImageFromLibrary, uploadProfilePhoto, deleteProfilePhoto } from '../../../services/storageService';

const Profile = ({ navigation }) => {
  const { t } = useTranslation();
  const { profileData } = useProfileData();
  const { progressStats } = useTrackingData();
  const { updateProfileData } = useUser();
  const userId = auth.currentUser?.uid || null;
  const userPostsFilter = useMemo(() => (userId ? { userId, visibility: 'public' } : { visibility: 'public' }), [userId]);
  const { posts: userPosts } = usePosts(userPostsFilter, 100);
  const { achievements } = useUserAchievements();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEditPress = () => {
    navigation.navigate('EditProfile');
  };

  const handleCameraPress = async () => {
    try {
      console.log('Camera pressed, userId:', userId);
      if (!userId) {
        console.log('No userId, cannot upload');
        return;
      }
      
      const pick = await pickImageFromLibrary();
      console.log('Pick result:', pick);
      
      if (pick.cancelled) {
        console.log('User cancelled image pick');
        return;
      }
      
      if (!pick.uri) {
        console.log('No URI from pick');
        return;
      }
      
      console.log('Starting upload, URI:', pick.uri);
      setIsUploading(true);
      const result = await uploadProfilePhoto(userId, pick.uri);
      console.log('Upload result:', result);
      
      if (result.success) {
        console.log('Upload successful, downloadURL:', result.downloadURL);
        updateProfileData({ ...profileData, photoURL: result.downloadURL });
      } else {
        console.error('Upload failed:', result.error);
      }
    } catch (error) {
      console.error('handleCameraPress error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeletePress = async () => {
    if (!userId) return;
    setIsDeleting(true);
    try {
      const res = await deleteProfilePhoto(userId);
      if (res.success) {
        updateProfileData({ ...profileData, photoURL: null });
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleViewAllAchievements = () => {
    navigation.navigate('Achievements');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showTrailingItem={true}
        trailingType="icon"
        trailingIcon="edit-2"
        onTrailingPress={handleEditPress}
        darkMode={false}
        backgroundColor="transparent"
      />
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setPreviewVisible(true)}>
              {
                typeof profileData?.photoURL === 'string' && profileData.photoURL ? (
                  <Image 
                    source={{ uri: profileData.photoURL }}
                    style={styles.avatar}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={[styles.avatar, { alignItems: 'center', justifyContent: 'center', backgroundColor: '#E6F3E6' }]}> 
                    <Text style={{ fontSize: 36, color: '#58B658', fontFamily: 'DMSans-Bold' }}>
                      {(profileData?.displayName || profileData?.emailPrefix || 'K').charAt(0).toUpperCase()}
                    </Text>
                  </View>
                )
              }
            </TouchableOpacity>
            {(isUploading || isDeleting) && (
              <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: styles.avatar?.borderRadius || 24 }}>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <Text style={{ marginTop: 8, color: '#FFFFFF', fontFamily: 'DMSans-Medium' }}>{isDeleting ? 'Siliniyor...' : 'Yükleniyor...'}</Text>
              </View>
            )}
            <View style={styles.avatarButtons}>
              <TouchableOpacity 
                style={styles.avatarButton}
                onPress={handleDeletePress}
                activeOpacity={0.7}
                disabled={isUploading || isDeleting}
              >
                {isDeleting ? (
                  <ActivityIndicator size="small" color="#58B658" />
                ) : (
                  <Image 
                    source={require('../../../assets/images/icons/trash.png')}
                    style={[styles.avatarButtonIcon, (isUploading || isDeleting) && { opacity: 0.5 }]}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.avatarButton}
                onPress={handleCameraPress}
                activeOpacity={0.7}
                disabled={isUploading || isDeleting}
              >
                {isUploading ? (
                  <ActivityIndicator size="small" color="#58B658" />
                ) : (
                  <Image 
                    source={require('../../../assets/images/icons/camera.png')}
                    style={styles.avatarButtonIcon}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Plus Badge */}
          <View style={styles.plusBadge}>
            <Image 
              source={require('../../../assets/images/icons/crown.png')}
              style={styles.plusIcon}
              resizeMode="contain"
            />
            <Text style={styles.plusText}>PLUS</Text>
          </View>
        </View>

        {/* Fullscreen Preview */}
        <Modal visible={previewVisible} transparent={true} animationType="fade" onRequestClose={() => setPreviewVisible(false)}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', alignItems: 'center', justifyContent: 'center' }}>
            {
              typeof profileData?.photoURL === 'string' && profileData.photoURL ? (
                <Image source={{ uri: profileData.photoURL }} style={{ width: '85%', height: '60%', borderRadius: 16 }} resizeMode="contain" />
              ) : (
                <View style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: '#E6F3E6', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 72, color: '#58B658', fontFamily: 'DMSans-Bold' }}>
                    {(profileData?.displayName || profileData?.emailPrefix || 'K').charAt(0).toUpperCase()}
                  </Text>
                </View>
              )
            }
            <TouchableOpacity onPress={() => setPreviewVisible(false)} style={{ marginTop: 24 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{t('common.close') || 'Kapat'}</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{profileData?.displayName || profileData?.emailPrefix || 'Kullanıcı'}</Text>
          <Text style={styles.memberSince}>
            {t('profile.memberSince', { date: (profileData?.createdAt || '').split('T')[0] || '' })}
          </Text>
        </View>

        {/* Metrics Card */}
        <View style={styles.metricsCard}>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>{achievements?.length || 0}</Text>
            <Text style={styles.metricLabel}>{t('profile.achievements')}</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>{progressStats?.daysQuit || 0}</Text>
            <Text style={styles.metricLabel}>{t('profile.daysQuit')}</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>{progressStats?.totalAvoided || 0}</Text>
            <Text style={styles.metricLabel}>{t('profile.cigarettesAvoided')}</Text>
          </View>
        </View>

        {/* Achievements Section */}
        <View style={styles.achievementsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>{t('profile.achievements')}</Text>
              <Text style={styles.sectionSubtitle}>{achievements?.length || 0} {t('profile.unlocked')}</Text>
            </View>
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={handleViewAllAchievements}
              activeOpacity={0.7}
            >
              <Text style={styles.viewAllText}>{t('profile.viewAll')}</Text>
              <Image 
                source={require('../../../assets/images/icons/arrow-right.png')}
                style={styles.viewAllIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.achievementsList}>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/check-in.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/Crusher.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/Mindful.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Image 
                  source={require('../../../assets/images/icons/ASeeker.png')}
                  style={styles.achievementIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Community Section */}
        <View style={styles.communitySection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>{t('profile.community')}</Text>
            </View>
          </View>
          
          <View style={styles.communityMetrics}>
            <View style={styles.communityItem}>
              <Image 
                source={require('../../../assets/images/icons/document.png')}
                style={styles.communityIcon}
                resizeMode="contain"
              />
              <View style={styles.communityTextContainer}>
                <Text style={styles.communityValue}>{userPosts?.length || 0}</Text>
                <Text style={styles.communityLabel}>{t('profile.posts')}</Text>
              </View>
            </View>
            <View style={styles.communityItem}>
              <Image 
                source={require('../../../assets/images/icons/heart.png')}
                style={styles.communityIcon}
                resizeMode="contain"
              />
              <View style={styles.communityTextContainer}>
                <Text style={styles.communityValue}>0</Text>
                <Text style={styles.communityLabel}>{t('profile.likes')}</Text>
              </View>
            </View>
            <View style={styles.communityItem}>
              <Image 
                source={require('../../../assets/images/icons/people.png')}
                style={styles.communityIcon}
                resizeMode="contain"
              />
              <View style={styles.communityTextContainer}>
                <Text style={styles.communityValue}>0</Text>
                <Text style={styles.communityLabel}>{t('profile.followers')}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
