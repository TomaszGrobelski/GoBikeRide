import axios from 'axios';

import { IUser } from '@/types/User/user.types';

import { endpoints } from '../endpoints/endpoints';

export const fetchUsers = async (): Promise<IUser[]> => {
  const { data } = await axios.get(endpoints.users.all);
  return data;
};
