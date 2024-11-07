import React from 'react';
import Image from 'next/image';
import UserProfileButton from '@/ui/atmos/Buttons/UserProfilButton';
import MainMethodBox from '@/ui/atmos/mainMethod/MainMethod';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Typography } from '@mui/material';
import { CalendarCheck } from 'lucide-react';

import { IUser } from '@/types/User/user.types';

import CounterItem from './CounterItem';
import { CardItem } from './UserCard.styles';
import userImg from './userImg.png';

interface IUserCard {
  user: IUser;
}

const UserCard = ({ user }: IUserCard) => {
  return (
    <CardItem key={user.username} className='max-h-[600px]'>
      <div className='absolute -right-[30rem] -top-[30rem] h-96 w-96 rounded-full bg-mainColor blur-[400px]'></div>
      <div className='absolute -bottom-[30rem] -left-[30rem] h-96 w-96 rounded-full bg-mainColor blur-[400px]'></div>
      <Image src={userImg} alt='zdjęcie avatara' width={100} height={100} />

      <Typography>{user.username}</Typography>

      <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 1 }}>
        <CalendarCheck /> {convertToDdMmYyyyFormat(user.createdAt)}
      </Typography>

      <MainMethodBox method={user.mainMethod} />

      <div className='flex items-center gap-2'>
        <Icon icon='bxs:cool' fontSize={24} color='#FFB800' />
        <p>Respect:</p>
        <p>{user.respect}</p>
      </div>

      <Box sx={{ display: 'flex', gap: 8 }}>
        <CounterItem count={user.posts.length} label='Posty' />
        <CounterItem count={0} label='Trasy' />
        <CounterItem count={user.bikes.length} label='Rowery' />
      </Box>

      <UserProfileButton userId={user.id} />
    </CardItem>
  );
};

export default UserCard;
