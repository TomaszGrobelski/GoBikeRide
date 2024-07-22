export interface IUser {
  id: number;
  username: string;
  createdAt: Date;
  posts_count: number;
  routes_count: number;
  bikes_count: number;
  avatar_url?: string;
}
