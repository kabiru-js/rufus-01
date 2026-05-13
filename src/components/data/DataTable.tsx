import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Box,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '../../hooks/useDebounce';

export interface Column<T> {
  id: keyof T;
  label: string;
  minWidth?: number;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  searchPlaceholder?: string;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  rows,
  searchPlaceholder = 'Search records...',
}: DataTableProps<T>) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const debouncedSearch = useDebounce(search, 250);

  const filteredRows = useMemo(() => {
    if (!debouncedSearch) return rows;
    const lower = debouncedSearch.toLowerCase();
    return rows.filter((r) =>
      Object.values(r).some((val) => String(val).toLowerCase().includes(lower))
    );
  }, [rows, debouncedSearch]);

  const pagedRows = useMemo(() => {
    return filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filteredRows, page, rowsPerPage]);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ p: 2 }}>
        <TextField
          size="small"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ width: 280 }}
        />
      </Box>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={String(col.id)} style={{ minWidth: col.minWidth }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedRows.map((row, idx) => (
              <TableRow hover key={idx}>
                {columns.map((col) => (
                  <TableCell key={String(col.id)}>
                    {col.render ? col.render(row[col.id], row) : row[col.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </Paper>
  );
}
