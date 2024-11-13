import { BentoGrid, BentoGridItem } from '@/ui/organisms/GridBento/GridBento';

import { ITrail } from '@/types/Road/road.types';

import iconsList from './difficultyIcons';

interface IRoadsGridList {
    trailList: ITrail[] | undefined;
}

export function RoadsGridList({ trailList }: IRoadsGridList) {
    return (
        <BentoGrid className='mx-auto'>
            {trailList &&
                trailList.map((item, i) => {
                    const icon = iconsList[item.difficulty]?.icon;

                    return (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.imageUrl}
                            province={item.province}
                            rating={item.rating}
                            icon={icon}
                            className={i === 3 || i === 6 ? 'cursor-pointer md:col-span-2' : 'cursor-pointer'}
                        />
                    );
                })}
        </BentoGrid>
    );
}
