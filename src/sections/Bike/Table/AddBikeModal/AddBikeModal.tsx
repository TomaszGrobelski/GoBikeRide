import { useState } from 'react';
import { useAddBike } from '@/api/bikes/useBike';
import CloseButton from '@/ui/atmos/Buttons/CloseButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react/dist/iconify.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import { schema } from './add-bike-modal.schema';
import { style } from './add-bike-modal.style';

type FormFields = z.infer<typeof schema>;

export default function AddBikeModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const addBikeMutation = useAddBike();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await addBikeMutation.mutateAsync({
      userId: 19,
      brand: data.brand,
      model: data.model
    });
    reset();
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Icon icon='basil:add-outline' fontSize={26} />
        Dodaj rower
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CloseButton setOpen={setOpen} />
          <Typography
            className='text-black'
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            Dodaj nowy rower
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-1'
          >
            <label htmlFor=''>Marka roweru</label>
            <input
              {...register('brand')}
              className='rounded-md border-[1px] border-[#5F286B] bg-white pl-2 pt-1 text-black outline-none'
              type='text'
              placeholder='Marka roweru'
            />
            {errors.brand && (
              <div className='text-red-500'>{errors.brand.message}</div>
            )}

            <label htmlFor=''>Model roweru</label>
            <input
              {...register('model')}
              className='rounded-md border-[1px] border-[#5F286B] bg-white pl-2 pt-1 text-black outline-none'
              type='text'
              placeholder='Model roweru'
            />
            {errors.model && (
              <div className='text-red-500'>{errors.model.message}</div>
            )}

            <button
              type='submit'
              disabled={isSubmitting}
              className='flex h-[26px] w-[70px] items-center justify-center self-end rounded-md border-[1px] border-[#5F286B] font-poppins'
            >
              {isSubmitting ? (
                <Icon icon='line-md:loading-loop' fontSize={20} />
              ) : (
                'Dodaj'
              )}
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
