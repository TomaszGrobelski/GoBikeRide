'use client';

import { useAddComponent } from '@/api/bikes/useBike';
import IconButton from '@/ui/atmos/IconButton';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  type: z.string().min(1, 'Nazwa jest wymagana'),
  maintenanceDate: z
    .date()
    .min(new Date(), 'Data konserwacji nie może być z przeszłości'),
  currentState: z.string().min(1, 'Stan jest wymagany'),
  currentMileageKm: z.string().min(1, 'Przebieg jest wymagany'),
  maintenanceCost: z.string().min(1, 'Koszt konserwacji jest wymagany')
});

type FormFields = z.infer<typeof schema>;

const AddNewComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });
  const addComponentMutation = useAddComponent();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await addComponentMutation.mutateAsync({
      bikeId: 12,
      type: data.type,
      maintenanceDate: data.maintenanceDate,
      currentState: data.currentState,
      currentMileageKm: parseFloat(data.currentMileageKm),
      maintenanceCost: parseFloat(data.maintenanceCost)
    });
    reset();
  };

  return (
    <TableRow
      key='New component'
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row' align='center'>
        <input
          {...register('type')}
          type='text'
          id='type'
          placeholder='Nazwa'
          className='text-center outline-none'
        />
      </TableCell>

      <TableCell align='center' className='w-3/4'>
        <DatePicker
          // {...register('maintenanceDate')}
          label='Wybierz datę konserwacji'
        />
      </TableCell>

      <TableCell align='center'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'></InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              //   value={condition}
              label=''
              //   onChange={handleChange}
            >
              <MenuItem value={5}>Bardzo Dobry</MenuItem>
              <MenuItem value={4}>Dobry</MenuItem>
              <MenuItem value={3}>Sredni</MenuItem>
              <MenuItem value={2}>Zły</MenuItem>
              <MenuItem value={1}>Bardo zły</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </TableCell>

      <TableCell align='center'>
        <input
          {...register('currentMileageKm')}
          type='text'
          id='currentMileageKm'
          placeholder='Przebieg'
          className='text-center outline-none'
        />
      </TableCell>

      <TableCell align='center'>
        <input
          {...register('maintenanceCost')}
          type='text'
          id='maintenanceCost'
          placeholder='Koszt konserwacji'
          className='text-center outline-none'
        />
      </TableCell>

      <TableCell align='center'>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            icon='basil:add-outline'
            ariaLabel='Dodaj nowy element'
            color='#5F286B'
            // onClick={handleSubmit(handleAddComponent)}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default AddNewComponent;
