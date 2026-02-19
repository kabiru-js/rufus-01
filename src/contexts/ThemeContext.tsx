import React, { createContext, useContext, useMemo, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { getAppTheme } from '../theme';

interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
  setMode: (mode: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<'light' | 'dark'>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('app_theme_mode');
      if (saved === 'dark' || saved === 'light') {
        setModeState(saved);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setModeState('dark');
      }
    } catch {
      // fallback
    }
    setIsMounted(true);
  }, []);

  const setMode = (newMode: 'light' | 'dark') => {
    setModeState(newMode);
    try {
      window.localStorage.setItem('app_theme_mode', newMode);
    } catch (e) {
      console.warn('Unable to persist theme to localStorage', e);
    }
  };

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setMode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a CustomThemeProvider');
  }
  return context;
};
