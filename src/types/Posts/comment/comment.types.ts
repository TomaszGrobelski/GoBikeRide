import { IUser } from '@/types/User/user.types';

export interface IComment {
  id: number;
  content: string;
  createdAt: Date;
  user: IUser;
  
}
