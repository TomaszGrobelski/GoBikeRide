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
        className={`flex w-full justify-start text-nowrap rounded-lg border-[1px] border-b-8 border-r-8 border-[#5F286B] shadow-md backdrop-blur-xl duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:border-b-4 hover:border-r-4 ${
          isActive
            ? 'pointer-events-none border-b-4 border-r-4 border-gray-300 bg-mainPurple text-white'
            : 'hover:bg-mainPurple hover:text-white'
        }`}
      >
        <Link
          className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${
            isExpanded ? 'pr-4' : 'pr-20'
          } `}
          href={item.link}
        >
          <Icon icon={item.icon} width={20} height={20} />

          <motion.p
            className={`'flex-grow ' ${isExpanded && 'hidden'}`}
            animate={{
              opacity: isExpanded ? 0 : 1,
              width: isExpanded ? 0 : 100,
            }}
            exit={{ opacity: 0, width: 15, display: 'hidden' }}
            transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
          >
            {!isExpanded && item.title}
          </motion.p>
        </Link>
      </li>
    </LightTooltip>
  );
};

export default NavListItem;
