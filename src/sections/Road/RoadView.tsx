'use client';

import { useFetchTrail } from '@/api/road/useRoad';

import useFilteredTrails from '@/hooks/use-FilterTrails';

import RoadFilters from './Filters/RoadFilters';
import RoadBackGround from './RoadBackGround';
import { RoadsGridList } from './Table/RoadsGridList';
import RoadTabelContainter from './Table/RoadTabelContainter';

const RoadView = () => {
    const { data: trailList } = useFetchTrail();

    const { filteredTrailList, filters, setFilters } = useFilteredTrails(trailList);
    console.log(trailList);
    if (!trailList) {
        return null;
    }

    return (
        <section className='flex h-full bg-secoundSea flex-col items-center justify-center -mt-5  gap-4 p-2 px-5 pt-5'>
            {/* <RoadBackGround /> */}

            <RoadTabelContainter>
                <RoadFilters filters={filters} setFilters={setFilters} />
                <RoadsGridList trailList={filteredTrailList} />
            </RoadTabelContainter>
        </section>
    );
};

export default RoadView;
