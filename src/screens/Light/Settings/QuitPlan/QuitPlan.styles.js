import { StyleSheet } from 'react-native';
import { verticalScale } from "react-native-size-matters";

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
  
  // Section Styles
  section: {
    marginBottom: 32,
  },
  
  sectionTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#6C707A',
    letterSpacing: -0.084,
    marginBottom: 16,
  },
  
  // Options Container
  optionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: 'rgba(44, 44, 50, 0.06)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    overflow: 'hidden',
    marginBottom: 24,
  },
  
  listItemWithDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E9EAEC',
  },
  
  // Date Text Styling
  dateText: {
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    color: '#6C707A',
    letterSpacing: -0.065,
  },
  
  // TextArea Styling
  textArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#6A7384',
    padding: 16,
    minHeight: 140,
    textAlignVertical: 'top',
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#54565F',
    letterSpacing: -0.112,
  },
});


