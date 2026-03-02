import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text' | 'ghost';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  loading = false,
  disabled,
  startIcon,
  sx,
  ...props
}) => {
  const isGhost = variant === 'ghost';
  const muiVariant = isGhost ? 'text' : variant;

  return (
    <MuiButton
      variant={muiVariant}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : startIcon}
      sx={{
        borderRadius: 2,
        fontWeight: 600,
        textTransform: 'none',
        px: 2.5,
        py: 1,
        ...(isGhost && {
          color: 'text.secondary',
          '&:hover': { bgcolor: 'action.hover', color: 'text.primary' },
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
