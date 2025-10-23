import { StyleSheet } from 'react-native';
import {verticalScale} from "react-native-size-matters"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },
  
  statusBar: {
    height: 44,
    backgroundColor: 'transparent',
  },
  
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  
  // Upgrade Offer Card Styles
  offerCard: {
    backgroundColor: '#58B658',
    margintop:verticalScale(20),
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 24,
    shadowColor: 'rgba(15, 23, 42, 0.08)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  
  waveBackground: {
    position: 'absolute',
    top: -32,
    left: 0,
    right: 0,
    height: 141,
    backgroundColor: 'transparent', // Wave SVG would go here
  },
  
  offerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  
  offerIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  offerIcon: {
    width: 32,
    height: 32,
    tintColor:"#58B658"
  },
  
  offerText: {
    flex: 1,
    justifyContent: 'center',
  },
  
  offerTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 28,
    color: '#FFFFFF',
    letterSpacing: -0.2,
    marginBottom: 4,
  },
  
  offerSubtitle: {
    fontFamily: 'DM Sans',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#DCF7DC',
    letterSpacing: -0.084,
  },
  
  // List Group Styles
  listGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    overflow: 'hidden',
  },
  
  listItemWithDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E9EAEC',
  },
  
  // Logout text styling
  logoutText: {
    color: '#FF6565',
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.112,
  },
});
