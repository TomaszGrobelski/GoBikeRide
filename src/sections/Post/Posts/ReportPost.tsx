import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { Icon } from '@iconify/react/dist/iconify.js';

const ReportPost = () => {
  return (
    <LightTooltip title='Zgłoś post'>
      <button className='absolute right-5 top-5  hover:rounded-full hover:bg-gray-200 focus:outline-none'>
        <Icon icon='ci:warning' fontSize={38} />
      </button>
    </LightTooltip>
  );
};

export default ReportPost;
