'use client';
import React, { useState } from 'react';
import { ReactNode } from 'react';
interface ProductGridListProps {
    children: ReactNode;
    itemsPerPage?: number; // Optional: Allow specifying items per page
}

const ProductGridList: React.FC<ProductGridListProps> = ({ children, itemsPerPage = 6 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Convert children to an array
    const childrenArray = React.Children.toArray(children);
    const totalItems = childrenArray.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the items to display on the current page
    const currentItems = childrenArray.slice(startIndex, endIndex);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const getDisplayedPages = () => {
        const displayedPages: (number | '...')[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                displayedPages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                displayedPages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                displayedPages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                displayedPages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return displayedPages;
    };

    const displayedPages = getDisplayedPages();

    const showingStart = (currentPage - 1) * itemsPerPage + 1;

    return (
        <div className="w-2/3 h-fit flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 md:gap-4 w-full">
                {currentItems}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-between items-center w-fit mt-4 bg-gray-100 p-2 rounded-full">
                    <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center px-3 py-1 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </button>

                    <div className="flex items-center">
                        {displayedPages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page === '...' ? (
                                    <span className="px-3 py-1">{page}</span>
                                ) : (
                                    <button
                                        onClick={() => handlePageClick(page)}
                                        className={`px-3 py-1 rounded-full hover:bg-gray-200 ${currentPage === page ? 'bg-blue-500 text-white' : ''
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center px-3 py-1 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <span className="text-sm text-gray-600 ml-4">
                        Showing {showingStart} of {totalItems} results
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProductGridList;
