import  TextField  from '@mui/material/TextField';
import { TextFieldVariants } from './RHFConstans';


interface IRHFTextField{
    multiline?:boolean;
    variant?: TextFieldVariants;
    label:string;
}
const RHFTextField = ({multiline,variant,label}:IRHFTextField) => {
  

  return (
    <TextField label={label} multiline={multiline} variant={variant} />
  );
};

export default RHFTextField;