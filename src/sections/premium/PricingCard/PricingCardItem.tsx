import { LiHTMLAttributes } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface IPricingCardItem extends LiHTMLAttributes<HTMLLIElement> {
  description: string;
  isPremium?: boolean;
}

const PricingCardItem = ({
  description,
  isPremium,
  ...props
}: IPricingCardItem) => {
  return (
    <li className='flex items-center gap-2' {...props}>
      <Icon
        icon='game-icons:check-mark'
        fontSize={18}
        className={`h-4 w-4 flex-shrink-0 text-green-500 ${isPremium && 'text-yellow-500'}`}
      />
      <p>{description}</p>
    </li>
  );
};

export default PricingCardItem;
