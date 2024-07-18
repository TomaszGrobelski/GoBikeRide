import axios from 'axios';

import { IUser } from '@/types/User/user.types';

import { endpoints } from '../endpoints/endpoints';

export const fetchUser = async (): Promise<IUser | undefined> => {
  const response = await axios.get(endpoints.session.current);
  return response.data.user;
};
