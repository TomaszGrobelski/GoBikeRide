import { Icon } from '@iconify/react';

import { Difficulty } from '@/types/Road/road.types';

const iconsList = {
    [Difficulty.All]: {
        difficulty: 'All',
        icon: null,
    },
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

export default iconsList;
