import React, { useState } from "react";
import "../styles/style.css";

export const PaginationPanel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = 10;

    const goToPage = (page) => {
        if (page >= 1 && page <= pageCount) {
            setCurrentPage(page);
        }
    };

    const getPagination = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (pageCount <= maxPagesToShow) {
            for (let i = 1; i <= pageCount; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push("...");
            }

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(pageCount - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (currentPage < pageCount - 2) {
                pages.push("...");
            }

            pages.push(pageCount);
        }

        return pages;
    };

    return (
        <div className="pagination-container">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
                            Predošlá
                        </button>
                    </li>

                    {getPagination().map((page, index) => (
                        <li key={index} className={`page-item ${currentPage === page ? "active" : ""}`}>
                            {page === "..." ? (
                                <span className="page-link">...</span>
                            ) : (
                                <button className="page-link" onClick={() => goToPage(page)}>
                                    {page}
                                </button>
                            )}
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
                            Nasledujúca
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
