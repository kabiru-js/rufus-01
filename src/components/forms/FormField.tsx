import React from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';

export interface FormFieldProps extends Omit<TextFieldProps, 'error'> {
  label: string;
  error?: string | null;
  helperText?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label={label}
        error={Boolean(error)}
        helperText={error || helperText}
        size="small"
        InputLabelProps={{ shrink: true }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
        {...props}
      />
    </Box>
  );
};
