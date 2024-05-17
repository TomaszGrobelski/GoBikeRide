'use client';

import { chatUsers } from '@/Mock/ChatUsers';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const ChatView = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 }
  ];
  return (
    <div className='flex  gap-4'>
      <div>
        <Autocomplete
          disablePortal
          className='bg-white '
          id='combo-box-demo'
          options={top100Films}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label='Movie' />}
        />
        <div>Options</div>
        <div>Secound Oprions</div>
        <ul>
          {chatUsers.map((user) => {
            return <li key={user.name}>{user.avatar}</li>;
          })}
        </ul>
      </div>
      <div>dsa</div>
    </div>
  );
};

export default ChatView;
