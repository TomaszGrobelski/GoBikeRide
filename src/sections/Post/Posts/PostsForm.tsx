'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { endpoints } from '@/api/endpoints/endpoints';
import { useFetchPosts } from '@/api/posts/usePost';
import { useUser } from '@/api/user/useUser';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import { getCurrentUser } from '@/utils/auth/getCurrentUser';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

import { supabase } from '@/lib/supabase';

interface IPostsForm {
  refetch: () => Promise<any>;
}

const PostsForm = ({ refetch }: IPostsForm) => {
  const { data: user, isLoading, error } = useUser();

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
      console.log(user);
      const userId = user?.id;
      console.log(userId, ' userID');
      const uniqueFileName = `${Date.now()}-${imageFile.name}`;
      const filePath = `${userId}/${uniqueFileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('Posts')
        .upload(filePath, imageFile);
      console.log(uploadData);
      console.log(uploadError);

      if (uploadError) {
        throw uploadError;
      }
      const imageUrl =
        'https://zzntmujpyfyxzfyqwerd.supabase.co/storage/v1/object/public/' +
        uploadData.fullPath;

      // if (uploadData) {
      //   try {
      //     const response = await axios.post(endpoints.posts.all, {
      //       userId,
      //       description,
      //       imageUrl
      //     });
      //     console.log(response, 'response');
      //     toast.success('Post został dodany');
      //     setDescription('');
      //     setImagePreview(null);
      //     refetch();
      //   } catch (error) {
      //     console.log(error);
      //     toast.error('Wystąpił błąd podczas przesyłania danych.');
      //   }
      // }
    } catch (error) {
      console.log(error);
      toast.error('Wystąpił błąd podczas przesyłania pliku.');
    }
  };

  return (
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
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem'
          }
        }}
        richColors
        position='top-right'
      />
    </Box>
  );
};

export default PostsForm;
