import { StyleSheet ,StatusBar} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(50),
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(16),
  },
  gridContainer: {
    paddingBottom: verticalScale(20),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: verticalScale(16),
  },
  
  // Achievement Card
  achievementCard: {
    backgroundColor: '#FFFFFF', // Gray/0 from Figma
    borderRadius: moderateScale(14),
    padding: scale(16),
    width: '30%', // 3 columns with space between
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    // Additional shadow for the second shadow
    shadowColor: 'rgba(44, 44, 50, 0.16)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  achievementContent: {
    alignItems: 'center',
    gap: verticalScale(4),
  },
  
  // Achievement Badge
  achievementBadge: {
    width: scale(64),
    height: scale(64),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(4),
  },
  lockedBadge: {
    // Locked achievements have different styling
    opacity: 0.6,
  },
  achievementIcon: {
    width: scale(24),
    height: scale(24),
  },
  lockedIcon: {
    tintColor: '#8E949F', // Gray/30 for locked achievements
  },
  
  // Achievement Title
  achievementTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: '#54565F', // Gray/60 from Figma
    textAlign: 'center',
    letterSpacing: -0.065,
  },
  lockedTitle: {
    color: '#8E949F', // Gray/30 for locked achievements
  },
});
