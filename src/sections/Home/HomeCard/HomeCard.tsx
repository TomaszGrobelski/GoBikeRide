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
    reverseLayout?: boolean; // Nowy atrybut
  }

const HomeCard: React.FC<HomeCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  listItems,
  linkHref,
  reverseLayout = false, // Domyślnie false
}) => {
  return (
    <div
      className={`relative z-20 bg-white flex h-auto flex-col px-5 gap-10 lg:w-full lg:flex-row lg:justify-between max-w-[1500px] border-b-[1px] py-44 ${
        reverseLayout ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className='aspect-w-16 aspect-h-9 relative max-h-[400px] min-h-[300px] w-full lg:w-1/2'>
        <Image
          src={imageSrc}
          alt={altText}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl shadow-md shadow-white'
        />
      </div>

      <div className='space-y-10 font-poppins lg:w-1/2'>
        <h2 className='text-wrap text-[24px] sm:text-[38px] text-secoundSea'>{title}</h2>

        <p className='text-balance indent-4'>
          {description}
        </p>

        <ul className='list-inside list-[square] space-y-1'>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link href={linkHref} className='inline-block'>
          <button className='rounded-lg border-[1px] bg-mainPurple p-5 text-white'>
            Zobacz więcej
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
