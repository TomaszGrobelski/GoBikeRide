import React from 'react';
import Image from 'next/image';
import UserProfileButton from '@/ui/atmos/Buttons/UserProfilButton';
import { Box, Typography } from '@mui/material';

import { IUser } from '@/types/User/user.types';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';

import CounterItem from './CounterItem';
import { CardItem, MainMethod } from './UserCard.styles';
import userImg from './userImg.png';

interface IUserCard {
  user: IUser;
}

const UserCard = ({ user }: IUserCard) => {
  return (
    <CardItem key={user.username}>
      <Image src={userImg} alt='zdjęcie avatara' width={100} height={100} />

      <Typography>{user.username}</Typography>

      <Typography sx={{ fontSize:14}}>Dołączył: {convertToDdMmYyyyFormat(user.createdAt)}</Typography>

      <MainMethod>Gravel</MainMethod>

      <Box sx={{ display: 'flex', gap: 8 }}>
        <CounterItem count={user.posts_count} label='Posty' />
        <CounterItem count={user.routes_count} label='Trasy' />
        <CounterItem count={user.bikes_count} label='Rowery' />
      </Box>

      <UserProfileButton userId={user.id} />
    </CardItem>
  );
};

export default UserCard;
