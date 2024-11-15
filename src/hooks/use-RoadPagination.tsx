import { useEffect, useState } from 'react';

interface UsePaginationProps<T> {
    items: T[] | undefined;
    itemsPerPage: number;
}

export function usePagination<T>({ items, itemsPerPage }: UsePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1); // Resetowanie strony, gdy zmienia się lista elementów
    }, [items]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = items?.slice(startIndex, endIndex);
    const totalPages = items ? Math.ceil(items.length / itemsPerPage) : 1;

    return {
        currentPage,
        totalPages,
        paginatedItems,
        goToNextPage: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
        goToPreviousPage: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
    };
}
