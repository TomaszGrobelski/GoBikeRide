import { ChangeEvent, useState } from 'react';
import { useModalStore } from '@/store/useModalStore';
import TableIconButton from '@/ui/atmos/Buttons/TableButtons/TableIconButton';
import TableTextField from '@/ui/atmos/Input/TableTextField';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { getCurrentBackgroundColor } from '@/utils/table/colors-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField'; // Nowy import

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { IComponents } from '@/types/Bike/Components/components.types';

import DeleteComponentModalContent from './ModalContent/DeleteComponentModalContent';
import { tableRowSchema } from './new-component.schema';

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
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(tableRowSchema),
  });
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const [editedRowData, setEditedRowData] = useState<Partial<IComponents>>({});

  const handleDeleteSuccess = () => {
    closeModal();
  };

  const openDeleteModal = (brand: string, componentId: number) =>
    openModal({
      children: (
        <DeleteComponentModalContent
          handleDeleteSuccess={handleDeleteSuccess}
          title={brand}
          componentId={componentId}
        />
      ),
    });

  const handleEdit = (row: IComponents) => {


    setEditingRowId(row.id);
    setEditedRowData(row); 
  };


  const handleSave = () => {
    setEditingRowId(null);
    setEditedRowData({});
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                value={editedRowData.name}
                name='name'
                id={`name-${row.id}`}
                register={register}
                onChange={handleInputChange}
                error={errors.name}
                placeholder='Nazwa osprzętu'
              />
            ) : (
              // <TextField
              //   value={editedRowData.name}
              //   onChange={handleInputChange}
              //   name='name'
              // />
              row.name
            )}
          </TableCell>

          <TableCell align='center'>
            {editingRowId === row.id ? (
              <TextField
                value={editedRowData.maintenanceDate}
                onChange={handleInputChange}
                name='maintenanceDate'
              />
            ) : (
              convertToDdMmYyyyFormat(row.maintenanceDate)
            )}
          </TableCell>

          <TableCell align='center'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                {editingRowId === row.id ? (
                  <TextField
                    value={editedRowData.currentState}
                    onChange={handleInputChange}
                    name='currentState'
                  />
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
          </TableCell>

          <TableCell align='center'>
            {editingRowId === row.id ? (
              <TextField
                value={editedRowData.currentMileageKm}
                onChange={handleInputChange}
                name='currentMileageKm'
              />
            ) : (
              row.currentMileageKm
            )}
          </TableCell>

          <TableCell align='center'>
            {editingRowId === row.id ? (
              <TextField
                value={editedRowData.maintenanceCost}
                onChange={handleInputChange}
                name='maintenanceCost'
              />
            ) : (
              row.maintenanceCost
            )}
          </TableCell>

          <TableCell align='center'>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {editingRowId === row.id ? (
                <TableIconButton
                  onClick={handleSave}
                  aria-label={`Zapisz ${row.name}`}
                  icon='ic:baseline-save'
                  tooltip='Zapisz'
                />
              ) : (
                <TableIconButton
                  onClick={() => handleEdit(row)}
                  aria-label={`Edytuj ${row.name}`}
                  icon='ic:baseline-edit'
                  tooltip='Edytuj'
                />
              )}

              <TableIconButton
                onClick={() => openDeleteModal(row.brand, row.id)}
                aria-label={`Usuń ${row.name}`}
                icon='basil:trash-solid'
                tooltip='Usuń'
              />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BikeTableBody;
