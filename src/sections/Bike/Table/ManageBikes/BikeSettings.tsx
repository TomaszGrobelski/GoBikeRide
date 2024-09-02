import React, { useState } from 'react';
import { useRemoveBike } from '@/api/bikes/useBike';
import CloseButton from '@/ui/atmos/Buttons/CloseButton';
import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';
import SaveButton from '@/ui/atmos/Buttons/SaveButton';
import CustomInput from '@/ui/atmos/Input/CustomInput';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { Icon } from '@iconify/react/dist/iconify.js';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { IBike } from '@/types/Bike/bike.types';

interface IBikeSettings {
  bikes: IBike[] | undefined;
}

const BikeSettings = ({ bikes }: IBikeSettings) => {
  const [open, setOpen] = useState(false);

  const { mutate: deleteBike } = useRemoveBike();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteBike = (id: number) => {
    deleteBike(id);
  };

  const handleSaveBike = () => {};

  return (
    <>
      <LightTooltip title='Zarządzaj rowerami' placement='top'>
        <div>
          <button
            onClick={handleOpen}
            className='grid h-16 w-16 place-items-center rounded-full bg-mainColor'
          >
            <Icon
              icon='oui:app-index-management'
              fontSize={32}
              className='text-white'
            />
          </button>
        </div>
      </LightTooltip>

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
                  label='Zmień nazwe roweru'
                  defaultValue={bike.brand}
                />

                <SaveButton onClick={handleSaveBike} />

                <DeleteButton onClick={() => handleDeleteBike(bike.id)} />
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
