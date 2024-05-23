import axios from 'axios';
import { IBike } from '@/types/Bike/bike.types';
import { endpoints } from '../endpoints/endpoints';


export const fetchBikes = async (userId: number): Promise<IBike[]> => {
  const response = await axios.get(`${endpoints.bike.all}?userId=${userId}`);
  return response.data;
};

export const addBike = async (
  userId: number,
  brand: string,
  model: string
): Promise<IBike> => {
  const response = await axios.post(endpoints.bike.all, {
    userId,
    brand,
    model
  });
  return response.data;
};

export const removeBike = async (bikeId: number): Promise<void> => {
  await axios.delete(`${endpoints.bike.all}/${bikeId}`);
};
