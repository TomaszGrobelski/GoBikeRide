import { Icon } from '@iconify/react/dist/iconify.js';

interface iCardInfromation {
  icon: string;
  description: string;
}

const CardInformation = ({ icon, description }: iCardInfromation) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='flex h-12 w-12 items-center justify-center rounded-xl border-[1px] border-gray-200 bg-[#221C42]'>
        <Icon
          icon={icon}
          className='text-white'
          fontSize={20}
          style={{ color: 'white' }}
        />
      </div>
      <p className='flex max-w-14 justify-center text-center font-poppins text-[10px] sm:text-[12px]'>
        {description}
      </p>
    </div>
  );
};

export default CardInformation;
