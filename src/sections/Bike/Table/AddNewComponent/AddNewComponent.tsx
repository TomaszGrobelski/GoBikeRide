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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import 'dayjs/locale/pl';

import CustomToaster from '@/ui/atmos/Toaster/CustomToaster';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TextFieldProps } from '@mui/material/TextField';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { tableRowSchema } from '../new-component.schema';
import TableTextField from '../TableComponents/TableTextField';

type FormFields = z.infer<typeof tableRowSchema>;

interface IAddNewComponent {
    bikeId: number | undefined;
}

const AddNewComponent = ({ bikeId }: IAddNewComponent) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(tableRowSchema),
    });

    const { mutate: addComponent, isPending } = useAddComponent();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (bikeId === undefined) {
            toast.error('Nie ma roweru z takim ID');
            return;
        }
        const newComponent = {
            name: data.name,
            maintenanceDate: data.maintenanceDate,
            currentState: data.currentState,
            currentMileageKm: parseFloat(data.currentMileageKm),
            maintenanceCost: parseFloat(data.maintenanceCost),
        };

        addComponent({
            bikeId: bikeId,
            ...newComponent,
        });

        reset({
            name: '',
            maintenanceDate: undefined,
            currentState: '',
            currentMileageKm: '',
            maintenanceCost: '',
        });
    };

    return (
        <TableRow
            key='New component'
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                    borderTop: 1,
                    py: 5,
                    borderColor: '#B1C181',
                },
            }}
        >
            <TableCell component='th' scope='row' align='center' sx={{ verticalAlign: 'middle' }}>
                <TableTextField
                    name='name'
                    id='name'
                    placeholder='Nazwa osprzętu'
                    register={register}
                    error={errors.name}
                />
            </TableCell>

            <TableCell align='center' className='w-3/4' sx={{ verticalAlign: 'middle' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pl'>
                    <Controller
                        name='maintenanceDate'
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                            <DatePicker
                                className='min-h-16'
                                value={value ? dayjs(value) : null}
                                onChange={(date: Dayjs | null) => onChange(date ? date.toDate() : null)}
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        inputRef: ref,
                                        error: !!errors.maintenanceDate,
                                    } as TextFieldProps,
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>
                {errors.maintenanceDate && <p className='text-red-500'>{errors.maintenanceDate.message}</p>}
            </TableCell>

            <TableCell align='center' sx={{ verticalAlign: 'middle' }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'></InputLabel>
                        <Select
                            {...register('currentState')}
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            label='Stan'
                            className='min-h-16'
                        >
                            <MenuItem value='Bardzo Dobry'>Bardzo Dobry</MenuItem>
                            <MenuItem value='Dobry'>Dobry</MenuItem>
                            <MenuItem value='Sredni'>Sredni</MenuItem>
                            <MenuItem value='Zły'>Zły</MenuItem>
                            <MenuItem value='Bardzo zły'>Bardzo zły</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {errors.currentState && <p className='text-red-500'>{errors.currentState.message}</p>}
            </TableCell>

            <TableCell align='center'>
                <TableTextField
                    name='currentMileageKm'
                    id='currentMileageKm'
                    placeholder='Aktualny przebieg'
                    register={register}
                    error={errors.currentMileageKm}
                />
            </TableCell>

            <TableCell align='center'>
                <TableTextField
                    name='maintenanceCost'
                    id='maintenanceCost'
                    placeholder='Koszt konserwacji'
                    register={register}
                    error={errors.maintenanceCost}
                />
            </TableCell>

            <TableCell align='center'>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {isPending ? (
                        <Icon icon='line-md:loading-loop' fontSize={24} />
                    ) : (
                        <IconButton
                            icon='basil:add-outline'
                            ariaLabel='Dodaj nowy element'
                            color='#5F286B'
                            onClick={handleSubmit(onSubmit)}
                            disabled={isPending || isSubmitting}
                            size={24}
                        />
                    )}
                </Box>
            </TableCell>

            <CustomToaster />
        </TableRow>
    );
};

export default AddNewComponent;
