import React, { useEffect } from 'react';
import { useUpdatePost } from '@/api/posts/usePost';
import SaveButton from '@/ui/atmos/Buttons/SaveButton';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { IPost } from '@/types/Posts/posts.types';

import { updateSchema } from '../post.schema';

type PostFormValue = z.infer<typeof updateSchema>;

interface IEditPostModalContent {
  post: IPost;
  closeModal: () => void;
}

const EditPostModalContent = ({ post, closeModal }: IEditPostModalContent) => {
  const { mutate: updatePost, isPending } = useUpdatePost();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PostFormValue>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      description: post.description || '',
    },
  });

  useEffect(() => {
    setValue('description', post.description || '');
  }, [post.description, setValue]);

  const onSubmit: SubmitHandler<PostFormValue> = async (data) => {
    updatePost(
      {
        postId: post.id,
        description: data.description,
      },
      {
        onSuccess: () => {
          closeModal();
        },
      },
    );
  };

  return (
    <div className='flex min-h-[250px] flex-col gap-10 pt-2'>
      <p>Edytuj swój post</p>
      <form
        className='flex h-full w-full flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <RHFTextField
          {...register('description')}
          label='Opisz swoją podróż 🚴'
          variant={TextFieldVariants.OUTLINED}
          multiline
          InputProps={{
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#404248',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#102532',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4d4d50',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: '#102532',
              '&.Mui-focused': {
                color: '#102532',
              },
            },
          }}
        />
        {errors.description && (
          <p className='error'>{errors.description.message}</p>
        )}
        <SaveButton
          type='submit'
          className='self-end'
          disabled={isPending || isSubmitting}
        />
      </form>
    </div>
  );
};

export default EditPostModalContent;
