import { Icon } from '@iconify/react/dist/iconify.js';

const LoadingPage = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='border-mainColor flex flex-col items-center justify-center rounded-lg border-[1px] p-6 text-[20px]'>
        <p>Proszę czekać, strona się ładuje</p>
        <Icon icon='eos-icons:three-dots-loading' fontSize={60} />
      </div>
    </div>
  );
};

export default LoadingPage;
