import { useState } from 'react';
import { useAddBike } from '@/api/bikes/useBike';
import AddButton from '@/ui/atmos/Buttons/AddButton';
import CloseButton from '@/ui/atmos/Buttons/CloseButton';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Checkbox } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import { IBikeResponse } from '@/types/Api/apiResponse';
import { IUser } from '@/types/User/user.types';

import { schema } from './add-bike-modal.schema';
import { style } from './add-bike-modal.style';
import AddBikeCheckBox from './AddBikeCheckBox';

type FormFields = z.infer<typeof schema>;

interface AddBikeModalProps {
  user: IUser | undefined;
  isLimited: boolean;
  bikes: IBikeResponse;
}

export default function AddBikeModal({ user, isLimited, bikes }: AddBikeModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const addBikeMutation = useAddBike();
  const [open, setOpen] = useState(false);
  const [addDefaultComponents, setAddDefaultComponents] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (!user) {
      return;
    }

    if (bikes) {
      const isDuplicate = bikes.some((bike) => bike.brand.toLowerCase() === data.brand.toLowerCase());

      if (isDuplicate) {
        setError('brand', { message: 'Rower o tej samej nazwie już istnieje' });
        return;
      }
    }

    await addBikeMutation.mutateAsync({
      userId: user?.id,
      brand: data.brand,
      model: data.model,
      addDefaultComponents,
    });
    reset();
    handleClose();
  };

  return (
    <div className='relative right-10'>
      {isLimited ? (
        <LightTooltip title='Nie można dodać więcej niż 3 rowery' placement='top'>
          <Button
            sx={{
              color: 'green',
              '& .MuiButton-endIcon': {
                color: 'green',
              },
            }}
          >
            <Icon icon='basil:add-outline' fontSize={26} />
            Dodaj rower
          </Button>
        </LightTooltip>
      ) : (
        <Button onClick={handleOpen}>
          <Icon icon='basil:add-outline' fontSize={26} />
          Dodaj rower
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CloseButton setOpen={setOpen} />
          <Typography className='text-black' id='modal-modal-title' variant='h6' component='h2'>
            Dodaj nowy rower
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
            <label htmlFor=''>Nazwa roweru</label>
            <input
              {...register('brand')}
              className='rounded-md border-[1px] border-[#5F286B] bg-white pl-2 pt-1 text-black outline-none'
              type='text'
              placeholder='Nazwa roweru'
            />
            {errors.brand && <div className='text-red-500'>{errors.brand.message}</div>}

            <label htmlFor=''>Model roweru</label>
            <input
              {...register('model')}
              className='rounded-md border-[1px] border-[#5F286B] bg-white pl-2 pt-1 text-black outline-none'
              type='text'
              placeholder='Model roweru'
            />
            {errors.model && <div className='text-red-500'>{errors.model.message}</div>}

            <AddBikeCheckBox checked={addDefaultComponents} onChange={setAddDefaultComponents} />

            <AddButton isSubmitting={isSubmitting} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
