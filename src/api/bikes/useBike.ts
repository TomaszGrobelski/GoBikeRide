import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';

import { IBike } from '@/types/Bike/bike.types';

import {
  addBike,
  addComponent,
  deleteComponent,
  fetchBikes,
  removeBike,
} from './bikeQueries';

export const useFetchBikes = (userId: number) => {
  return useQuery({
    queryKey: ['bikes', userId],
    queryFn: () => fetchBikes(userId),
  });
};

export const useAddBike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newBike: { userId: number; brand: string; model: string }) =>
      addBike(newBike.userId, newBike.brand, newBike.model),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bikes'] });
    },
  });
};

export const useRemoveBike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (bikeId: number) => removeBike(bikeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bikes'] });
    },
  });
};

export const useAddComponent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newComponent: {
      bikeId: number;
      name: string;
      maintenanceDate: Date;
      currentState: string;
      currentMileageKm: number;
      maintenanceCost: number;
    }) => addComponent(newComponent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['components'] });
    },
  });
};

export const useDeleteComponent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (componentId: number) => {
      await deleteComponent({ componentId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['component'] });
    },
    onError: (error: unknown) => {
      console.error('Error deleting post:', error);
    },
  });
};
