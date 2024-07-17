import React from 'react';
import Box from '@mui/material/Box';

const NoPostsMessage = () => {
  return (
    <Box className='flex w-full max-w-[800px] flex-col items-center gap-4 rounded-xl bg-white p-10 text-[20px] dark:text-black'>
      Nie opublikowano jeszcze żadnego postu.
    </Box>
  );
};

export default NoPostsMessage;
