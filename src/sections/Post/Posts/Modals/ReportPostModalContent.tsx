import React from 'react';
import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';

interface IReportPostModalContent {
    closeModal: VoidFunction;
}
const ReportPostModalContent = ({ closeModal }: IReportPostModalContent) => {
    const handleReport = async () => {
        closeModal();
    };
    return (
        <div className='flex min-h-60 flex-col items-end gap-5'>
            <p className='self-start text-[20px]'>Podaj powód zgłoszenia:</p>

            <textarea
                className='flex-grow w-[100%] self-start border-b-1 border-gray-800 outline-none'
                placeholder='Powód....'
            />

            <DeleteButton onClick={handleReport} title='Zgłoś post' isIcon={false} />
        </div>
    );
};

export default ReportPostModalContent;
