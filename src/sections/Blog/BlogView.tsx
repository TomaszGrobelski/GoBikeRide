'use client';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import IconButton from '@/ui/atmos/IconButton';
import Image from 'next/image';

const BlogView = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className='flex w-full flex-col items-center gap-4 p-2 '>
        <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10 '>
          {image && (
            <Image
              src={image}
              alt='Uploaded'
              style={{ maxWidth: '100%', marginBottom: '1rem' }}
              width={800}
              height={400}
            />
          )}{' '}
          <RHFTextField
            label='Opisz swoją podróż'
            variant={TextFieldVariants.STANDARD}
            multiline
          />
          <div className='flex w-full items-center justify-end'>
            <label htmlFor='imageUpload'>
              {/* <IconButton
                icon='clarity:picture-solid'
                ariaLabel='Add image'
                className='rounded-md bg-[#031F56]'
              /> */}
              <Icon
                icon='clarity:picture-solid'
                aria-label='Add image'
                className='cursor-pointer rounded-md text-[#031F56]'
                width={30}
              />
            </label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              id='imageUpload'
              className='hidden'
            />

            <div className='flex w-full justify-end'>
              <Button variant='contained'>Opublikuj</Button>
            </div>
          </div>
        </Box>
        <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10 dark:text-black '>
          Nie opublikowano jeszcze żadnego postu
        </Box>
      </div>
    </>
  );
};

export default BlogView;
