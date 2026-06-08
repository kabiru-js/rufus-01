import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export interface ChartDataPoint {
  label: string;
  value: number;
}

interface MetricChartProps {
  title: string;
  data: ChartDataPoint[];
  height?: number;
  color?: string;
}

export const MetricChart: React.FC<MetricChartProps> = ({
  title,
  data,
  height = 180,
  color = '#2563eb',
}) => {
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const points = data
    .map((d, index) => {
      const x = (index / (data.length - 1)) * 300;
      const y = height - (d.value / maxValue) * (height - 30);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <svg viewBox={`0 0 300 ${height}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
          {data.map((d, i) => {
            const cx = (i / (data.length - 1)) * 300;
            const cy = height - (d.value / maxValue) * (height - 30);
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill="#ffffff"
                stroke={color}
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        {data.map((d, i) => (
          <Typography key={i} variant="caption" color="text.secondary">
            {d.label}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};
