import { ChangeEvent } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { TextFieldVariants } from './RHFConstans';

interface IRHFTextField extends Omit<TextFieldProps, 'variant'> {
  multiline?: boolean;
  variant?: TextFieldVariants;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const RHFTextField = ({
  multiline,
  variant,
  label,
  onChange,
  sx,
  ...props
}: IRHFTextField) => {
  return (
    <TextField
      className='min-h-10 w-full'
      label={label}
      multiline={multiline}
      variant={variant}
      // onChange={onChange}
      autoFocus
      sx={sx}
      {...props}
    />
  );
};

export default RHFTextField;
