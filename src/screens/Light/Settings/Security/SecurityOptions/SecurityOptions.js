import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import TopNavigation from '../../../../../components/TopNavigation';
import ListItem from '../../../../../components/ListItem';
import { Colors } from '../../../../../constants/Colors';
import { styles } from './SecurityOptions.styles';

const SecurityOptions = ({ navigation }) => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [useFaceID, setUseFaceID] = useState(false);
  const [biometricLogin, setBiometricLogin] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDeviceManagement = () => {
    navigation.navigate('DeviceManagement');
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const securityOptions = [
    {
      id: 'rememberLogin',
      title: 'Remember Login',
      leadingIcon: require('../../../../../assets/images/icons/lock.png'),
      trailingType: 'switch',
      switchState: rememberLogin,
      onSwitchChange: setRememberLogin,
    },
    {
      id: 'useFaceID',
      title: 'Use FaceID',
      leadingIcon: require('../../../../../assets/images/icons/scan.png'),
      trailingType: 'switch',
      switchState: useFaceID,
      onSwitchChange: setUseFaceID,
    },
    {
      id: 'biometricLogin',
      title: 'Biometric Login',
      leadingIcon: require('../../../../../assets/images/icons/finger-scan.png'),
      trailingType: 'switch',
      switchState: biometricLogin,
      onSwitchChange: setBiometricLogin,
    }
  ];

  const menuOptions = [
    {
      id: 'deviceManagement',
      title: 'Device Management',
      leadingIcon: require('../../../../../assets/images/icons/security-safe.png'),
      trailingType: 'more',
      onPress: handleDeviceManagement,
    },
    {
      id: 'changePassword',
      title: 'Change Password',
      leadingIcon: require('../../../../../assets/images/icons/password-check.png'),
      trailingType: 'more',
      onPress: handleChangePassword,
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
        title="Security"
        showTrailingItem={false}
        darkMode={false}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Security Options Group */}
        <View style={styles.groupContainer}>
          {securityOptions.map((option, index) => (
            <ListItem
              key={option.id}
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={option.leadingIcon}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText={option.title}
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="switch"
              switchState={option.switchState ? 'active' : 'inactive'}
              onSwitchChange={option.onSwitchChange}
              onPress={() => option.onSwitchChange && option.onSwitchChange(!option.switchState)}
              darkMode={false}
              containerStyle={[
                styles.listItem,
                index === 0 && styles.firstItem,
                index === securityOptions.length - 1 && styles.lastItem
              ]}
              grouped={true}
            />
          ))}
        </View>

        {/* Menu Options Group */}
        <View style={styles.groupContainer}>
          {menuOptions.map((option, index) => (
            <ListItem
              key={option.id}
              type="default"
              hasLeadingItem={true}
              leadingType="icon"
              leadingIcon={option.leadingIcon}
              leadingBackgroundColor="transparent"
              leadingSize={24}
              leadingBorderRadius={8}
              leadingIconSize={24}
              titleText={option.title}
              hasSupportingText={false}
              hasTrailingItem={true}
              trailingType="icon"
              trailingIcon={require('../../../../../assets/images/icons/arrow-right2.png')}
              trailingIconSize={24}
              trailingIconColor={Colors.brand[60]}
              onPress={option.onPress}
              darkMode={false}
              containerStyle={[
                styles.listItem,
                index === 0 && styles.firstItem,
                index === menuOptions.length - 1 && styles.lastItem
              ]}
              grouped={true}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SecurityOptions;
