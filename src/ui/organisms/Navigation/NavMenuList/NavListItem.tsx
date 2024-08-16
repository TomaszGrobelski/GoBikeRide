'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface NavItemProps {
  title: string;
  link: string;
  icon: string;
}

interface NavListItemProps {
  isExpanded: boolean;
  item: NavItemProps;
}

const NavListItem = ({ isExpanded, item }: NavListItemProps) => {
  const router = usePathname();

  const isActive = router.includes(item.link);

  return (
    <LightTooltip
      disableHoverListener={!isExpanded}
      title={item.title}
      placement='right'
    >
      <li
        className={`border-mainColor flex w-full justify-start text-nowrap rounded-lg border-[1px] border-b-8 border-r-8 shadow-md backdrop-blur-xl duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:border-b-4 hover:border-r-4 ${
          isActive
            ? 'bg-mainColor pointer-events-none border-b-4 border-r-4 border-stone-300 text-white'
            : 'hover:bg-mainColor hover:text-white'
        }`}
      >
        <Link
          className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${
            isExpanded ? 'pr-0' : 'pr-20'
          } `}
          href={item.link}
        >
          <Icon icon={item.icon} width={20} height={20} />

          <motion.p
            className={`'flex-grow '`}
            animate={{
              opacity: isExpanded ? 0 : 1,
              width: isExpanded ? 0 : 70,
            }}
            exit={{ opacity: 0, width: 20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {!isExpanded && item.title}
          </motion.p>
        </Link>
      </li>
    </LightTooltip>
  );
};

export default NavListItem;
