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
    <div className='flex min-h-60 w-full max-w-[400px] flex-col space-y-8 rounded-lg border-[1px] border-[#793794] p-8 text-black'>
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
        <span>Start Free Trial</span>
        <Icon icon='ei:arrow-right' fontSize={22} />
      </button>
    </div>
  );
};

export default PricingCard;
