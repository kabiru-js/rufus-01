export interface Transaction {
  id: string;
  customer: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  category: 'Subscription' | 'Invoice' | 'Consulting';
  date: string;
}

export const mockTransactions: Transaction[] = [
  { id: 'TXN-101', customer: 'Acme Corporation', amount: 12500, status: 'completed', category: 'Subscription', date: '2026-05-01T10:14:00Z' },
  { id: 'TXN-102', customer: 'Globex Corp', amount: 4300, status: 'pending', category: 'Invoice', date: '2026-05-02T11:22:00Z' },
  { id: 'TXN-103', customer: 'Soylent Ltd', amount: 890, status: 'completed', category: 'Consulting', date: '2026-05-02T14:45:00Z' },
  { id: 'TXN-104', customer: 'Initech Systems', amount: 6200, status: 'failed', category: 'Invoice', date: '2026-05-03T09:12:00Z' },
  { id: 'TXN-105', customer: 'Umbrella Tech', amount: 15400, status: 'completed', category: 'Subscription', date: '2026-05-03T16:05:00Z' },
  { id: 'TXN-106', customer: 'Hooli Media', amount: 2100, status: 'completed', category: 'Consulting', date: '2026-05-04T08:30:00Z' },
  { id: 'TXN-107', customer: 'Massive Dynamic', amount: 9800, status: 'pending', category: 'Subscription', date: '2026-05-04T12:00:00Z' },
];
