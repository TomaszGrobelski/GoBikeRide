import axios from 'axios';

import { IUserResponse } from '@/types/Api/apiResponse';

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



export const updateRespect = async (giverId: string, receiverId: string, action: 'increment' | 'decrement') => {
  const response = await axios.put(`${endpoints.profil.respect}/${receiverId}`, { giverId, action });
  return response.data;
};