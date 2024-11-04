import axios from 'axios';

import { endpoints } from '../endpoints/endpoints';

export const deleteUserAPI = async ({ userId }: { userId: string }) => {
  try {
    const response = await axios.delete(`${endpoints.profil.delete}/${userId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
