import React from 'react';
import { Avatar, Badge, styled } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': { transform: 'scale(.8)', opacity: 1 },
    '100%': { transform: 'scale(2.4)', opacity: 0 },
  },
}));

interface UserAvatarProps {
  name: string;
  src?: string;
  isOnline?: boolean;
  size?: number;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  src,
  isOnline = false,
  size = 40,
}) => {
  const avatar = (
    <Avatar
      src={src}
      alt={name}
      sx={{ width: size, height: size, bgcolor: 'primary.main', fontSize: size * 0.4 }}
    >
      {name.charAt(0).toUpperCase()}
    </Avatar>
  );

  if (!isOnline) return avatar;

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      {avatar}
    </StyledBadge>
  );
};
