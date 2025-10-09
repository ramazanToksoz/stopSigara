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
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
   
    marginBottom: verticalScale(-20),
    marginTop: verticalScale(200),
  },
  question: {
    fontSize: moderateScale(24),
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[80],
    textAlign: 'center',
    marginBottom: verticalScale(50),
    lineHeight: moderateScale(24),
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: scale(16),
    flexWrap: 'wrap',
    width: '100%',
    height: verticalScale(54),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    gap: scale(10),
    minHeight: verticalScale(48),
    height: verticalScale(54),
    flex: 1,
    backgroundColor: Colors.gray[10], // #E9EAEC
    borderRadius: moderateScale(14),
  },
  cardSelected: {
    backgroundColor: Colors.gray[80], // #3C3E44
    shadowColor: '#32313D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(12),
    elevation: 8,
  },
  cardText: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: -0.007,
    fontFamily: 'DMSans-Bold',
    color: Colors.gray[60], // #54565F
  },
  cardTextSelected: {
    color: Colors.gray[0], // #FFFFFF
  },
  buttonContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(200),
    paddingTop: verticalScale(20),
  },
})

