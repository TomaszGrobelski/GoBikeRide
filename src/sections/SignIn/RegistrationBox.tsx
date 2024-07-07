import Link from 'next/link';

const RegistrationBox = () => {
  return (
    <div className='flex h-full w-1/2 flex-col items-center justify-center space-y-4 rounded-br-lg rounded-tr-lg bg-gradient-to-br from-[#38B98C] to-[#3AA8AE] text-[14px] text-white'>
      <h2 className='text-center text-[20px] md:text-[40px]'>Jesteś nowy ?</h2>
      <p className='text-center text-[18px] md:text-[20px]'>
        Zarejestruj się i odkryj mnóstwo nowych możliwości !{' '}
      </p>
      <Link href='/auth/sign-up'>
        <button className='rounded-full bg-white px-9 py-4 font-bold text-black'>
          Zarejestruj się
        </button>
      </Link>
    </div>
  );
};

export default RegistrationBox;
