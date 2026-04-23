import React, { ReactNode } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Box, Typography } from '@mui/material';

export const ProtectedRoute: React.FC<{ children: ReactNode; requiredRole?: string }> = ({
  children,
  requiredRole,
}) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4">Please authenticate to continue.</Typography>
      </Box>
    );
  }

  if (requiredRole && user?.role !== requiredRole && user?.role !== 'admin') {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" color="error">Access Denied: Insufficient permissions.</Typography>
      </Box>
    );
  }

  return <>{children}</>;
};
