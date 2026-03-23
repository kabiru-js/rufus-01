import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
}) => {
  const titleId = title ? `dialog-title-${title.toLowerCase().replace(/\s+/g, '-')}` : undefined;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      aria-labelledby={titleId}
      aria-modal="true"
      PaperProps={{
        elevation: 8,
        sx: {
          borderRadius: 3,
          p: 1,
        },
      }}
    >
      {title && (
        <DialogTitle id={titleId} sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">{title}</Typography>
          <IconButton aria-label="close modal" onClick={onClose} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent sx={{ p: 2.5 }}>{children}</DialogContent>
      {actions && <DialogActions sx={{ px: 2.5, pb: 2 }}>{actions}</DialogActions>}
    </Dialog>
  );
};
