import { useDeletePost } from '@/api/posts/usePost';
import { useModalStore } from '@/store/useModalStore';

interface DeletePostModalContentProps {
  postId: number;
}

const DeletePostModalContent = ({ postId }: DeletePostModalContentProps) => {
  const { mutate: deleteMutation, isLoading } = useDeletePost();
  const closeModal = useModalStore((state) => state.closeModal);

  const handleDeletePost = () => {
    deleteMutation(postId, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  return (
    <div className='flex flex-col items-start gap-3 p-10 font-poppins'>
      <span className='text-[28px]'>Usuń Post</span>
      <p>Czy napewno chce usunąc ten post ?</p>
      <div className='mt-4 flex items-center gap-3 self-end'>
        <button
          onClick={closeModal}
          className='self-end rounded-md border-[1px] p-1 px-6 text-secoundSea'
        >
          Anuluj
        </button>
        <button
          onClick={handleDeletePost}
          disabled={isLoading}
          className='self-end rounded-md border-[1px] bg-red-600 p-1 px-6 text-white hover:bg-red-500'
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default DeletePostModalContent;
