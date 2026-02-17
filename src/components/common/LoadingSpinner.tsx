import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  label?: string;
  fullscreen?: boolean;
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  label,
  fullscreen = false,
  size = 40,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        ...(fullscreen
          ? {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1400,
              bgcolor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(2px)',
            }
          : {
              py: 4,
              width: '100%',
            }),
      }}
    >
      <CircularProgress size={size} color="primary" />
      {label && (
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      )}
    </Box>
  );
};
