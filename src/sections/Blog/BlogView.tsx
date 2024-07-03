'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import IconButton from '@/ui/atmos/IconButton';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import PostsList from './Posts/PostsList';

const BlogView = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null); //podgląd zdjęcia
  const [imageFile, setImageFile] = useState<File | null>(null); // zdjęcie które jest wysyłane
  const [description, setDescription] = useState<string>('');

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = async () => {
    if (!imageFile) {
    }
  };

  return (
    <>
      <div className='flex w-full flex-col items-center gap-4 border-[1px] p-2'>
        <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10'>
          {imagePreview && (
            <Image
              src={imagePreview}
              alt='Uploaded'
              style={{ maxWidth: '100%', marginBottom: '1rem' }}
              width={800}
              height={400}
            />
          )}
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
                className='cursor-pointer rounded-md text-[#5f286b]'
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
              <Button sx={{ background: '#5f286b' }} variant='contained'>
                Opublikuj
              </Button>
            </div>
          </div>
        </Box>
        {/* <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10 text-[20px] dark:text-black'>
          Nie opublikowano jeszcze żadnego postu
        </Box> */}
        <PostsList />
      </div>
    </>
  );
};

export default BlogView;
