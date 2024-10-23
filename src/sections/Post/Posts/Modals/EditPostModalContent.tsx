import React, { ChangeEvent, useState } from 'react';
import SaveButton from '@/ui/atmos/Buttons/SaveButton';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';

import { IPost } from '@/types/Posts/posts.types';

interface IEditPostModalContent {
  post: IPost;
}
const EditPostModalContent = ({ post }: IEditPostModalContent) => {
  const [description, setDescription] = useState<string>(post.description);

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };
  return (
    <div className='flex min-h-[250px] flex-col gap-10 pt-2'>
      <p>Edytuj swój post</p>
      <RHFTextField
        label='Opisz swoją podróż 🚴'
        variant={TextFieldVariants.OUTLINED}
        value={description}
        multiline
        onChange={handleDescriptionChange}
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
      <SaveButton className='self-end' />
    </div>
  );
};

export default EditPostModalContent;
