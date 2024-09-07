'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Typography } from '@mui/material';

interface IContactBox {
  title: string;
  icon: string;
  children: React.ReactNode;
}
const ContactBox = ({ title, icon, children }: IContactBox) => {
  return (
    <Box>
      <div className='flex flex-col items-center gap-5 font-poppins text-[20px]'>
        <Icon icon={icon} fontSize={50} />
        <Typography
          className='text-balance text-left'
          variant='body1'
          fontSize={22}
        >
          {title}
        </Typography>
        <Typography component='div' align='center'>
          {children}
        </Typography>
      </div>
    </Box>
  );
};

export default ContactBox;
