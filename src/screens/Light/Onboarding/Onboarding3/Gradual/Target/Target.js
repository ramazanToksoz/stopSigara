import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './Target.styles'
import StatusBarComponent from '../../../../../../components/StatusBarComponent'
import TopNavigation from '../../../../../../components/TopNavigation'
import Button from '../../../../../../components/Button'
import { useUser } from '../../../../../../context/UserContext'

const Target = ({ navigation, route }) => {
  console.log('Target');
  const { updateUserData } = useUser();
  const { dailyCigarettes = 20 } = route?.params || {}
  const [selectedTarget, setSelectedTarget] = useState(null)

  const targets = [
    { id: 1, value: -2, label: '-2' },
    { id: 2, value: -6, label: '-6' },
    { id: 3, value: -8, label: '-8' },
    { id: 4, value: -10, label: '-10' },
  ]

  const handleNext = () => {
    if (selectedTarget) {
      updateUserData({ targetReduction: selectedTarget });
      console.log('Selected target:', selectedTarget)
      console.log('New daily target:', dailyCigarettes + selectedTarget)
      navigation.navigate('Onboarding4')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBarComponent style={styles.statusBar} />
      
      <View style={styles.content}>
        <TopNavigation
          showLeadingItem={true}
          leadingType="icon"
          leadingIcon={require('../../../../../../assets/images/icons/Arrow.png')}
          onLeadingPress={() => navigation.goBack()}
          showCenterItem={false}
        />
        
        <View style={styles.mainContent}>
          <Text style={styles.question}>
          Bu hafta günlük hedefin kaç adet?
          </Text>
          
          <View style={styles.cardsContainer}>
            {targets.map((target) => (
              <Button
                key={target.id}
                text={target.label}
                type={selectedTarget === target.value ? 'primary' : 'neutral'}
                buttonStyle="chip"
                size="default"
                onPress={() => setSelectedTarget(target.value)}
                hideArrow={true}
              />
            ))}
          </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          text="Devam Et"
          onPress={handleNext}
          disabled={!selectedTarget}
        />
      </View>
    </View>
  )
}

export default Target

