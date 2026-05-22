import React from 'react';
import { Skeleton, TableRow, TableCell } from '@mui/material';

export const TableSkeleton: React.FC<{ rowsCount?: number; colsCount?: number }> = ({
  rowsCount = 5,
  colsCount = 4,
}) => {
  return (
    <>
      {Array.from({ length: rowsCount }).map((_, rIdx) => (
        <TableRow key={rIdx}>
          {Array.from({ length: colsCount }).map((_, cIdx) => (
            <TableCell key={cIdx}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
