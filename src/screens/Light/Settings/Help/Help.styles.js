import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(16),
  },
  tabGroupContainer: {
    marginBottom: verticalScale(24),
  },
  categoriesContainer: {
    marginBottom: verticalScale(24),
  },
  categoriesWrapper: {
    flexDirection: 'row',
    gap: scale(12),
  },
  categoryButton: {
    backgroundColor: Colors.gray[10], // #E9EAEC
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(8),
  },
  categoryButtonActive: {
    backgroundColor: Colors.brand[60], // #58B658
    shadowColor: Colors.brand[60],
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  categoryButtonText: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
  categoryButtonTextActive: {
    color: Colors.white,
  },
  searchContainer: {
    marginBottom: verticalScale(24),
  },
  searchField: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(14),
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#6A7384',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
  searchIconContainer: {
    width: scale(20),
    height: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
  },
  searchIcon: {
    fontSize: moderateScale(16),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(16),
    fontWeight: '400',
    lineHeight: moderateScale(22),
    letterSpacing: -0.112,
    color: Colors.gray[60], // #54565F
    fontFamily: 'DM Sans',
  },
  faqContainer: {
    paddingBottom: verticalScale(24),
  },
  supportContainer: {
    paddingBottom: verticalScale(24),
  },
  supportItem: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(16),
    marginBottom: verticalScale(12),
    shadowColor: '#2C2C32',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
});
