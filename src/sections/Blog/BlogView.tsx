import RHFTextField from '@/ui/molecules/RHF/RHFTextField'
import React from 'react'
import Box from '@mui/material/Box';
import { TextFieldVariants } from '@/ui/molecules/RHF/RHFConstans';
import { Typography } from '@mui/material';

const BlogView = () => {
  return (
    <div className=''>
      <Typography variant='h1' sx={{fontSize:'2rem'}} className=' text-slate-50 text-nowrap'>
        Posty z trasy
      </Typography>
      <div className='w-full bg-white'>
        <Box className='bg-white p-10 w-full' >

        <RHFTextField label='Opisz swoją podróż' variant={TextFieldVariants.FILLED} />
        </Box>
      </div>
    </div>
  )
}

export default BlogView