import React from 'react';
import { Chip } from '@mui/material';

export interface StatusBadgeProps {
  label: string;
  status?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'small' | 'medium';
}

const statusColorMap = {
  success: { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669', border: 'rgba(16, 185, 129, 0.2)' },
  warning: { bg: 'rgba(245, 158, 11, 0.1)', text: '#d97706', border: 'rgba(245, 158, 11, 0.2)' },
  error: { bg: 'rgba(239, 68, 68, 0.1)', text: '#dc2626', border: 'rgba(239, 68, 68, 0.2)' },
  info: { bg: 'rgba(37, 99, 235, 0.1)', text: '#2563eb', border: 'rgba(37, 99, 235, 0.2)' },
  neutral: { bg: 'rgba(107, 114, 128, 0.1)', text: '#4b5563', border: 'rgba(107, 114, 128, 0.2)' },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  status = 'neutral',
  size = 'small',
}) => {
  const colors = statusColorMap[status];

  return (
    <Chip
      label={label}
      size={size}
      sx={{
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        fontWeight: 600,
        fontSize: '0.75rem',
        borderRadius: '6px',
      }}
    />
  );
};
