import React from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { styles } from './Logout.styles';
import { auth } from '../../../../../firebaseConfig';

const Logout = ({ navigation, visible, onClose, onConfirm }) => {
  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = async () => {
    try {
      await auth.signOut();
      console.log('[Logout] Successfully logged out from Firebase Auth.');
      if (onConfirm) {
        onConfirm();
      }
      onClose();
    } catch (e) {
      console.log('[Logout] Error during logout:', e);
      Alert.alert('Logout Error', e.message || 'An error occurred while logging out.');
    }
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
