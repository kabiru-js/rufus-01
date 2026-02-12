import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { Severity } from '../types/common';

export interface NotificationItem {
  id: string;
  message: string;
  severity: Severity;
  duration?: number;
}

interface NotificationContextType {
  showNotification: (message: string, severity?: Severity, duration?: number) => void;
  closeNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationItem | null>(null);

  const showNotification = (message: string, severity: Severity = 'info', duration = 4000) => {
    setNotification({
      id: Math.random().toString(36).substring(2, 9),
      message,
      severity,
      duration,
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, closeNotification }}>
      {children}
      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={notification?.duration}
        onClose={closeNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={closeNotification} severity={notification?.severity || 'info'} variant="filled">
          {notification?.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
