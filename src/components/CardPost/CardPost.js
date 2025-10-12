import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from './CardPost.styles';
import Settings from '../Settings';

const CardPost = ({ 
  name = "Sarah", 
  time = "2m ago", 
  avatar, 
  text = "One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud.", 
  type = "Text", 
  darkMode = false,
  likes = "1.4K",
  comments = "128",
  onLike,
  onComment,
  onSave,
  onMore
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const getAvatarSource = () => {
    if (avatar) return avatar;
    return { uri: 'https://via.placeholder.com/40x40/58B658/FFFFFF?text=S' }; // Default avatar
  };

  const getPostContent = () => {
    switch (type) {
      case "Image":
        return (
          <View style={styles.postBody}>
            <Text style={[styles.postContent, darkMode && styles.darkPostContent]}>
              {text}
            </Text>
            <Image
              source={require('../../assets/images/journey.png')}
              style={styles.postImage}
            />
          </View>
        );
      
      case "Link":
        return (
          <View style={styles.postBody}>
            <Text style={[styles.postContent, darkMode && styles.darkPostContent]}>
              {text}
            </Text>
            <View style={[styles.linkPreview, darkMode && styles.darkLinkPreview]}>
              <Image
                source={require('../../assets/images/journey.png')}
                style={styles.linkImage}
              />
              <View style={styles.linkText}>
                <Text style={[styles.linkTitle, darkMode && styles.darkLinkTitle]}>
                  5 Ways Your Body Heals After Quitting Smoking
                </Text>
                <Text style={[styles.linkUrl, darkMode && styles.darkLinkUrl]}>
                  healthline.com
                </Text>
              </View>
            </View>
          </View>
        );
      
      case "Comment":
        return (
          <View style={styles.postBody}>
            <Text style={[styles.postContent, darkMode && styles.darkPostContent]}>
              {text}
            </Text>
          </View>
        );
      
      default: // Text
        return (
          <View style={styles.postBody}>
            <Text style={[styles.postContent, darkMode && styles.darkPostContent]}>
              {text}
            </Text>
          </View>
        );
    }
  };

  const getBottomActions = () => {
    if (type === "Comment") {
      return (
        <View style={styles.postBottom}>
          <View style={styles.postLeftActions}>
            <TouchableOpacity style={styles.likes} onPress={onLike}>
              <Image 
                source={require('../../assets/images/icons/heart.png')} 
                style={styles.actionIcon}
              />
              <Text style={[styles.actionText, darkMode && styles.darkActionText]}>{likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.comments} onPress={onComment}>
              <Image 
                source={require('../../assets/images/icons/message-text.png')} 
                style={styles.actionIcon}
              />
              <Text style={[styles.actionText, darkMode && styles.darkActionText]}>{comments}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.postBottom}>
        <View style={styles.postLeftActions}>
          <TouchableOpacity style={styles.likes} onPress={onLike}>
            <Image 
              source={require('../../assets/images/icons/heart.png')} 
              style={styles.actionIcon}
            />
            <Text style={[styles.actionText, darkMode && styles.darkActionText]}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.comments} onPress={onComment}>
            <Image 
              source={require('../../assets/images/icons/message-text.png')} 
              style={styles.actionIcon}
            />
            <Text style={[styles.actionText, darkMode && styles.darkActionText]}>{comments}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.postRightActions} onPress={onSave}>
          <Image 
            source={require('../../assets/images/icons/save-2.png')} 
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.postCard, darkMode && styles.darkPostCard]}>
      <View style={styles.postTop}>
        <View style={styles.postLeft}>
          <Image 
            source={getAvatarSource()} 
            style={styles.postAvatar}
          />
          <View style={styles.postUserInfo}>
            <Text style={[styles.postUserName, darkMode && styles.darkPostUserName]}>
              {name}
            </Text>
            <Text style={[styles.postTime, darkMode && styles.darkPostTime]}>
              {time}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.postOptions} onPress={() => console.log('More options')}>
          <Image 
            source={require('../../assets/images/icons/more.png')} 
            style={styles.optionsIcon}
          />
        </TouchableOpacity>
      </View>
      
      {getPostContent()}
      {getBottomActions()}
      
      <Modal
        visible={showSettings}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowSettings(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowSettings(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Settings />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CardPost;
