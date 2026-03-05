import React, { ReactNode } from 'react';
import { Card as MuiCard, CardHeader, CardContent, CardActions, Divider, Typography } from '@mui/material';

export interface CardProps {
  title?: string;
  subheader?: string;
  action?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  elevation?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  subheader,
  action,
  footer,
  children,
  elevation = 1,
}) => {
  return (
    <MuiCard
      elevation={elevation}
      sx={{
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      {(title || action) && (
        <>
          <CardHeader
            title={<Typography variant="h4">{title}</Typography>}
            subheader={subheader ? <Typography variant="body2" color="text.secondary">{subheader}</Typography> : undefined}
            action={action}
            sx={{ px: 3, py: 2 }}
          />
          <Divider />
        </>
      )}
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        {children}
      </CardContent>
      {footer && (
        <>
          <Divider />
          <CardActions sx={{ px: 3, py: 2, bgcolor: 'background.default' }}>
            {footer}
          </CardActions>
        </>
      )}
    </MuiCard>
  );
};
