import { useQuery } from '@tanstack/react-query';

import { ITrailResponse } from '@/types/Api/apiResponse';

import { fetchTrail } from './roadQueries';
import { ITrail } from '@/types/Road/road.types';

export const useFetchTrail = () => {
    return useQuery<ITrail[]>({
        queryKey: ['road'],
        queryFn: fetchTrail,
    });
};
