import axios from 'axios';

import { IUserResponse } from '@/types/Api/apiResponse';

import { endpoints } from '../endpoints/endpoints';

export const fetchUser = async (): Promise<IUserResponse> => {
  const response = await axios.get(endpoints.session.current);
  return response.data.user;
};
