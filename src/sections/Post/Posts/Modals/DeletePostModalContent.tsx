import { useDeletePost } from '@/api/posts/usePost';
import { useModalStore } from '@/store/useModalStore';
import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';

interface DeletePostModalContentProps {
  postId: number;
}

const DeletePostModalContent = ({ postId }: DeletePostModalContentProps) => {
  const { mutate: deleteMutation, isPending } = useDeletePost();
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
        <DeleteButton onClick={handleDeletePost} disabled={isPending} />

      </div>
    </div>
  );
};

export default DeletePostModalContent;
