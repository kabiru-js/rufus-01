import React, { ReactNode } from 'react';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { getAppTheme } from '../../theme';

interface AppShellProps {
  children: ReactNode;
  mode?: 'light' | 'dark';
}

export const AppShell: React.FC<AppShellProps> = ({ children, mode = 'light' }) => {
  const theme = getAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Container maxWidth="xl" sx={{ py: 3, flexGrow: 1 }}>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
};
