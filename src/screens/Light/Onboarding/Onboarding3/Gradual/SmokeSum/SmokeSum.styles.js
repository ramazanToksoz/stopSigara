import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../../../../constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[5],
  },
  statusBar: {
    marginTop: verticalScale(30),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  mainContent: {
    marginTop: verticalScale(140),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),

  },
  question: {
    fontSize: moderateScale(25),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    textAlign: 'center',
    marginBottom: verticalScale(50),
    lineHeight: moderateScale(24),
  },
  valueText: {
    fontSize: moderateScale(80),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    textAlign: 'center',
    marginBottom: verticalScale(60),
    lineHeight: moderateScale(88),
  },
  sliderContainer: {
    width: '100%',
    paddingHorizontal: scale(10),
  },
  buttonContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(60),
    paddingTop: verticalScale(30),
    
  },
})

