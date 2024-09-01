import { Icon } from '@iconify/react/dist/iconify.js';

const UserNotLogged = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center rounded-lg border-[1px] border-mainColor p-6 text-[20px]'>
        <p>Użytkownik nie jest zalogowany</p>
        <p>Zaraz nastąpi przekierowanie do strony logowania</p>
        <Icon icon='eos-icons:three-dots-loading' fontSize={60} />
      </div>
    </div>
  );
};

export default UserNotLogged;
