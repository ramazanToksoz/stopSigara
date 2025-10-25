import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  groupContainer: {
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: Colors.gray[0],
    shadowColor: '#2C2C32',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  listItem: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 0,
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  firstItem: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  lastItem: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
