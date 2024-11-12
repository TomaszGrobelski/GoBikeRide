import axios from 'axios';

import { ITrailResponse } from '@/types/Api/apiResponse';

import { endpoints } from '../endpoints/endpoints';
import { ITrail } from '@/types/Road/road.types';

export const fetchTrail = async (): Promise<ITrail[]> => {
    const response = await axios.get(endpoints.road);
    return response.data;
};
