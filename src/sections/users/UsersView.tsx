'use client';

import { useUsersQuery } from '@/api/users/useUser';
import SearchBar from '@/ui/atmos/SearchBar/SearchBar';
import ErrorCard from '@/ui/molecules/Error/ErrorCard';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';

import { UsersList } from '@/styles/Users/UsersCards.styles';

import NoUsersMessage from './UserCard/NoUsersMessage';
import UserCard from './UserCard/UserCard';

const UsersView = () => {
  const { data: users, refetch, isError, isLoading } = useUsersQuery();

  if (isError) {
    return <ErrorCard refetch={refetch} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!users || users.length === 0) {
    return <NoUsersMessage />;
  }

  // czemu h nie jest 100% ?
  return (
    <section className='flex h-full flex-col pb-20'>
      <div className='px-5 max-w-[300px]'>
        <SearchBar onChange={() => {}} placeholder='Wpisz nazwę użytkownika' />
      </div>
      <UsersList>
        {users &&
          users.map((user) => <UserCard key={user.username} user={user} />)}
      </UsersList>
    </section>
  );
};

export default UsersView;
