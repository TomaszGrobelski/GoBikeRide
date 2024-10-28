import { IUser } from '../User/user.types';
import { IComment } from './comment/comment.types';

export interface IPost {
  id: number;
  userId: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
  likes: [];
  user: IUser;
  comments: IComment[];
}

export interface ILike {
  id: number;
  postId: number;
  userId: string;
  createdAt: string;
  user: IUser;
}

export interface ILikes {
  likes: ILike[];
}
