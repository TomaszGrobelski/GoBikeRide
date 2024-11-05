import axios from 'axios';

import { IUserResponse } from '@/types/Api/apiResponse';
import { RespectAction } from '@/types/User/user.types';

import { endpoints } from '../endpoints/endpoints';

export const fetchUser = async (): Promise<IUserResponse> => {
    const response = await axios.get(endpoints.session.current);
    return response.data.user;
};

export const fetchSocialMedia = async (userId: string) => {
    const response = await axios.get(`/api/social-media/${userId}`);
    return response.data;
};

export const updateSocial = async (socialData: {
    userId: string;
    instagram: string | undefined;
    facebook: string | undefined;
    twitter: string | undefined;
}) => {
    const response = await axios.put(`${endpoints.profil.social}/${socialData.userId}`, socialData);
    return response.data;
};

export const updateRespect = async (
    giverId: string,
    receiverId: string,
    action: RespectAction.INCREMENT | RespectAction.DECREMENT,
) => {
    const response = await axios.put(`${endpoints.profil.respect}/${receiverId}`, { giverId, action });

    if (action === RespectAction.INCREMENT) {
        await axios.post(`${endpoints.notifications}`, {
            userId: receiverId,
            senderId: giverId,
            type: 'Respect',
            message: 'dał ci respekt!',
            isRead: false,
        });
    }
    return response.data;
};

export const fetchNotification = async (userId: string) => {
    const response = await axios.get(`${endpoints.notifications}/${userId}`);
    return response.data;
};

export const deleteNotification = async (notificationId: number) => {
    const response = await axios.delete(`${endpoints.notifications}/${notificationId}`);
    return response.data;
};
