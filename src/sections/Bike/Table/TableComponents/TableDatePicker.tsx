import { TextFieldProps } from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { Controller } from 'react-hook-form';

interface TableDatePickerProps {
  name: string;
  control: any; // Możesz dodać dokładniejszy typ
  errors: any; // Możesz dodać dokładniejszy typ
}

const TableDatePicker = ({ name, control, errors }: TableDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pl'>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <DatePicker
            className='min-h-16'
            value={value ? dayjs(value) : null}
            onChange={(date: Dayjs | null) =>
              onChange(date?.toDate() || undefined)
            } // Konwertuj Dayjs do Date
            slotProps={{
              textField: {
                fullWidth: true,
                inputRef: ref,
                error: !!errors[name],
              } as TextFieldProps,
            }}
          />
        )}
      />
      {errors[name] && <p className='text-red-500'>{errors[name]?.message}</p>}
    </LocalizationProvider>
  );
};

export default TableDatePicker;
