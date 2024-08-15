import { useDeleteComponent } from '@/api/bikes/useBike';
import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';

interface IDeleteComponentModalContent {
  componentId: number;
  title: string;
  handleDeleteSuccess: VoidFunction;
  handleRefetch: VoidFunction;
}
const DeleteComponentModalContent = ({
  componentId,
  title,
  handleDeleteSuccess,
  handleRefetch,
}: IDeleteComponentModalContent) => {
  const { mutate: deleteComponent, isPending } = useDeleteComponent();

  const handleDeleteComponent = async () => {
    console.log('Deleting component...');
    await deleteComponent(componentId);
    console.log('Refetching data...');
    await handleRefetch();
    console.log('Handling delete success...');
    await handleDeleteSuccess();
  };
  return (
    <div className='flex flex-col gap-4 p-2'>
      <p className='text-[18px]'>Czy chce usunąć komponent o nazwie: </p>
      <span>{title}</span>

      <div className='flex items-center gap-2 self-end'>
        <DeleteButton disabled={isPending} onClick={handleDeleteComponent} />
      </div>
    </div>
  );
};

export default DeleteComponentModalContent;
