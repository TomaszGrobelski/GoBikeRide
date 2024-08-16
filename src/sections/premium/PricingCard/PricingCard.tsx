'use client';

import IconButton from '@/ui/atmos/IconButton';
import { Icon } from '@iconify/react';

import PricingCardItem from './PricingCardItem';

interface ICardItem {
  description: string;
}
interface IPricingCard {
  title: string;
  price: number;
  pricingCardList: ICardItem[];
  isPremium?: boolean;
}
const PricingCard = ({
  title,
  price,
  pricingCardList,
  isPremium,
}: IPricingCard) => {
  return (
    <div className='relative flex min-h-[700px] w-full max-w-[500px] flex-col space-y-8 overflow-clip rounded-lg p-8 text-black shadow-md shadow-gray-400'>
      <div className='bg-mainColor absolute -right-[30rem] -top-[30rem] h-96 w-96 rounded-full blur-[400px]'></div>
      <div className='bg-mainColor absolute -bottom-[30rem] -left-[30rem] h-96 w-96 rounded-full blur-[400px]'></div>
      <div className='space-y-2 border-b-[1px] pb-2'>
        <p className='flex h-10 items-center gap-4 text-[22px] font-bold text-secoundSea'>
          {title}{' '}
          <span>
            {isPremium && (
              <div className='rounded-md bg-yellow-500 px-2 py-1 text-[14px] font-semibold text-white'>
                Najlepsza opcja
              </div>
            )}
          </span>
        </p>
        <p className='flex items-center gap-4 text-[48px] font-bold text-secoundSea'>
          {price}zł{' '}
          <span className='text-[14px] font-normal text-gray-500'>
            /miesiąc
          </span>{' '}
        </p>
      </div>

      <ul className='flex-1 space-y-5'>
        {pricingCardList.map((item) => (
          <PricingCardItem
            key={item.description}
            description={item.description}
            isPremium={isPremium}
          />
        ))}
      </ul>
      <button
        className={`flex w-full items-center justify-center gap-4 rounded-lg bg-green-500 shadow-sm shadow-green-500 ${isPremium && 'bg-yellow-500 shadow-yellow-500'} py-2 text-white hover:bg-[#793794] hover:text-white`}
      >
        <span className='font-bold tracking-wider'>Start Free Trial</span>
        <Icon icon='ei:arrow-right' fontSize={24} />
      </button>
    </div>
  );
};

export default PricingCard;
