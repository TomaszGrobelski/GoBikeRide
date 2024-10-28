import React, { useState } from 'react';
import { useRemoveBike, useUpdateBike } from '@/api/bikes/useBike';
import CloseButton from '@/ui/atmos/Buttons/CloseButton';
import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';
import SaveButton from '@/ui/atmos/Buttons/SaveButton';
import ManageButton from '@/ui/atmos/Buttons/TableButtons/ManageButton';
import CustomInput from '@/ui/atmos/Input/CustomInput';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { IBike } from '@/types/Bike/bike.types';

interface IBikeSettings {
  bikes: IBike[] | undefined;
}

const BikeSettings = ({ bikes }: IBikeSettings) => {
  const [open, setOpen] = useState(false);
  const [bikeBrands, setBikeBrands] = useState<{ [key: number]: string }>({});

  const { mutate: deleteBike, isPending: isDeletePending } = useRemoveBike();
  const { mutate: updateBike, isPending: isUpdatePending } = useUpdateBike();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteBike = (id: number) => {
    deleteBike(id);
  };

  const handleSaveBike = (id: number, model: string) => {
    const newBrand = bikeBrands[id] || '';
    const originalBrand = bikes?.find((bike) => bike.id === id)?.brand;

    if (newBrand === originalBrand || !newBrand.trim()) {
      return;
    }

    updateBike({ bikeId: id, brand: newBrand, model });
  };

  const handleBrandChange = (id: number, value: string) => {
    setBikeBrands((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <ManageButton handleOpen={handleOpen} tooltipTitle='Zarządzaj rowerami' />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='bike-settings-modal-title'
        aria-describedby='bike-settings-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 6,
            borderRadius: 4,
          }}
        >
          <Typography
            id='bike-settings-modal-title'
            variant='h6'
            component='h2'
            className='text-black'
          >
            Ustawienia Rowerów
          </Typography>
          <div className='flex flex-col gap-5'>
            {bikes?.map((bike) => (
              <div key={bike.id} className='flex items-end gap-4'>
                <CustomInput
                  label='Zmień nazwę roweru'
                  defaultValue={bike.brand}
                  onChange={(e) => handleBrandChange(bike.id, e.target.value)}
                />

                <SaveButton
                  onClick={() => handleSaveBike(bike.id, bike.model)}
                  isLoading={isUpdatePending}
                  disabled={isUpdatePending}
                />

                <DeleteButton
                  onClick={() => handleDeleteBike(bike.id)}
                  isLoading={isDeletePending}
                  disabled={isDeletePending}
                />
              </div>
            ))}
          </div>
          <CloseButton setOpen={setOpen} />
        </Box>
      </Modal>
    </>
  );
};

export default BikeSettings;
