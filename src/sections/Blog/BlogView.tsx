import RHFTextField from '@/ui/molecules/RHF/RHFTextField'
import React from 'react'
import Box from '@mui/material/Box';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import { Typography } from '@mui/material';

const BlogView = () => {
  return (
    <div className=''>
      <Typography variant='h1' className=' text-slate-50 text-[3rem] text-nowrap'>
        Posty z trasy
      </Typography>
      <div className='w-4/5 bg-white'>
        <Box className='bg-blue-500 p-10 w-full' >

        <RHFTextField label='Opisz swoją podróż' variant={TextFieldVariants.FILLED} />
        </Box>
      </div>
    </div>
  )
}

export default BlogView