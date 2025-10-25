import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Accordion.styles';

const Accordion = ({
  title = 'Item Title',
  description = 'Item text description',
  isOpen = false,
  onToggle,
  darkMode = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <View style={[
      styles.container,
      darkMode && styles.containerDark,
    ]}>
      <TouchableOpacity
        style={styles.trigger}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.title,
          darkMode && styles.titleDark,
        ]}>
          {title}
        </Text>
        <View style={styles.iconContainer}>
          <Text style={[
            styles.icon,
            darkMode && styles.iconDark,
          ]}>
            {isExpanded ? '−' : '+'}
          </Text>
        </View>
      </TouchableOpacity>
      
      {isExpanded && (
        <>
          <View style={[
            styles.divider,
            darkMode && styles.dividerDark,
          ]} />
          <Text style={[
            styles.description,
            darkMode && styles.descriptionDark,
          ]}>
            {description}
          </Text>
        </>
      )}
    </View>
  );
};

export default Accordion;
