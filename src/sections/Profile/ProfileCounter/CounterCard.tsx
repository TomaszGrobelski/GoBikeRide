import { Icon } from '@iconify/react/dist/iconify.js';

interface ICounterCard {
  value: number;
  title: string;
  icon: string;
}
const CounterCard = ({ value, title, icon }: ICounterCard) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='rounded-full  bg-secoundSea p-3 text-white'>
        <Icon icon={icon} width={25} height={25} />
      </div>
      <div className='flex flex-col items-center'>
        <span>{value}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CounterCard;
