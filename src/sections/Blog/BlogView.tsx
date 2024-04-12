import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import React from 'react';
import Box from '@mui/material/Box';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const BlogView = () => {
  return (
    <> 
      <div className='flex w-full flex-col items-center gap-4 p-2 '>
        <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10 '>
          <RHFTextField
            label='Opisz swoją podróż'
            variant={TextFieldVariants.STANDARD}
            multiline
          />
          <div className='flex w-full justify-end'>
            <Button variant='contained'>Opublikuj</Button>
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
