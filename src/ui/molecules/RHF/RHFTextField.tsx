import React, { ChangeEvent, forwardRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { TextFieldVariants } from './RHFConstans';

interface IRHFTextField extends Omit<TextFieldProps, 'variant'> {
  multiline?: boolean;
  variant?: TextFieldVariants;
  label: string;
  error?: boolean;
  helperText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const RHFTextField = forwardRef<HTMLInputElement, IRHFTextField>(
  (
    { multiline, variant, label, error, helperText, onChange, sx, ...props },
    ref,
  ) => {
    return (
      <TextField
        className='min-h-10 w-full'
        label={label}
        multiline={multiline}
        variant={variant}
        autoFocus
        sx={sx}
        inputRef={ref}
        onChange={onChange}
        error={error}
        helperText={helperText}
        {...props}
      />
    );
  },
);

// Dodaj displayName, aby uniknąć błędu ESLint
RHFTextField.displayName = 'RHFTextField';

export default RHFTextField;
