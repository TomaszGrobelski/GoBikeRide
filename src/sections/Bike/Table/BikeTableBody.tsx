import { useState } from 'react';
import { useUpdateComponent } from '@/api/bikes/useBike';
import { useModalStore } from '@/store/useModalStore';
import TableIconButton from '@/ui/atmos/Buttons/TableButtons/TableIconButton';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { getCurrentBackgroundColor } from '@/utils/table/colors-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { IComponents } from '@/types/Bike/Components/components.types';

import DeleteComponentModalContent from './ModalContent/DeleteComponentModalContent';
import { tableRowSchema } from './new-component.schema';
import TableDatePicker from './TableComponents/TableDatePicker';
import TableTextField from './TableComponents/TableTextField';

interface IBikeTableBody {
  displayedData: IComponents[];
  handleChange: (event: SelectChangeEvent<string>) => void;
  condition: string;
  isLoading: boolean;
}
type FormFields = z.infer<typeof tableRowSchema>;

const BikeTableBody = ({
  displayedData,
  handleChange,
  condition,
  isLoading,
}: IBikeTableBody) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(tableRowSchema),
  });

  const { mutate: updateComponentMutation, isPending: isUpdating } =
    useUpdateComponent();

  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const [editedRowData, setEditedRowData] = useState<Partial<IComponents>>({});
  const handleDeleteSuccess = () => {
    closeModal();
  };

  const openDeleteModal = (name: string, componentId: number) =>
    openModal({
      children: (
        <DeleteComponentModalContent
          handleDeleteSuccess={handleDeleteSuccess}
          title={name}
          componentId={componentId}
        />
      ),
    });

  const handleEdit = (row: IComponents) => {
    setEditingRowId(row.id);

    setValue('name', row.name);
    setValue(
      'maintenanceDate',
      row.maintenanceDate ? new Date(row.maintenanceDate) : new Date(),
    );
    setValue('currentState', row.currentState);
    setValue('currentMileageKm', row.currentMileageKm.toString());
    setValue('maintenanceCost', row.maintenanceCost.toString());
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (!editingRowId) {
      return;
    }

    const updatedComponent = {
      name: data.name,
      maintenanceDate: data.maintenanceDate,
      currentState: data.currentState,
      currentMileageKm: parseFloat(data.currentMileageKm),
      maintenanceCost: parseFloat(data.maintenanceCost),
    };

    try {
      await updateComponentMutation({
        componentId: String(editingRowId),
        bikeId:
          displayedData.find((row) => row.id === editingRowId)?.bikeId || '',
        ...updatedComponent,
      });

      setEditingRowId(null);
    } catch (error) {
      console.error('Error updating component:', error);
    }
  };

  const handleInputChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;

    setEditedRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (isLoading) {
    return (
      <div className='absolute left-1/3 flex h-[400px] items-center justify-center'>
        <LoadingPage />
      </div>
    );
  }

  return (
    <TableBody>
      {displayedData.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component='th' scope='row' align='center'>
            {editingRowId === row.id ? (
              <TableTextField
                name='name'
                id={`name-${row.id}`}
                register={register}
                onChange={handleInputChange}
                error={errors.name}
                placeholder='Nazwa osprzętu'
              />
            ) : (
              row.name
            )}
          </TableCell>

          <TableCell align='center'>
            {editingRowId === row.id ? (
              <TableDatePicker
                name='maintenanceDate'
                control={control}
                errors={errors}
              />
            ) : (
              convertToDdMmYyyyFormat(row.maintenanceDate)
            )}
          </TableCell>

          <TableCell align='center'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                {editingRowId === row.id ? (
                  <Select
                    {...register('currentState')}
                    value={editedRowData.currentState || row.currentState}
                    onChange={handleInputChange}
                    name='currentState'
                    className='min-h-16'
                  >
                    <MenuItem value='Bardzo Dobry'>Bardzo Dobry</MenuItem>
                    <MenuItem value='Dobry'>Dobry</MenuItem>
                    <MenuItem value='Sredni'>Sredni</MenuItem>
                    <MenuItem value='Zły'>Zły</MenuItem>
                    <MenuItem value='Bardo zły'>Bardo zły</MenuItem>
                  </Select>
                ) : (
                  <div
                    key={row.id}
                    className='flex min-h-[40px] items-center justify-center rounded-lg text-[#000000] shadow-md shadow-gray-500'
                    style={{
                      backgroundColor: getCurrentBackgroundColor(
                        row.currentState,
                      ),
                    }}
                  >
                    {row.currentState}
                  </div>
                )}
              </FormControl>
            </Box>
            {errors.currentState && (
              <p className='text-red-500'>{errors.currentState.message}</p>
            )}
          </TableCell>

          <TableCell align='center'>
            {editingRowId === row.id ? (
              <TableTextField
                name='currentMileageKm'
                id={`currentMileageKm-${row.id}`}
                register={register}
                onChange={handleInputChange}
                error={errors.currentMileageKm}
                placeholder='Aktualny przebieg'
              />
            ) : (
              row.currentMileageKm
            )}
          </TableCell>

          <TableCell align='center'>
            {editingRowId === row.id ? (
              <TableTextField
                name='maintenanceCost'
                id={`maintenanceCost-${row.id}`}
                register={register}
                onChange={handleInputChange}
                error={errors.maintenanceCost}
                placeholder='Koszt konserwacji'
              />
            ) : (
              row.maintenanceCost
            )}
          </TableCell>

          <TableCell align='center'>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {editingRowId === row.id ? (
                <TableIconButton
                  onClick={handleSubmit(onSubmit)}
                  aria-label={`Zapisz ${row.name}`}
                  icon='ic:baseline-save'
                  tooltip='Zapisz'
                  disabled={isUpdating}
                />
              ) : (
                <TableIconButton
                  onClick={() => handleEdit(row)}
                  aria-label={`Edytuj ${row.name}`}
                  icon={
                    isUpdating
                      ? 'eos-icons:three-dots-loading'
                      : 'ic:baseline-edit'
                  }
                  tooltip='Edytuj'
                  disabled={isUpdating}
                />
              )}

              <TableIconButton
                onClick={() => openDeleteModal(row.name, row.id)}
                aria-label={`Usuń ${row.name}`}
                icon='basil:trash-solid'
                tooltip='Usuń'
                disabled={isUpdating}
              />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BikeTableBody;
