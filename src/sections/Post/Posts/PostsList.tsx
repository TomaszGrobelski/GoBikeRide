import Likes from '@/ui/molecules/Likes/Likes';
import { Icon } from '@iconify/react/dist/iconify.js';

import { IPost } from '@/types/Posts/posts.types';
import { IUser } from '@/types/User/user.types';

import CommentForm from '../Comments/CommentForm';
import CommentsList from '../Comments/CommentsList';
import PostContent from './PostContent';
import PostsDrowdown from './PostsDrowdown';
import PostSkeleton from './PostSkeleton';
import ReportPost from './ReportPost';
import UserInformation from './UserInformation';

interface IPostsList {
  refetch: () => Promise<any>;
  posts: IPost[] | undefined;
  user: IUser | undefined;
}

const PostsList = ({ posts, user, refetch }: IPostsList) => {
  if (!user || !posts) {
    return <PostSkeleton />;
  }

  return (
    <div className='flex w-full flex-col items-center gap-16'>
      {posts &&
        posts.map((post) => {
          const isUserPost = post.userId === user.id;

          return (
            <div
              key={post.id}
              className='relative w-full max-w-[800px] space-y-6 rounded-3xl border-[1px] p-10 shadow-sm shadow-white'
            >
              {isUserPost && <PostsDrowdown postId={post.id} />}

              {!isUserPost && <ReportPost />}

              <UserInformation user={post.user} createdAt={post.createdAt} />

              <PostContent
                description={post.description}
                imageUrl={post.imageUrl}
                postId={post.id}
              />

              <Likes
                likes={post.likes || []}
                postId={post.id}
                userId={user.id}
                refetch={refetch}
              />

              <CommentForm user={user} postId={post.id} refetch={refetch} />

              <CommentsList comments={post.comments} />
            </div>
          );
        })}
    </div>
  );
};

export default PostsList;
