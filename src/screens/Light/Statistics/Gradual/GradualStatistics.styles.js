import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD', // Screen Background
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
    backgroundColor: '#E9EAEC', // Gray/10
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
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    shadowColor: 'rgba(15, 23, 42, 0.12)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },

  tabPillText: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(13), // Body xs/SemiBold
    lineHeight: moderateScale(16),
    color: '#54565F', // Gray/60
    letterSpacing: -0.065,
  },

  tabPillTextActive: {
    color: '#54565F',
  },

  // Chart Section
  chartSection: {
    height: verticalScale(454),
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
    fontSize: moderateScale(16), // Body md/Bold
    lineHeight: moderateScale(22),
    color: '#54565F', // Gray/60
    letterSpacing: -0.112,
  },

  trendContainer: {
    alignItems: 'flex-end',
  },

  trendText: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    letterSpacing: -0.065,
  },

  trendDown: {
    color: '#58B658', // Brand/60 - pozitif trend
  },

  trendUp: {
    color: '#FF6565', // Semantic/Destructive - negatif trend
  },

  chartContainer: {
    flexDirection: 'row',
    height: verticalScale(327),
    marginBottom: verticalScale(48),
    gap: scale(22), // Figma'da 22px gap
  },

  yAxis: {
    width: scale(21),
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: verticalScale(39), // Figma'da 39px gap
  },

  yAxisLabel: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(16), // Body md/SemiBold
    lineHeight: moderateScale(22),
    color: '#6C707A', // Gray/40
    textAlign: 'right',
    letterSpacing: -0.112,
  },

  chartContent: {
    width: scale(318), // Figma'da 318px
    height: verticalScale(314),
    position: 'relative',
  },

  chartGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#E9EAEC', // Gray/10
    opacity: 0.3,
  },

  chartLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  dataPoint: {
    position: 'absolute',
    width: scale(8),
    height: scale(8),
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  actualDataPoint: {
    backgroundColor: '#58B658', // Brand/60 - gerçek tüketim
  },

  targetDataPoint: {
    backgroundColor: '#7B68EE', // Target line color - hedef tüketim
  },

  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(318),
    height: verticalScale(48), // Figma'da 48px yükseklik
    marginLeft: scale(43), // Y-axis'den sonra 43px offset
  },

  xAxisItem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: verticalScale(8),
    height: verticalScale(48),
    justifyContent: 'center',
  },

  xAxisDay: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(14), // Body sm/Bold
    lineHeight: moderateScale(20),
    color: '#6C707A', // Gray/40
    opacity: 0.8,
    letterSpacing: -0.084,
  },

  xAxisDate: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(14), // Body sm/Medium
    lineHeight: moderateScale(20),
    color: '#6C707A', // Gray/40
    opacity: 0.6,
    letterSpacing: -0.084,
  },

  xAxisValue: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(10),
    lineHeight: moderateScale(12),
    color: '#58B658', // Brand/60
    marginTop: verticalScale(2),
  },

  // Metrics Section
  metricsSection: {
    flexDirection: 'column',
    gap: verticalScale(24),
  },

  mainMetricCard: {
    backgroundColor: '#FFFFFF', // Gray/0 (White)
    borderRadius: 16,
    padding: scale(24),
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },

  mainMetricTop: {
    flexDirection: 'column',
    gap: verticalScale(12),
    marginBottom: verticalScale(12),
  },

  mainMetricValue: {
    fontFamily: 'DMSans-Bold',
    fontSize: moderateScale(24), // Body 2xl/Bold
    lineHeight: moderateScale(32),
    color: '#58B658', // Brand/60
    letterSpacing: -0.288,
  },

  mainMetricLabel: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(18), // Body lg/Medium
    lineHeight: moderateScale(24),
    color: '#54565F', // Gray/60
    letterSpacing: -0.144,
  },

  mainMetricDescription: {
    fontFamily: 'DMSans-Medium',
    fontSize: moderateScale(16), // Body md/Medium
    lineHeight: moderateScale(22),
    color: '#8E949F', // Gray/30
    letterSpacing: -0.112,
  },

  secondaryCardsContainer: {
    flexDirection: 'row',
    gap: scale(24),
  },

  secondaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Gray/0 (White)
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
    fontSize: moderateScale(26), // Heading xs/ExtraBold
    lineHeight: moderateScale(32),
    color: '#58B658', // Brand/60
    letterSpacing: -0.338,
  },

  secondaryCardLabel: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: moderateScale(14), // Body sm/SemiBold
    lineHeight: moderateScale(20),
    color: '#6C707A', // Gray/40
    letterSpacing: -0.084,
  },

  // Chart Legend
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(12),
    gap: scale(20)
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6)
  },
  legendDot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4)
  },
  legendText: {
    fontSize: scale(12),
    fontFamily: 'DMSans-Medium',
    color: '#6C707A'
  },
});
