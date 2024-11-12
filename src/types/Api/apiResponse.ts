import { IBike } from '../Bike/bike.types';
import { IPost } from '../Posts/posts.types';
import { ITrail } from '../Road/road.types';
import { IUser } from '../User/user.types';

type IApiResponse<T> = T | undefined;

export type IPostResponse = IApiResponse<IPost[]>;
export type IUserResponse = IApiResponse<IUser>;
export type IBikeResponse = IApiResponse<IBike[]>;
export type ITrailResponse = IApiResponse<ITrail[]>;
