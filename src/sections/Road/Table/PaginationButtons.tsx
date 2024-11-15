interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
}

const PaginationButtons = ({ currentPage, totalPages, onNext, onPrevious }: PaginationProps) => {
    return (
        <div className='flex w-[400px] mt-2 items-center justify-center self-end rounded-md bg-white py-2'>
            <button
                disabled={currentPage === 1}
                onClick={onPrevious}
                className='rounded bg-gray-300 px-4 py-2 disabled:opacity-80'
            >
                Poprzednia
            </button>
            <span className='mx-4'>{`Strona ${currentPage} z ${totalPages}`}</span>
            <button
                disabled={currentPage === totalPages}
                onClick={onNext}
                className='rounded bg-gray-300 px-4 py-2 disabled:opacity-80'
            >
                Następna
            </button>
        </div>
    );
};

export default PaginationButtons;
