import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import TopNavigation from '../../../../../components/TopNavigation';
import ListItem from '../../../../../components/ListItem';
import Button from '../../../../../components/Button';
import { Colors } from '../../../../../constants/Colors';
import { styles } from './DeviceManagement.styles';

const DeviceManagement = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLogoutDevice = (deviceId) => {
    console.log('Logout device:', deviceId);
    // Logout logic here
  };

  const devices = [
    {
      id: 'chrome-ios',
      title: 'Chrome (iOS)',
      supportingText: '167.133.46.47\nCalifornia, US\n1 minute ago',
      leadingImage: require('../../../../../assets/images/icons/chrome.png'),
    },
    {
      id: 'safari-macos',
      title: 'Safari (macOS)',
      supportingText: '79.11.3.184\nCalifornia, US\n2 days ago',
      leadingImage: require('../../../../../assets/images/icons/safari.png'),
    },
    {
      id: 'chrome-android',
      title: 'Chrome (Android)',
      supportingText: '240.51.45.15\nCalifornia, US\na year ago',
      leadingImage: require('../../../../../assets/images/icons/chrome.png'),
    }
  ];

  return (
    <View style={styles.container}>
      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={handleBackPress}
        showCenterItem={true}
        centerType="title"
        title="Device Management"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          This is a list of devices that have logged into your account. Logout any sessions that you do not recognize.
        </Text>
        
        <View style={styles.groupContainer}>
          {devices.map((device, index) => (
            <View key={device.id} style={styles.listItemWrapper}>
              <ListItem
                type="default"
                hasLeadingItem={true}
                leadingType="image"
                leadingImage={device.leadingImage}
                leadingBackgroundColor="transparent"
                leadingSize={40}
                leadingBorderRadius={8}
                titleText={device.title}
                hasSupportingText={true}
                supportingText={device.supportingText}
                hasTrailingItem={true}
                trailingType="button"
                trailingButtonText="Logout"
                trailingButtonType="neutral"
                trailingButtonSize="xs"
                onTrailingButtonPress={() => handleLogoutDevice(device.id)}
                onPress={() => {}} // Disable main press
                darkMode={false}
                containerStyle={[
                  styles.listItem,
                  index === 0 && styles.firstItem,
                  index === devices.length - 1 && styles.lastItem
                ]}
                grouped={true}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DeviceManagement;
