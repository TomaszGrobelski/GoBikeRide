'use client';

import { useState } from 'react';
import Image from 'next/image';
import { chatUsers } from '@/Mock/ChatUsers';
import { Icon } from '@iconify/react/dist/iconify.js';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface IUser {
  name: string;
  lastMessageTime: string;
  avatar: string;
}
const ChatView = () => {
  const [selectedUser, setSelectedUser] = useState('');

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 }
  ];

  const handleUserClick = (user: IUser) => {
    setSelectedUser(user.name);
  };

  return (
    <div className='flex w-full justify-center'>
      <div className='bg-purple-100 p-6'>
        <Autocomplete
          disablePortal
          className='bg-white'
          id='combo-box-demo'
          options={top100Films}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label='Movie' />}
        />
        <div>Options</div>
        <div>Secound Options</div>
        <ul className='flex flex-col'>
          {chatUsers.map((user) => {
            return (
              <li
                onClick={() => handleUserClick(user)}
                className={`${selectedUser === user.name ? 'border-l-8 border-l-purple-600' : ''} flex items-center gap-2 border-b-[1px] border-b-white py-2`}
                key={user.name}
              >
                <div className={`p-2`}>
                  <Image
                    className='rounded-full'
                    src={user.avatar}
                    width={40}
                    height={40}
                    alt='avatar image'
                  />
                </div>
                <div>
                  <p className='min-w-40 text-wrap font-500'>{user.name}</p>
                  <p className='text-[14px]'>wiadomośc z czatu.....</p>
                </div>
                <div className='flex w-16 flex-col items-center gap-2 self-start pt-1 text-[12px]'>
                  <p className='text-gray-900'>12:30 AM</p>
                  <div className='h-3 w-3 rounded-full bg-green-500'></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className='flex h-full flex-col justify-between bg-white p-6'>
          <div>mess</div>
          <div className='flex items-center gap-4 border-t-[1px] p-4'>
            <Icon icon='la:smile' fontSize={20} />
            <input
              type='text'
              className='outline-none'
              placeholder='Napisz wiadomość ...'
              name=''
              id=''
            />
            <button className='rounded-full bg-purple-500 p-2'>
              <Icon style={{ color: 'white' }} icon='teenyicons:send-outline' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
