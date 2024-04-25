'use client';
import IconButton from '@/ui/atmos/IconButton';
import { Icon } from '@iconify/react';

const PricingCard = () => {
  return (
    <div className='min-h-60 w-full space-y-8 rounded-lg border-[1px] border-[#793794] bg-white p-4 text-black'>
      <div className='border-b-[1px] space-y-1 pb-2 '>
        <p className='font-bold text-[#502055]'>Essential</p>
        <p className='text-gray-500'>Suitable for individuals</p>
      </div>
      <p className=' text-[22px]'>$24/msc</p>
      <div>
        <button className='flex w-full items-center justify-center text-[#502055] gap-4 rounded-lg border-[1px] border-[#502055] py-2 hover:bg-[#793794] hover:text-white '>
          <span>Start Free Trial</span>
          <Icon icon='ei:arrow-right' fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
