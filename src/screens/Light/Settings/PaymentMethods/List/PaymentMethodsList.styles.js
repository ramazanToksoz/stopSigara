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
  optionsContainer: {
    marginBottom: 24,
  },
  listItem: {
    backgroundColor: Colors.gray[0],
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
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
