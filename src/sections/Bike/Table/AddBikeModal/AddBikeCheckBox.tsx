import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { Checkbox } from '@mui/material';

interface IAddBikeCheckBox {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
const AddBikeCheckBox = ({ checked, onChange }: IAddBikeCheckBox) => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className='h-7'>Dodaj domyślne podzespoły</span>
      <LightTooltip
        placement='right'
        title='Domyślne podzespoły: Łańcuch, Kaseta(zębatki tylne), Korba(zębatki przednie), Linka i pancerz przerzutek, Linka i pancerz hamulców, hamulce, Opony'
      >
        <div className='grid h-5 w-5 cursor-pointer place-items-center rounded-full border-[1px] border-gray-600 text-[12px]'>
          i
        </div>
      </LightTooltip>
    </div>
  );
};

export default AddBikeCheckBox;
