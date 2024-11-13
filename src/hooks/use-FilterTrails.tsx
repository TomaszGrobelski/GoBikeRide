import { useEffect, useState } from 'react';

import { Difficulty, ITrail, ITrailFilters } from '@/types/Road/road.types';

const useFilteredTrails = (trailList: ITrail[] | undefined) => {
    const [filters, setFilters] = useState<ITrailFilters>({
        name: '',
        province: '',
        difficulty: Difficulty.All,
    });

    const [filteredTrailList, setFilteredTrailList] = useState<ITrail[]>([]);

    useEffect(() => {
        if (!trailList) return;

        const filtredList = trailList.filter(
            (item) =>
                (filters.name ? item.title.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
                (filters.province ? item.province === filters.province : true) &&
                (filters.difficulty !== Difficulty.All ? item.difficulty === filters.difficulty : true),
        );

        setFilteredTrailList(filtredList);
    }, [trailList, filters]);

    return { filteredTrailList, filters, setFilters };
};

export default useFilteredTrails;
