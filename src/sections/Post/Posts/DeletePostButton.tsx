import { endpoints } from '@/api/endpoints/endpoints';
import { useDeletePost } from '@/api/posts/usePost';
import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';

interface Props {
  postId: number;
}
const DeletePostButton = ({ postId }: Props) => {
  const deleteMutation = useDeletePost();

  const handleDeletePost = async () => {
    deleteMutation.mutate(postId);
  };

  return (
    <button onClick={handleDeletePost} className='absolute right-5 top-0'>
      <Icon icon='streamline:delete-1-solid' />
    </button>
  );
};

export default DeletePostButton;
