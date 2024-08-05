import axios from 'axios';

import { IBikeResponse } from '@/types/Api/apiResponse';
import { IBike } from '@/types/Bike/bike.types';
import { IComponents } from '@/types/Bike/Components/components.types';

import { endpoints } from '../endpoints/endpoints';

export const fetchBikes = async (userId: number): Promise<IBikeResponse> => {
  const response = await axios.get(`${endpoints.bike.all}?userId=${userId}`);
  return response.data;
};

export const addBike = async (
  userId: number,
  brand: string,
  model: string,
): Promise<IBike> => {
  const response = await axios.post(endpoints.bike.all, {
    userId,
    brand,
    model,
  });
  return response.data;
};

export const removeBike = async (bikeId: number): Promise<void> => {
  await axios.delete(`${endpoints.bike.all}/${bikeId}`);
};

export const addComponent = async (newComponent: {
  bikeId: number;
  type: string;
  maintenanceDate: Date;
  currentState: string;
  currentMileageKm: number;
  maintenanceCost: number;
}): Promise<IComponents> => {
  const response = await axios.post(
    endpoints.bike.components.all,
    newComponent,
  );
  return response.data;
};
