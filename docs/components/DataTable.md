# DataTable Component

The `DataTable` provides search filtering, pagination, and sorting out of the box with Material-UI tables.

## Usage
```tsx
import { DataTable } from '@/components/data/DataTable';
import { StatusBadge } from '@/components/common/Badge';

const columns = [
  { id: 'id', label: 'ID', sortable: true },
  { id: 'customer', label: 'Customer', sortable: true },
  { id: 'amount', label: 'Amount ($)', sortable: true, render: (val) => `$${val.toLocaleString()}` },
  { id: 'status', label: 'Status', render: (val) => <StatusBadge label={val} status={val === 'completed' ? 'success' : 'warning'} /> },
];

<DataTable columns={columns} rows={mockTransactions} />
```
