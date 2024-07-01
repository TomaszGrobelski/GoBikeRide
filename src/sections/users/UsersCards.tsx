import React from 'react';

import { IUser } from '@/types/User/user.types';

import UserCard from './UserCard/UserCard';
import { UsersList } from '../../styles/Users/UsersCards.styles';

interface IUserCards {
  users: IUser[];
}
const UsersCards = ({ users }: IUserCards) => {
  return (
    <UsersList>
      {users.map((user) => (
        <UserCard key={user.username} user={user} />
      ))}
    </UsersList>
  );
};

export default UsersCards;
