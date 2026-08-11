import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
  activePath?: string;
  onNavigate?: (path: string) => void;
}

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { label: 'Transactions', icon: <ReceiptIcon />, path: '/transactions' },
  { label: 'Team', icon: <PeopleIcon />, path: '/team' },
  { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export const AppSidebar: React.FC<AppSidebarProps> = ({
  open,
  onClose,
  activePath = '/dashboard',
  onNavigate,
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 260, bgcolor: 'background.paper', borderRight: '1px solid', borderColor: 'divider' },
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Typography variant="h4" fontWeight={700} color="primary">
          GitHub-X
        </Typography>
      </Box>
      <Divider />
      <List sx={{ px: 1, py: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={activePath === item.path}
              onClick={() => {
                onNavigate?.(item.path);
                onClose();
              }}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon sx={{ color: activePath === item.path ? 'primary.main' : 'text.secondary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: activePath === item.path ? 600 : 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
