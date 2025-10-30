import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { styles } from './AddPost.styles';
import Button from '../../../../components/Button/Button';
import IconButton from '../../../../components/IconButton/IconButton';
import TopNavigation from '../../../../components/TopNavigation/TopNavigation';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { pickImageFromLibrary, uploadPostImage } from '../../../../services/storageService';
import { createPost as createPostService } from '../../../../services/communityService';
import { auth } from '../../../../../firebaseConfig';

const AddPost = ({ navigation }) => {
  const [postText, setPostText] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const minChars = 10;

  const handleClose = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const handlePost = async () => {
    if (!auth.currentUser) return;
    const payload = {
      content: postText.trim(),
      type: imageUri ? 'Image' : 'Text',
      visibility: 'public',
      images: imageUri ? [imageUri] : [],
    };
    setIsLoading(true);
    try {
      console.log('AddPost.handlePost payload:', payload);
      // 1) Create post document to get postId
      const res = await createPostService(auth.currentUser.uid, payload);
      console.log('AddPost.createPostService result:', res);
      if (res?.success && res.postId) {
        // 2) If image selected, upload to Storage and update post
        if (imageUri) {
          const up = await uploadPostImage(res.postId, imageUri);
          console.log('AddPost.uploadPostImage result:', up);
          if (up.success && up.downloadURL) {
            // update post with images array
            // lazy import to avoid circular
            const { updatePost } = await import('../../../../services/communityService');
            await updatePost(res.postId, { images: [up.downloadURL], type: 'Image' });
          }
        }
        setPostText('');
        setImageUri(null);
        if (navigation) {
          navigation.navigate('Posted');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddImage = async () => {
    const pick = await pickImageFromLibrary();
    if (!pick.cancelled && pick.uri) {
      setImageUri(pick.uri);
    }
  };

  const handleAddEmoji = () => {
    console.log('Add emoji pressed');
  };

  const handleAddDocument = () => {
    console.log('Add document pressed');
  };

  console.log("=== ADD POST COMPONENT LOADED ===");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      <View style={styles.topNavigation}>
      {/* Top Navigation */}
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleClose}
        
        showCenterItem={true}
        centerType="title"
        title="Add New Post"
        
        showTrailingItem={true}
        trailingType="icon"
        trailingIcon="document-copy"
        onTrailingPress={() => console.log('Copy pressed')}
        
        darkMode={false}
        backgroundColor="#FCFCFD"
      /></View>


      {/* Content */}
      <View style={styles.content}>
        <View style={styles.main}>
          {/* Compose Section */}
          <View style={styles.compose}>
            <View style={styles.composeTop}>
              <View style={styles.composeTopMain}>
                <Image 
                  source={require('../../../../assets/images/avatars/brian.png')}
                  style={styles.avatar}
                  resizeMode="cover"
                />
                <View style={{ flex: 1, position: 'relative' }}>
                  <TextInput
                    style={styles.textInput}
                    value={postText}
                    onChangeText={setPostText}
                    placeholder="What's on your mind?"
                    placeholderTextColor="#8E949F"
                    multiline={true}
                    textAlignVertical="top"
                  />
                  <Text style={{ position: 'absolute', right: 8, bottom: 8, color: '#8E949F', fontSize: 12 }}>
                    {postText.trim().length < minChars ? `${Math.max(0, minChars - postText.trim().length)} kaldı` : 'Hazır'}
                  </Text>
                </View>
              </View>
            </View>
            
            <View style={styles.composeBottom}>
              <IconButton
                type="Gray"
                size="Sm"
                icon={require('../../../../assets/images/icons/image.png')}
                onPress={handleAddImage}
              />
              
              <IconButton
                type="Gray"
                size="Sm"
                icon={require('../../../../assets/images/icons/emoji-happy.png')}
                onPress={handleAddEmoji}
              />
              
              <IconButton
                type="Gray"
                size="Sm"
                icon={require('../../../../assets/images/icons/document.png')}
                onPress={handleAddDocument}
              />
            </View>
          {imageUri ? (
            <View style={{ marginTop: 12 }}>
              <View style={{ position: 'relative' }}>
                <Image source={{ uri: imageUri }} style={{ width: '100%', height: 200, borderRadius: 12 }} resizeMode="cover" />
                <TouchableOpacity
                  onPress={() => setImageUri(null)}
                  activeOpacity={0.8}
                  style={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: 16, padding: 6 }}
                >
                  <Image source={require('../../../../assets/images/icons/close.png')} style={{ width: 16, height: 16, tintColor: '#fff' }} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          </View>
          
        {/* Post Button */}
        <View style={{ alignItems: 'flex-end', marginTop: 12 }}>
          <Button
            text="Post"
            type="primary"
            buttonStyle="default"
            size="default"
          disabled={postText.trim().length < minChars || isLoading}
            onPress={handlePost}
          />
        </View>
        </View>
      </View>
    </View>
  );
};

export default AddPost;
