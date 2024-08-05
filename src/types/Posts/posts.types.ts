import { IUser } from '../User/user.types';

export interface IPost {
  id: number;
  userId: number;
  imageUrl: string;
  description: string;
  createdAt: Date;
  likes: [];
  user: IUser;
  comments: [];
}
