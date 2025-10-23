import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },
  statusBar: {
    height: verticalScale(44),
  },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  confettiItem: {
    position: 'absolute',
    width: moderateScale(8),
    height: moderateScale(8),
    backgroundColor: '#58B658',
    borderRadius: moderateScale(4),
    top: verticalScale(100),
    left: scale(50),
  },
  confettiItem2: {
    backgroundColor: '#FF6B6B',
    top: verticalScale(150),
    left: scale(100),
  },
  confettiItem3: {
    backgroundColor: '#4ECDC4',
    top: verticalScale(200),
    left: scale(200),
  },
  confettiItem4: {
    backgroundColor: '#45B7D1',
    top: verticalScale(120),
    left: scale(300),
  },
  confettiItem5: {
    backgroundColor: '#96CEB4',
    top: verticalScale(180),
    left: scale(150),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    zIndex: 1,
  },
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: moderateScale(16),
    padding: moderateScale(24),
    alignItems: 'center',
    gap: verticalScale(24),
    width: '100%',
    maxWidth: scale(361),
  },
  badgeContainer: {
    alignItems: 'center',
  },
  badge: {
    width: moderateScale(130),
    height: moderateScale(130),
    borderRadius: moderateScale(65),
    backgroundColor: Colors.gray[80],
    justifyContent: 'center',
    alignItems: 'center',
  },
  crownIcon: {
    width: moderateScale(70),
    height: moderateScale(70),
    tintColor: Colors.brand[60],
  },
  textContainer: {
    alignItems: 'center',
    gap: verticalScale(4),
    width: '100%',
  },
  title: {
    fontFamily: 'DM Sans',
    fontSize: moderateScale(24),
    fontWeight: '700',
    lineHeight: verticalScale(32),
    color: '#54565F',
    textAlign: 'center',
    letterSpacing: moderateScale(-0.288),
  },
  subtitle: {
    fontFamily: 'DM Sans',
    fontSize: moderateScale(16),
    fontWeight: '400',
    lineHeight: verticalScale(22),
    color: '#54565F',
    textAlign: 'center',
    letterSpacing: moderateScale(-0.112),
  },
  button: {
    width: '100%',
    backgroundColor: '#58B658',
    borderRadius: moderateScale(14),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    shadowColor: '#58B658',
    shadowOffset: {
      width: 0,
      height: verticalScale(5),
    },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(12),
    elevation: 5,
  },
  homeIndicator: {
    height: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(8),
  },
  homeIndicatorBar: {
    width: scale(134),
    height: verticalScale(5),
    backgroundColor: '#000000',
    borderRadius: moderateScale(10),
  },
});
