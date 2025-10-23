import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './BottomChatBar.styles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const BottomChatBar = ({
  placeholder = "Write your comment...",
  onSend,
  onAddAttachment,
  onVoiceInput,
  value = '',
  onChangeText,
  multiline = true,
  maxLines = 4,
  disabled = false
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (text) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleSend = () => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue('');
    }
  };

  const handleAddAttachment = () => {
    if (onAddAttachment) {
      onAddAttachment();
    }
  };

  const handleVoiceInput = () => {
    if (onVoiceInput) {
      onVoiceInput();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.chatInput}>
          <View style={styles.textField}>
            <View style={styles.inputContainer}>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={handleAddAttachment}
                disabled={disabled}
                activeOpacity={0.7}
              >
                <Image 
                  source={require('../../assets/images/icons/add-circle.png')}
                  style={[
                    styles.addIcon,
                    disabled && styles.disabledIcon
                  ]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              
              <TextInput
                style={[
                  styles.textInput,
                  isFocused && styles.textInputFocused
                ]}
                value={inputValue}
                onChangeText={handleTextChange}
                placeholder={placeholder}
                placeholderTextColor="#8E949F" // Gray/30 from Figma
                multiline={multiline}
                maxLength={500}
                editable={!disabled}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                textAlignVertical="top"
              />
              
              <TouchableOpacity 
                style={styles.voiceButton}
                onPress={handleVoiceInput}
                disabled={disabled}
                activeOpacity={0.7}
              >
                <Image 
                  source={require('../../assets/images/icons/microphone-2.png')}
                  style={[
                    styles.voiceIcon,
                    disabled && styles.disabledIcon
                  ]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[
              styles.sendButton,
              (!inputValue.trim() || disabled) && styles.sendButtonDisabled
            ]}
            onPress={handleSend}
            disabled={!inputValue.trim() || disabled}
            activeOpacity={0.7}
          >
            <Image 
              source={require('../../assets/images/icons/image.png')}
              style={[
                styles.sendIcon,
                (!inputValue.trim() || disabled) && styles.sendIconDisabled
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomChatBar;
