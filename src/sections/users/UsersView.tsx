'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useUsersQuery } from '@/api/users/useUser';

import { IUser } from '@/types/User/user.types';

const UsersView = () => {
  const { data, isError } = useUsersQuery();

  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data);
    }
  }, [data]);
  if (isError) {
    <div>Error</div>;
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            <Image
              src='https://www.pngwing.com/en/free-png-zwxqf'
              alt='zdjęcie avatara'
              width={60}
              height={60}
            />
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersView;
