'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useAddPost } from '@/api/posts/usePost';
import CustomToaster from '@/ui/atmos/Toaster/CustomToaster';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import { uploadImage } from '@/utils/Post/post.utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { IUser } from '@/types/User/user.types';

import { postSchema } from './post.schema';

interface IPostsForm {
    refetch: () => Promise<any>;
    user: IUser | undefined;
}

const PostsForm = ({ refetch, user }: IPostsForm) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(postSchema),
    });
    const { mutate: addPost, isPending } = useAddPost();

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };

        if (file) {
            setValue('imageFile', file);
            reader.readAsDataURL(file);
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const userId = user?.id ? String(user.id) : undefined;

        if (!userId) {
            return;
        }

        const description = data.description;
        const imageFile = data.imageFile as File;

        try {
            const imageUrl = await uploadImage(userId, imageFile);
            if (imageUrl) {
                await addPost({ userId, description, imageUrl });
                await refetch();
                setValue('description', '');
                setValue('imageFile', null);
                setImagePreview(null);
            }
        } catch {
            toast.error('Problem podczas przesyłania postu, proszę spróbować później ');
        }
    };

    return (
        <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10 shadow-sm shadow-gray-300'>
            {imagePreview && (
                <Image
                    src={imagePreview}
                    alt='Uploaded'
                    style={{ maxWidth: '100%', marginBottom: '1rem' }}
                    width={800}
                    height={400}
                />
            )}
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('description')}
                    label='Opisz swoją podróż 🚴'
                    variant={TextFieldVariants.OUTLINED}
                    multiline
                    error={!!errors.description}
                    className='min-h-10 w-[100%]'
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
                <div className='flex w-full items-center justify-end'>
                    <label htmlFor='imageUpload'>
                        <Icon
                            icon='clarity:picture-solid'
                            aria-label='Add image'
                            className='cursor-pointer rounded-md text-mainColor'
                            width={30}
                        />
                    </label>
                    <input
                        {...register('imageFile')}
                        type='file'
                        accept='image/*'
                        onChange={handleImageUpload}
                        id='imageUpload'
                        className='hidden'
                    />

                    <div className='mt-2 flex w-full justify-end'>
                        <Button
                            type='submit'
                            disabled={isPending}
                            sx={{
                                background: '#93a266',
                                '&:hover': {
                                    backgroundColor: '#102532',
                                },
                            }}
                            variant='contained'
                        >
                            Opublikuj
                        </Button>
                    </div>
                </div>
            </form>

            <CustomToaster />
        </Box>
    );
};

export default PostsForm;
