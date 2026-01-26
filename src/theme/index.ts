import { createTheme, ThemeOptions } from '@mui/material/styles';
import { brandPalette } from './palette';
import { typographyConfig } from './typography';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: brandPalette.primary,
      secondary: brandPalette.secondary,
      success: brandPalette.success,
      warning: brandPalette.warning,
      error: brandPalette.error,
      background: {
        default: mode === 'light' ? '#f9fafb' : '#0f172a',
        paper: mode === 'light' ? '#ffffff' : '#1e293b',
      },
      text: {
        primary: mode === 'light' ? '#111827' : '#f8fafc',
        secondary: mode === 'light' ? '#4b5563' : '#94a3b8',
      },
    },
    typography: typographyConfig,
    shape: {
      borderRadius: 8,
    },
  };

  return createTheme(themeOptions);
};
