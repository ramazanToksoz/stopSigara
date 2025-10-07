import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  backButton: {
    backgroundColor: Colors.border,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    flex: 0.4,
    alignItems: 'center',
  },
  backButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  finishButton: {
    backgroundColor: Colors.success,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    flex: 0.4,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  finishButtonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
});

