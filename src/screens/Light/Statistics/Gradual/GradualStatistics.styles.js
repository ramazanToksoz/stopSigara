import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background from Figma
  },
  
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(20),
  },

  // Improvements Section
  improvementsSection: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(12),
    marginBottom: verticalScale(24),
  },

  improvementsMain: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: verticalScale(12),
    width: '100%',
  },

  improvementsTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(12),
    width: '100%',
  },

  improvementIcon: {
    width: scale(50),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(13),
  },

  iconImage: {
    width: scale(24),
    height: scale(24),
    tintColor: '#58B658', // Brand/60 color from Figma
  },

  improvementTitle: {
    fontFamily: 'DMSans-ExtraBold',
    fontSize: moderateScale(30), // Heading sm/ExtraBold
    lineHeight: moderateScale(38),
    color: '#54565F', // Gray/60
    letterSpacing: -0.39,
    textAlign: 'left',
  },

  improvementDescription: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(16), // Body md/Regular
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60
    textAlign: 'center',
    letterSpacing: -0.112,
    width: '100%',
  },

  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(8),
  },

  viewAllButtonText: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14), // Body sm/Bold
    lineHeight: moderateScale(20),
    color: '#58B658', // Brand/60
    letterSpacing: -0.084,
  },

  arrowIcon: {
    width: scale(10.667),
    height: scale(10.667),
    tintColor: '#58B658',
  },

  // Tab Group Pills
  tabGroupContainer: {
    backgroundColor: '#E9EAEC', // Gray/10 from Figma
    flexDirection: 'row',
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(4),
    borderRadius: 16,
    marginBottom: verticalScale(24),
    gap: scale(8),
  },

  tabPill: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(6),
    borderRadius: 12,
    minHeight: verticalScale(32),
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabPillActive: {
    backgroundColor: '#FFFFFF', // Gray/0 (White) from Figma
    shadowColor: 'rgba(15, 23, 42, 0.12)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },

  tabPillText: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(13), // Body xs/SemiBold from Figma
    lineHeight: moderateScale(16),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.065,
  },

  tabPillTextActive: {
    color: '#54565F',
  },

  // Chart Section
  chartSection: {
    height: verticalScale(467), // Figma height
    marginBottom: verticalScale(24),
  },

  chartHeader: {
    marginBottom: verticalScale(32),
  },

  chartTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  chartTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(16), // Body md/Bold from Figma
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.112,
  },

  chartSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: moderateScale(13), // Body xs/Regular from Figma
    lineHeight: moderateScale(16),
    color: '#60646C', // Gray/50 from Figma
    letterSpacing: -0.065,
    marginTop: verticalScale(2),
  },

  chartContainer: {
    height: verticalScale(327), // Figma chart height
    marginBottom: verticalScale(12),
  },

  // Chart Legend
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(24),
    marginTop: verticalScale(20), // Üstten margin eklendi
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },

  legendDot: {
    width: scale(20),
    height: scale(5),
    borderRadius: scale(2),
  },

  legendText: {
    fontSize: moderateScale(13), // Body xs/Regular from Figma
    fontFamily: 'DMSans-Regular',
    color: '#8E949F', // Gray/30 from Figma
    letterSpacing: -0.065,
  },

  // Metrics Section
  metricsSection: {
    flexDirection: 'column',
    gap: verticalScale(24),
  },

  mainMetricCard: {
    backgroundColor: '#FFFFFF', // Gray/0 (White) from Figma
    borderRadius: 16,
    padding: scale(24),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    height: verticalScale(134), // Figma height
  },

  mainMetricTop: {
    flexDirection: 'column',
    gap: verticalScale(12),
    marginBottom: verticalScale(12),
  },

  mainMetricValue: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(24), // Body 2xl/Bold from Figma
    lineHeight: moderateScale(32),
    color: '#58B658', // Brand/60 from Figma
    letterSpacing: -0.288,
  },

  mainMetricLabel: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(18), // Body lg/Medium from Figma
    lineHeight: moderateScale(24),
    color: '#54565F', // Gray/60 from Figma
    letterSpacing: -0.144,
  },

  mainMetricDescription: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(16), // Body md/Medium from Figma
    lineHeight: moderateScale(22),
    color: '#8E949F', // Gray/30 from Figma
    letterSpacing: -0.112,
  },

  secondaryCardsContainer: {
    flexDirection: 'row',
    gap: scale(24),
  },

  secondaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Gray/0 (White) from Figma
    borderRadius: 16,
    padding: scale(18),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    gap: verticalScale(12),
  },

  secondaryCardIcon: {
    width: scale(32),
    height: scale(32),
  },

  cardIcon: {
    width: '100%',
    height: '100%',
  },

  secondaryCardText: {
    flexDirection: 'column',
    gap: verticalScale(12),
  },

  secondaryCardValue: {
    fontFamily: 'DMSans-ExtraBold',
    fontSize: moderateScale(26), // Heading xs/ExtraBold from Figma
    lineHeight: moderateScale(32),
    color: '#58B658', // Brand/60 from Figma
    letterSpacing: -0.338,
  },

  secondaryCardLabel: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(14), // Body sm/SemiBold from Figma
    lineHeight: moderateScale(20),
    color: '#6C707A', // Gray/40 from Figma
    letterSpacing: -0.084,
  },

  // Pointer Label Styles
  pointerLabelContainer: {
    position: 'absolute',
    top: -40,
    left: -50,
    width: 100,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pointerLabel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E9EAEC',
  },

  pointerLabelText: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(12),
    color: '#54565F',
    textAlign: 'center',
  },
});