import { useAddBike } from '@/api/bikes/useBike';
import { Icon } from '@iconify/react/dist/iconify.js';

const AddBikeButton = () => {
  const addBikeMutation = useAddBike();
  const handleAddBike = async () => {
    await addBikeMutation.mutateAsync({
      userId: 19,
      brand: 'Cos',
      model: 'Tam'
    });
    console.log(handleAddBike);
  };
  return (
    <button onClick={handleAddBike} className='flex items-center '>
      <Icon icon='basil:add-outline' fontSize={26} />
      Dodaj rower
    </button>
  );
};

export default AddBikeButton;
