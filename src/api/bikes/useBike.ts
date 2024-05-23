import { useQuery, UseQueryResult, useMutation, useQueryClient } from 'react-query';

import { IBike } from '@/types/Bike/bike.types';

import { addBike, fetchBikes, removeBike } from './bikeQueries';

export const useFetchBikes = (userId: number) => {
  return useQuery(['bikes', userId], () => fetchBikes(userId));
};

export const useAddBike = () => {
  const queryClient = useQueryClient();
  return useMutation((newBike: { userId: number; brand: string; model: string }) => addBike(newBike.userId, newBike.brand, newBike.model), {
    onSuccess: () => {
      queryClient.invalidateQueries('bikes');
    },
  });
};

export const useRemoveBike = () => {
  const queryClient = useQueryClient();
  return useMutation((bikeId: number) => removeBike(bikeId), {
    onSuccess: () => {
      queryClient.invalidateQueries('bikes');
    },
  });
};
