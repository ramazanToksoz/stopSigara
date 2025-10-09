import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    height: verticalScale(56),
  },

  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: verticalScale(60),
    marginVertical: verticalScale(-10),
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
  },

  track: {
    position: 'absolute',
    width: '100%',
    height: verticalScale(24),
    left: 0,
    top: '50%',
    marginTop: verticalScale(-12),
    borderRadius: moderateScale(9999),
  },

  thumb: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    top: '50%',
    marginTop: scale(-20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray[0], // White
    borderWidth: scale(4),
    borderColor: Colors.gray[10], // #E9EAEC
    borderRadius: moderateScale(9999),
    shadowColor: '#1F1F29',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: moderateScale(10),
    elevation: 5,
  },

  thumbHitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },

  thumbIconContainer: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '90deg' }],
  },

  bar: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },

  barLine: {
    position: 'absolute',
    width: scale(2.4),
    height: scale(9.6),
    backgroundColor: Colors.gray[30], // #8E949F
    left: '37.5%',
  },

  barLineRight: {
    left: '52.5%',
  },

  tickContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: verticalScale(22),
    alignSelf: 'stretch',
  },

  tickText: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    color: Colors.gray[60], // #54565F
  },
})

