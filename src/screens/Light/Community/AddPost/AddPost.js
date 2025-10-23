import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { styles } from './AddPost.styles';
import Button from '../../../../components/Button/Button';
import IconButton from '../../../../components/IconButton/IconButton';
import TopNavigation from '../../../../components/TopNavigation/TopNavigation';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const AddPost = ({ navigation }) => {
  const [postText, setPostText] = useState('');

  const handleClose = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const handlePost = () => {
    console.log('Posting:', postText);
    // Here you would typically post to your backend
    setPostText('');
    // Navigate to Posted screen
    if (navigation) {
      navigation.navigate('Posted');
    }
  };

  const handleAddImage = () => {
    console.log('Add image pressed');
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
                <TextInput
                  style={styles.textInput}
                  value={postText}
                  onChangeText={setPostText}
                  placeholder="What's on your mind?"
                  placeholderTextColor="#8E949F"
                  multiline={true}
                  textAlignVertical="top"
                />
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
          </View>
          
          {/* Post Button */}
          <Button
            text="Post"
            type="primary"
            buttonStyle="default"
            size="default"
            disabled={!postText.trim()}
            onPress={handlePost}
          />
        </View>
      </View>
    </View>
  );
};

export default AddPost;
