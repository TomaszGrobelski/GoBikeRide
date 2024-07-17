import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

import { TextFieldVariants } from './RHFConstans';

interface IRHFTextField {
  multiline?: boolean;
  variant?: TextFieldVariants;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const RHFTextField = ({
  multiline,
  variant,
  label,
  onChange
}: IRHFTextField) => {
  return (
    <TextField
      className='min-h-10 w-full'
      label={label}
      multiline={multiline}
      variant={variant}
      onChange={onChange}
    />
  );
};

export default RHFTextField;
