import { useMemo } from 'react';

import { IUser } from '@/types/User/user.types';

const useFilteredUsers = (users: IUser[], searchTerm: string): IUser[] => {
  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;

    return users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [users, searchTerm]);

  return filteredUsers;
};

export default useFilteredUsers;
