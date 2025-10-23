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
