import { IBike } from '../Bike/bike.types';
import { IPost } from '../Posts/posts.types';

export enum MainMethod {
    Szosowy,
    Gravel,
    Gorski,
}

export enum RespectAction {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
}

interface IUserReceivedRespect {
    id: string;
    giverId: string;
    receiverId: string;
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
    receivedRespects?: IUserReceivedRespect[];
}

export interface ISocialMedia {
    instagram?: string;
    facebook?: string;
    twitter?: string;
}

export interface INotification {
    id: number;
    message: string;
    sender: IUser;
    createdAt: Date;
    type: 'Respect' | 'Comment';
}
