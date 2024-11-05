import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ISocialMedia, IUser, RespectAction } from '@/types/User/user.types';

import {
    deleteNotification,
    fetchNotification,
    fetchSocialMedia,
    fetchUser,
    updateRespect,
    updateSocial,
} from './userQueries';

export const useUser = () => {
    return useQuery<IUser | undefined>({
        queryKey: ['user'],
        queryFn: fetchUser,
    });
};

export const useSocialMedia = (userId: string) => {
    // Nie używane i fetchSocialMedia też ( sprawdzić)
    return useQuery<ISocialMedia | undefined>({
        queryKey: ['socialMedia', userId],
        queryFn: () => fetchSocialMedia(userId),
    });
};

export const useUpdateSocialMedia = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (socialData: {
            userId: string;
            instagram: string | undefined;
            facebook: string | undefined;
            twitter: string | undefined;
        }) => {
            return updateSocial(socialData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error) => {
            console.error('Error updating social media:', error);
        },
    });
};

export const useUpdateRespect = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            giverId,
            receiverId,
            action,
        }: {
            giverId: string;
            receiverId: string;
            action: RespectAction.INCREMENT | RespectAction.DECREMENT;
        }) => {
            return updateRespect(giverId, receiverId, action);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            queryClient.invalidateQueries({ queryKey: ['notification'] });
        },
        onError: (error) => {
            console.error('Error updating respect:', error);
        },
    });
};

export const useNotification = (userId: string) => {
    return useQuery({
        queryKey: ['notification', userId],
        queryFn: () => fetchNotification(userId),
    });
};

export const useDeleteNotification = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (notificationId: number) => deleteNotification(notificationId), // Usunięcie notificationId jako argumentu hooka
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notification'] });
        },
    });
};
