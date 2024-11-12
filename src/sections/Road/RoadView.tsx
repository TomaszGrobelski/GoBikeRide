'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useFetchTrail } from '@/api/road/useRoad';

import { Difficulty, ITrail } from '@/types/Road/road.types';

import { roadItems } from '../../Mock/roadItemsMock';
import RoadFilters from './Filters/RoadFilters';
import RoadBackGround from './RoadBackGround';
import { RoadsGridList } from './RoadsGridList';
import RoadTabelContainter from './Table/RoadTabelContainter';

const RoadView = () => {
    const { data: trailList } = useFetchTrail();
    const [filteredTrailList, setFilteredTrailList] = useState<ITrail[] | undefined>(trailList);

    console.log(trailList);

    useEffect(() => {
        if (!trailList) return;

        let filtredList = [...trailList];

        // filtredList = filtredList.filter((item) => item.difficulty === Difficulty.Low);

        setFilteredTrailList(filtredList);
    }, [trailList]);

    if (!trailList) {
        return null;
    }
    return (
        <section className='flex h-full w-full flex-col items-center gap-4 p-2 px-5 pt-5'>
            <RoadBackGround />

            <RoadTabelContainter>
                <RoadFilters />
                <RoadsGridList trailList={filteredTrailList} />
            </RoadTabelContainter>
        </section>
    );
};

export default RoadView;
