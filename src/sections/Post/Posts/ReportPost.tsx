import { useModalStore } from '@/store/useModalStore';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { Icon } from '@iconify/react/dist/iconify.js';

import ReportPostModalContent from './Modals/ReportPostModalContent';

const ReportPost = () => {
    const { openModal, closeModal } = useModalStore((state) => ({
        openModal: state.openModal,
        closeModal: state.closeModal,
    }));

    const openReportModal = () =>
        openModal({
            children: <ReportPostModalContent closeModal={closeModal} />,
        });

    return (
        <LightTooltip title='Zgłoś post'>
            <button
                onClick={openReportModal}
                className='absolute right-5 top-5 hover:rounded-full hover:bg-gray-200 focus:outline-none'
            >
                <Icon icon='ci:warning' fontSize={38} />
            </button>
        </LightTooltip>
    );
};

export default ReportPost;
