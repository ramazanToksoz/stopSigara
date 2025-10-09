import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './SmokeSum.styles'
import StatusBarComponent from '../../../../../../components/StatusBarComponent'
import TopNavigation from '../../../../../../components/TopNavigation'
import Button from '../../../../../../components/Button'
import Slider from '../../../../../../components/Slider'

const SmokeSum = ({ navigation }) => {
  const [cigaretteCount, setCigaretteCount] = useState(20)
  
  const handleNext = () => {
    // Navigate to next screen
    console.log('Günlük sigara:', cigaretteCount)
    navigation.navigate('Target', { dailyCigarettes: cigaretteCount })
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
          Günde ortalama kaç sigara içiyorsun?
          </Text>
          
          <Text style={styles.valueText}>{cigaretteCount}</Text>
          
          <View style={styles.sliderContainer}>
            <Slider
              minValue={0}
              maxValue={40}
              initialValue={20}
              step={1}
              onValueChange={setCigaretteCount}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
        <Button
          text="Devam Et"
          onPress={handleNext}
        />
      </View>
      </View>
      
      
    </View>
  )
}

export default SmokeSum

