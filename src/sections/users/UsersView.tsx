'use client';

import { useEffect, useState } from 'react';
import { useUsersQuery } from '@/api/users/useUser';
import SearchBar from '@/ui/atmos/SearchBar/SearchBar';
import ErrorCard from '@/ui/molecules/Error/ErrorCard';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';

import useFilteredUsers from '@/hooks/use-FilteredUsers';
import { UsersList } from '@/styles/Users/UsersCards.styles';

import NoUsersMessage from './UserCard/NoUsersMessage';
import UserCard from './UserCard/UserCard';

const UsersView = () => {
  const { data: users, refetch, isError, isLoading } = useUsersQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useFilteredUsers(users || [], searchTerm);

  if (isError) {
    return <ErrorCard refetch={refetch} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!users || users.length === 0) {
    return <NoUsersMessage />;
  }

  return (
    <section className='flex h-full flex-col pb-20'>
      <div className='max-w-[300px] px-5'>
        <SearchBar
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Wpisz nazwę użytkownika'
        />
      </div>
      <UsersList>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.username} user={user} />
          ))
        ) : (
          <NoUsersMessage />
        )}
      </UsersList>
    </section>
  );
};

export default UsersView;
