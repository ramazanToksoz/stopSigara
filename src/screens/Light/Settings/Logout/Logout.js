import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { styles } from './Logout.styles';

const Logout = ({ navigation, visible, onClose, onConfirm }) => {
  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.bottomSheet}>
          {/* Bottom Sheet Handle */}
          <View style={styles.handle} />
          
          {/* Content */}
          <View style={styles.content}>
            <View style={styles.frame}>
              <Text style={styles.title}>Are you sure you want to log out?</Text>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCancel}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleConfirm}
                  activeOpacity={0.7}
                >
                  <Text style={styles.confirmButtonText}>Yes, logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Logout;
