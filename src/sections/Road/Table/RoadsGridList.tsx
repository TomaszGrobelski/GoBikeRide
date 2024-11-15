import { useEffect, useState } from 'react';
import { BentoGrid, BentoGridItem } from '@/ui/organisms/GridBento/GridBento';

import { ITrail } from '@/types/Road/road.types';
import { usePagination } from '@/hooks/use-RoadPagination';

import RoadNotFound from '../Filters/RoadNotFound';
import iconsList from './difficultyIcons';
import PaginationButtons from './PaginationButtons';

interface IRoadsGridList {
    trailList: ITrail[] | undefined;
}

const ITEMS_PER_PAGE = 7;

export function RoadsGridList({ trailList }: IRoadsGridList) {
    const {
        currentPage,
        totalPages,
        paginatedItems: paginatedTrailList,
        goToNextPage,
        goToPreviousPage,
    } = usePagination<ITrail>({ items: trailList, itemsPerPage: ITEMS_PER_PAGE });

    return (
        <div className='flex h-full flex-col justify-between'>
            <BentoGrid className='mx-auto'>
                {paginatedTrailList &&
                    paginatedTrailList.map((item, i) => {
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

            {paginatedTrailList?.length === 0 ? (
                <RoadNotFound />
            ) : (
                <PaginationButtons
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={goToNextPage}
                    onPrevious={goToPreviousPage}
                />
            )}
        </div>
    );
}
