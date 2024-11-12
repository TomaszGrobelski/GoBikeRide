import { BentoGrid, BentoGridItem } from '@/ui/organisms/GridBento/GridBento';
import { Icon } from '@iconify/react/dist/iconify.js';

import { Difficulty, ITrail, Province } from '@/types/Road/road.types';

interface IRoadsGridList {
    trailList: ITrail[] | undefined;
}

const iconsList = {
    [Difficulty.Low]: {
        difficulty: 'Low',
        icon: <Icon icon='healthicons:low-bars' fontSize={24} className='text-green-800' />,
    },
    [Difficulty.Medium]: {
        difficulty: 'Medium',
        icon: <Icon icon='healthicons:medium-bars' fontSize={24} className='text-orange-400' />,
    },
    [Difficulty.Hard]: {
        difficulty: 'Hard',
        icon: <Icon icon='healthicons:high-bars' fontSize={24} className='text-red-600' />,
    },
};

export function RoadsGridList({ trailList }: IRoadsGridList) {
    return (
        <BentoGrid className='mx-auto'>
            {trailList && trailList.map((item, i) => {
                const icon = iconsList[item.difficulty]?.icon;

                return (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.imageUrl}
                        icon={icon}
                        className={i === 3 || i === 6 ? 'cursor-pointer md:col-span-2' : 'cursor-pointer'}
                    />
                );
            })}
        </BentoGrid>
    );
}
