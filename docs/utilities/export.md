# Data Export Utilities

The export utility exports structured objects and tables directly to standard CSV with UTF-8 BOM encoding for seamless Excel import.

## Example
```typescript
import { exportToCSV } from '@/utils/export';
import { mockTransactions } from '@/mocks/transactions';

exportToCSV(mockTransactions, 'transactions-q3.csv');
```
