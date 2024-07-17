'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { endpoints } from '@/api/endpoints/endpoints';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import { getCurrentUser } from '@/utils/auth/getCurrentUser';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

import { supabase } from '@/lib/supabase';

import NoPostsMessage from './Posts/NoPostsMessage';
import PostsList from './Posts/PostsList';

const BlogView = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

    if (file) {
      setImageFile(file);
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handlePublishPost = async () => {
    if (!imageFile || !description) {
      toast.error('Proszę wybrać zdjęcie i wpisać opis.');
      return;
    }

    try {
      const user = await getCurrentUser();
      if (!user) {
        toast.error('Użytkownik nie zalogowany.');
        return;
      }

      const userId = user.id;
      // const userId = 1;
      const filePath = `${userId}/${imageFile.name}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('Blog')
        .upload(filePath, imageFile);

      if (uploadError) {
        throw uploadError;
      }
      console.log(uploadData);
      const imageUrl =
        'https://zzntmujpyfyxzfyqwerd.supabase.co/storage/v1/object/public/' +
        uploadData.fullPath;

      if (uploadData) {
        try {
          const response = await axios.post(endpoints.blog.all, {
            userId,
            description,
            imageUrl
          });
          toast.success('Post został dodany');
          setDescription('');
          setImagePreview(null);
        } catch (error) {
          console.error('Upload error:', error);
          toast.error('Wystąpił błąd podczas przesyłania danych.');
        }
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Wystąpił błąd podczas przesyłania pliku.');
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
            onChange={handleDescriptionChange}
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
              <Button
                onClick={handlePublishPost}
                sx={{ background: '#5f286b' }}
                variant='contained'
              >
                Opublikuj
              </Button>
            </div>
          </div>
        </Box>

        <PostsList />
        
        <NoPostsMessage />
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem'
          }
        }}
        richColors
        position='top-right'
      />
    </>
  );
};

export default BlogView;
