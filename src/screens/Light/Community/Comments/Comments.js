import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { styles } from './Comments.styles';
import BottomChatBar from '../../../../components/BottomChatBar';
import CardPost from '../../../../components/CardPost/CardPost';
import { StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { usePostComments } from '../../../../hooks/useCommunity';

const Comments = ({ navigation, visible = true, onClose, postId }) => {
  const [commentText, setCommentText] = useState('');
  const { comments, isLoading, addComment, refetch } = usePostComments(postId, 50);

  const handleSendComment = async (text) => {
    if (!text?.trim()) return;
    const res = await addComment(text.trim());
    if (res?.success) {
      setCommentText('');
    }
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
              {(comments || []).map((comment) => (
                <View 
                  key={comment.id} 
                  style={[
                    styles.commentWrapper,
                    false && styles.replyWrapper
                  ]}
                >
                  <CardPost
                    name={comment.authorName || 'User'}
                    time={''}
                    avatar={comment.authorAvatar ? { uri: comment.authorAvatar } : undefined}
                    text={comment.content || ''}
                    type={'Comment'}
                    likes={String(comment.likesCount || 0)}
                    comments={'0'}
                    onLike={() => {}}
                    onComment={() => {}}
                    onSave={() => {}}
                    onMore={() => {}}
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
