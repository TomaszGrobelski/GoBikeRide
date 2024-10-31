import { IBike } from '../Bike/bike.types';
import { IPost } from '../Posts/posts.types';

export enum MainMethod {
  Szosowy,
  Gravel,
  Gorski,
}

export interface IUser {
  id: string;
  username: string;
  createdAt: Date;
  respect: number;
  avatar_url?: string;
  socialMedia: ISocialMedia;
  posts: IPost[];
  bikes: IBike[];
  mainMethod: MainMethod;
}

export interface ISocialMedia {
  instagram?: string;
  facebook?: string;
  twitter?: string;
}
