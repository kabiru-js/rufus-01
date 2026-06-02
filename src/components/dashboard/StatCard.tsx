import React, { ReactNode } from 'react';
import { Card, Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  timeframe?: string;
  icon?: ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  timeframe = 'vs last month',
  icon,
}) => {
  const isPositive = change !== undefined && change >= 0;

  return (
    <Card
      sx={{
        p: 2.5,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          {title}
        </Typography>
        {icon && <Box sx={{ color: 'primary.main' }}>{icon}</Box>}
      </Box>

      <Typography variant="h2" fontWeight={700}>
        {value}
      </Typography>

      {change !== undefined && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {isPositive ? (
            <TrendingUpIcon sx={{ color: 'success.main', fontSize: 18 }} />
          ) : (
            <TrendingDownIcon sx={{ color: 'error.main', fontSize: 18 }} />
          )}
          <Typography
            variant="caption"
            sx={{
              color: isPositive ? 'success.main' : 'error.main',
              fontWeight: 600,
            }}
          >
            {isPositive ? `+${change}%` : `${change}%`}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {timeframe}
          </Typography>
        </Box>
      )}
    </Card>
  );
};
