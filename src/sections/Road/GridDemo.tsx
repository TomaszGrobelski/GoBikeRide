import { BentoGrid, BentoGridItem } from '@/ui/organisms/GridBento/GridBento';

import { roadItems } from './roadItemsMock';

export function BentoGridDemo() {
    return (
        <BentoGrid className='mx-auto '>
            {roadItems.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? 'cursor-pointer md:col-span-2' : 'cursor-pointer'}
                />
            ))}
        </BentoGrid>
    );
}
