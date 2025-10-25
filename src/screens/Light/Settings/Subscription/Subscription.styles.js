import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/Colors';

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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray[60],
    marginBottom: 8,
    fontFamily: 'DM Sans',
  },
  planCard: {
    backgroundColor: Colors.gray[5],
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 76,
  },
  planInfo: {
    flex: 1,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  crownIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
    tintColor: Colors.brand[60],
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray[80],
    fontFamily: 'DM Sans',
  },
  planEndDate: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.gray[40],
    fontFamily: 'DM Sans',
  },
  manageButton: {
    backgroundColor: Colors.brand[60],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: Colors.brand[60],
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  manageButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.gray[0],
    fontFamily: 'DM Sans',
  },
  billingCard: {
    backgroundColor: Colors.gray[5],
    borderRadius: 16,
    padding: 16,
  },
  billingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[10],
  },
  billingLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.gray[40],
    fontFamily: 'DM Sans',
  },
  billingValue: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray[60],
    fontFamily: 'DM Sans',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  paymentMethodText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray[60],
    fontFamily: 'DM Sans',
  },
});
