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
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 2, sm: 3, md: 4 },
            px: { xs: 2, sm: 3 },
            flexGrow: 1,
            transition: 'padding 0.2s ease-in-out',
          }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
};
