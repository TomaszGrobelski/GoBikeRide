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
  addDefaultComponents: boolean,
): Promise<IBike> => {
  const response = await axios.post(endpoints.bike.all, {
    userId,
    brand,
    model,
    addDefaultComponents,
  });
  return response.data;
};

export const updateBike = async (
  bikeId: number,
  brand: string,
  model: string,
): Promise<IBike> => {
  const response = await axios.put(`${endpoints.bike.all}/${bikeId}`, {
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
  name: string;
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

export const deleteComponent = async ({
  componentId,
}: {
  componentId: number;
}) => {
  try {
    const response = await axios.delete(
      `${endpoints.bike.components.all}/${componentId}`,
    );
    return response;
  } catch (error) {
    throw error;
  }
};
