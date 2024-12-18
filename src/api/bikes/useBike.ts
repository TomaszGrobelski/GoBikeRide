import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
    addBike,
    addComponent,
    deleteComponent,
    fetchBikes,
    removeBike,
    updateBike,
    updateComponent,
} from './bikeQueries';

export const useFetchBikes = (userId: string) => {
    return useQuery({
        queryKey: ['bikes', userId],
        queryFn: () => fetchBikes(userId),
    });
};

export const useAddBike = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newBike: { userId: string; brand: string; model: string; addDefaultComponents: boolean }) =>
            addBike(newBike.userId, newBike.brand, newBike.model, newBike.addDefaultComponents),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bikes'] });
        },
        onError: (error) => {
            alert(`Nie udało się dodać roweru: ${error}`);
        },
    });
};

export const useUpdateBike = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedBike: { bikeId: number; brand: string; model: string }) =>
            updateBike(updatedBike.bikeId, updatedBike.brand, updatedBike.model),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bikes'] });
        },
        onError: (error) => {
            alert(`Nie udało się zaktualizować roweru: ${error}`);
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
        onError: (error) => {
            alert(`Nie udało się usunąć roweru: ${error}`);
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
            queryClient.invalidateQueries({ queryKey: ['bikes'] });
        },
        onError: (error) => {
            alert(`Nie udało się dodać komponentu: ${error}`);
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
            queryClient.invalidateQueries({ queryKey: ['bikes'] });
        },
        onError: (error) => {
            alert(`Nie udało się usunąć komponentu: ${error}`);
        },
    });
};

export const useUpdateComponent = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (updatedComponent: {
            componentId: string;
            bikeId: number | string;
            name: string;
            maintenanceDate: Date;
            currentState: string;
            currentMileageKm: number;
            maintenanceCost: number;
        }) => updateComponent(updatedComponent),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bikes'] });
        },
        onError: (error) => {
            alert(`Nie udało się zaktualizować komponentu: ${error}`);
        },
    });
};
