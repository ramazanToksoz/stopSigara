import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[0],
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  appTitle: {
    fontSize: 28,
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.gray[60],
    textAlign: 'center',
  },
  loadingContainer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  versionContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  versionText: {
    fontSize: 12,
    fontFamily: 'DMSans-Medium',
    color: Colors.gray[40],
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});