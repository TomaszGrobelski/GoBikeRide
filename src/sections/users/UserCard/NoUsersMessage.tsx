import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const NoUsersMessage = () => {
  return (
    <div className='flex h-1/3 flex-col items-center gap-4 justify-center text-[20px]'>
      <Icon icon='emojione-v1:warning' fontSize={40} />
      <p>Aktualnie nie ma zarejestrowanych użytkowników na platformie</p>
    </div>
  );
};

export default NoUsersMessage;
