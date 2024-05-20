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
    <div className='flex justify-center w-full'>
      <div className=' p-6 bg-purple-100'>
        <Autocomplete
          disablePortal
          className='bg-white '
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
                className={`${selectedUser === user.name ? ' border-l-8 border-l-purple-600' : ''} flex items-center gap-2 border-b-[1px] border-b-white py-2`}
                key={user.name}
              >
                <div className={` p-2`}>
                  <Image
                    className=' rounded-full'
                    src={user.avatar}
                    width={40}
                    height={40}
                    alt='avatar image'
                  />
                </div>
                <div>
                  <p className='font-500 min-w-40 text-wrap '>{user.name}</p>
                  <p className='text-[14px]'>wiadomośc z czatu.....</p>
                </div>
                <div className='text-[12px] w-16 self-start pt-1 flex flex-col items-center gap-2'>
                  <p className='text-gray-900'>12:30 AM</p>
                  <div className='bg-green-500 rounded-full w-3 h-3'></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className='bg-white p-6 h-full flex flex-col justify-between '>
          <div>mess</div>
          <div className='border-t-[1px] p-4 flex items-center gap-4'>
            <Icon icon='la:smile' fontSize={20} />
            <input
              type='text'
              className=' outline-none'
              placeholder='Napisz wiadomość ...'
              name=''
              id=''
            />
            <button className=' bg-purple-500 p-2 rounded-full'>
              <Icon style={{ color: 'white' }} icon='teenyicons:send-outline' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
