import React, { useEffect, useState } from 'react'

interface IPagination {
    totalPages: number,
    currentPage: number,
    setCurrentPage: (page: number) => void
}

const Pagination = ({ totalPages, currentPage, setCurrentPage }: IPagination) => {
    const [visiblePages, setVisiblePages] = useState<number[]>([]);

    useEffect(() => {
        updateVisiblePages(currentPage);
    }, [currentPage]);

    const updateVisiblePages = (page: number) => {
        const startPage = Math.max(page - 2, 1);
        const endPage = Math.min(startPage + 4, totalPages);

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        setVisiblePages(pages);
    };

    const onNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>Pagination</div>
    )
}

export default Pagination