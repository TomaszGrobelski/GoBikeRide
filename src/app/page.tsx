import Link from 'next/link';
import '../styles/global.css';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex h-screen w-full items-center justify-evenly p-10'>
      <Image
        src='/assets/LoginPage/LoginImg.jpg'
        alt='Zdjęcie strony wejściowej'
        objectFit='cover'
        className='absolute left-0 top-0 -z-10 h-screen w-full '
        layout='fill'
      />
      <div className=' max-w-[50%] text-black'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum
        accusantium quisquam obcaecati sapiente est debitis eveniet dignissimos
        mollitia. Iste commodi, nostrum ex eaque dolore pariatur vitae!
        Nesciunt, eveniet aliquid?
      </div>
      <div className='flex opacity-95 h-[600px] w-full flex-col items-center justify-center rounded-lg bg-white text-black shadow-lg shadow-black'>
        <h1 className='text-[#8665F9]'>Welcom to GoBikeRide</h1>
        <form className='flex flex-col' action=''>
          <input
            className='border-[1px] border-black'
            type='text'
            name=''
            id=''
          />
          <input type='text' name='' id='' />
          <Link
            href='/dashboard/hero'
            className='rounded-md bg-[#EA9E41] p-2 text-[1.1rem] font-bold text-white'
          >
            <button type='submit'>Zaloguj</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
