import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export interface ActivityEvent {
  id: string;
  title: string;
  timestamp: string;
  type: 'success' | 'warning' | 'info';
}

export const ActivityFeed: React.FC<{ events: ActivityEvent[] }> = ({ events }) => {
  const getIcon = (type: ActivityEvent['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircleOutlineIcon fontSize="small" sx={{ color: 'success.main' }} />;
      case 'warning':
        return <ErrorOutlineIcon fontSize="small" sx={{ color: 'warning.main' }} />;
      default:
        return <InfoOutlinedIcon fontSize="small" sx={{ color: 'info.main' }} />;
    }
  };

  return (
    <Paper sx={{ p: 2.5, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
        Recent Activity
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {events.map((evt) => (
          <Box key={evt.id} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'background.default' }}>
              {getIcon(evt.type)}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" fontWeight={500}>
                {evt.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {evt.timestamp}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
