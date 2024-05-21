import { Icon } from '@iconify/react/dist/iconify.js';

interface iCardInfromation {
  icon: string;
  description: string;
}

const CardInformation = ({ icon, description }: iCardInfromation) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className=' rounded-xl border-gray-200 border-[1px] w-12 h-12 flex justify-center items-center  bg-[#221C42] '>
        <Icon
          icon={icon}
          className='text-white'
          fontSize={20}
          style={{ color: 'white' }}
        />
      </div>
      <p className='text-center text-[12px] font-poppins  max-w-14 flex justify-center '>
        {description}
      </p>
    </div>
  );
};

export default CardInformation;
