import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  formContainer: {
    marginBottom: 32,
  },
  fieldGroup: {
    marginBottom: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  halfFieldGroup: {
    flex: 1,
    marginRight: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray[40],
    marginBottom: 8,
    fontFamily: 'DM Sans',
  },
  inputContainer: {
    backgroundColor: Colors.gray[0],
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.gray[20],
    shadowColor: '#6A7384',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
});
