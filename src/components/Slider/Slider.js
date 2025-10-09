import React, { useState, useRef } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'
import { styles } from './Slider.styles'
import { LinearGradient } from 'expo-linear-gradient'

const Slider = ({
  minValue = 0,
  maxValue = 40,
  initialValue = 20,
  step = 1,
  onValueChange,
  showTicks = true,
  trackGradient = ['#9BEC45', '#F5C343', '#FA556D'],
  containerStyle,
  trackStyle,
  thumbStyle,
  tickStyle,
  darkMode = false,
}) => {
  const [value, setValue] = useState(initialValue)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const thumbPosition = useRef(new Animated.Value(0)).current
  const sliderRef = useRef(null)

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout
    setSliderWidth(width)
    
    // Set initial thumb position
    const percentage = (initialValue - minValue) / (maxValue - minValue)
    thumbPosition.setValue(percentage * width)
  }

  const calculateValueFromPosition = (locationX) => {
    if (sliderWidth === 0) return value

    // Calculate percentage
    let percentage = locationX / sliderWidth
    percentage = Math.max(0, Math.min(1, percentage))

    // Calculate new value
    let newValue = minValue + percentage * (maxValue - minValue)
    
    // Apply step
    newValue = Math.round(newValue / step) * step
    
    // Constrain value
    newValue = Math.max(minValue, Math.min(maxValue, newValue))

    return newValue
  }

  const updateSlider = (locationX) => {
    const newValue = calculateValueFromPosition(locationX)
    
    if (newValue !== value) {
      setValue(newValue)
      if (onValueChange) {
        onValueChange(newValue)
      }
    }

    // Update thumb position
    const percentage = (newValue - minValue) / (maxValue - minValue)
    thumbPosition.setValue(percentage * sliderWidth)
  }

  const handleTrackPress = (event) => {
    if (!isDragging) {
      const locationX = event.nativeEvent.locationX
      updateSlider(locationX)
    }
  }

  const handleThumbPressIn = () => {
    setIsDragging(true)
  }

  const handleThumbPressOut = () => {
    setIsDragging(false)
  }

  const handleThumbMove = (event) => {
    if (isDragging) {
      const locationX = event.nativeEvent.pageX
      // We need to convert pageX to relative position
      sliderRef.current?.measure((fx, fy, width, height, px, py) => {
        const relativeX = locationX - px
        updateSlider(relativeX)
      })
    }
  }

  const renderThumbIcon = () => {
    return (
      <View style={styles.thumbIconContainer}>
        <View style={styles.bar}>
          <View style={styles.barLine} />
          <View style={[styles.barLine, styles.barLineRight]} />
        </View>
      </View>
    )
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Slider Track */}
      <TouchableOpacity
        ref={sliderRef}
        style={styles.sliderContainer}
        onLayout={handleLayout}
        onPress={handleTrackPress}
        activeOpacity={1}
      >
        {/* Track with Gradient */}
        <LinearGradient
          colors={trackGradient}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={[styles.track, trackStyle]}
        />

        {/* Thumb */}
        {sliderWidth > 0 && (
          <Animated.View
            style={[
              styles.thumb,
              thumbStyle,
              {
                left: thumbPosition.interpolate({
                  inputRange: [0, sliderWidth],
                  outputRange: [-20, sliderWidth - 20],
                  extrapolate: 'clamp',
                }),
              },
            ]}
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={handleThumbPressIn}
            onResponderMove={handleThumbMove}
            onResponderRelease={handleThumbPressOut}
            onResponderTerminationRequest={() => false}
          >
            {renderThumbIcon()}
          </Animated.View>
        )}
      </TouchableOpacity>

      {/* Tick Labels */}
      {showTicks && (
        <View style={[styles.tickContainer, tickStyle]}>
          <Text style={styles.tickText}>{minValue}</Text>
          <Text style={styles.tickText}>{maxValue}+</Text>
        </View>
      )}
    </View>
  )
}

export default Slider
