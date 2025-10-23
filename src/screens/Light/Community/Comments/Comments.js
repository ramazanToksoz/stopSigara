import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { styles } from './Comments.styles';
import BottomChatBar from '../../../../components/BottomChatBar';
import CardPost from '../../../../components/CardPost/CardPost';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Comments = ({ navigation, visible = true, onClose }) => {
  const [commentText, setCommentText] = useState('');

  const comments = [
    {
      id: 1,
      name: 'Sarah',
      time: '2m ago',
      avatar: require('../../../../assets/images/avatars/sarah.png'),
      text: "Congrats! I'm only at 2 weeks but your post gives me so much hope 🙌.",
      type: 'Comment',
      likes: '1.4K',
      comments: '128',
      isReply: false
    },
    {
      id: 2,
      name: 'Edward Chen',
      time: '2m ago',
      avatar: require('../../../../assets/images/avatars/edward.png'),
      text: "You got this, Sarah. The first month is the hardest, but it gets better.",
      type: 'Comment',
      likes: '1.4K',
      comments: '128',
      isReply: true
    },
    {
      id: 3,
      name: 'Emily',
      time: '2m ago',
      avatar: require('../../../../assets/images/avatars/emily.png'),
      text: "One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud.",
      type: 'Comment',
      likes: '1.4K',
      comments: '128',
      isReply: true
    },
    {
      id: 4,
      name: 'Brian',
      time: '2m ago',
      avatar: require('../../../../assets/images/avatars/brian.png'),
      text: "Respect! 3 months feels so far away, but your journey makes me believe I can get there too.",
      type: 'Comment',
      likes: '1.4K',
      comments: '128',
      isReply: false
    }
  ];

  const handleSendComment = (text) => {
    console.log('Sending comment:', text);
    // Here you would typically send the comment to your backend
    setCommentText('');
  };

  const handleAddAttachment = () => {
    console.log('Add attachment pressed');
  };

  const handleVoiceInput = () => {
    console.log('Voice input pressed');
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  console.log("=== COMMENTS COMPONENT LOADED ===");

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0.5)" />
        
        {/* Backdrop */}
        <TouchableOpacity 
          style={styles.backdrop}
          activeOpacity={1}
          onPress={handleClose}
        />
        
        {/* Modal Content */}
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.drawerHandle} />
            <View style={styles.sectionHeading}>
              <View style={styles.sectionMain}>
                <Text style={styles.sectionTitle}>
                  All Comments
                </Text>
              </View>
            </View>
          </View>

          {/* Comments List */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.commentsList}>
              {comments.map((comment) => (
                <View 
                  key={comment.id} 
                  style={[
                    styles.commentWrapper,
                    comment.isReply && styles.replyWrapper
                  ]}
                >
                  <CardPost
                    name={comment.name}
                    time={comment.time}
                    avatar={comment.avatar}
                    text={comment.text}
                    type={comment.type}
                    likes={comment.likes}
                    comments={comment.comments}
                    onLike={() => console.log('Like pressed')}
                    onComment={() => console.log('Comment pressed')}
                    onSave={() => console.log('Save pressed')}
                    onMore={() => console.log('More pressed')}
                  />
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Bottom Chat Bar */}
          <BottomChatBar
            placeholder="Write your comment..."
            value={commentText}
            onChangeText={setCommentText}
            onSend={handleSendComment}
            onAddAttachment={handleAddAttachment}
            onVoiceInput={handleVoiceInput}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Comments;
