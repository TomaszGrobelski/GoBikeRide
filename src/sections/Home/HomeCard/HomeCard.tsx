import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HomeCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  listItems: string[];
  linkHref: string;
  reverseLayout?: boolean; 
}

const HomeCard: React.FC<HomeCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  listItems,
  linkHref,
  reverseLayout = false, 
}) => {
  return (
    <div
      className={`bg-white/ relative z-20 flex h-auto max-w-[1500px] flex-col gap-10 border-b-[1px] bg-white px-5 py-44 lg:w-full lg:flex-row lg:justify-between ${
        reverseLayout ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className='aspect-w-16 aspect-h-9 relative max-h-[400px] min-h-[300px] w-full lg:w-1/2'>
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes='100%'
          priority
          className='rounded-2xl shadow-md shadow-white object-cover'
        />
      </div>

      <div className='space-y-10 font-poppins lg:w-1/2'>
        <h2 className='text-wrap text-[24px] text-secoundSea gradient-text border-bottom-gradient sm:text-[38px]'>
          {title}
        </h2>

        <p className='text-balance indent-4'>{description}</p>

        <ul className='list-inside list-[square] space-y-1'>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link href={linkHref} className='inline-block'>
          <button className='hover:bg-mainColor rounded-lg border-[1px] bg-secoundSea p-5 text-white transition-all duration-300'>
            Zobacz więcej
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
