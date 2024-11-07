import { Icon } from '@iconify/react/dist/iconify.js';

import colors from '@/styles/colors';

interface IShowMoreButton {
    onClick: VoidFunction;
}
const ShowMoreButton = ({ onClick }: IShowMoreButton) => {
    return (
        <button
            onClick={onClick}
            className='mt-3 flex items-center gap-2 self-center text-gray-500 hover:text-gray-800'
        >
            <Icon icon='si:expand-more-alt-fill' fontSize={24} color={colors.specialYellow} />
            <p className=''>Pokaż więcej komentarzy</p>
            <Icon icon='si:expand-more-alt-fill' fontSize={24} color={colors.specialYellow} />
        </button>
    );
};

export default ShowMoreButton;
