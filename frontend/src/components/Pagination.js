import React from "react";
import "../styles/style.css";

//reprezentuje stránkovanie položiek zoznamu
export const PaginationPanel = ({ currentPage, goToPage, pageCount }) => {
    return (
        <>
            <div className="pagination-container">
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => goToPage(currentPage - 1)}>Predošlá</button>
                        </li>

                        {currentPage > 3 && (
                            <>
                                <li className="page-item">
                                    <button className="page-link" onClick={() => goToPage(1)}>1</button>
                                </li>
                                {currentPage > 4 && <li className="page-item disabled"><span className="page-link">...</span></li>}
                            </>
                        )}

                        {[...Array(pageCount)].map((_, index) => {
                            const page = index + 1;
                            if (page >= currentPage - 2 && page <= currentPage + 2) {
                                return (
                                    <li key={index} className={`page-item ${currentPage === page ? "active" : ""}`}>
                                        <button className="page-link" onClick={() => goToPage(page)}>
                                            {page}
                                        </button>
                                    </li>
                                );
                            }
                            return null;
                        })}

                        {currentPage < pageCount - 2 && (
                            <>
                                {currentPage < pageCount - 3 && <li className="page-item disabled"><span className="page-link">...</span></li>}
                                <li className="page-item">
                                    <button className="page-link" onClick={() => goToPage(pageCount)}>{pageCount}</button>
                                </li>
                            </>
                        )}

                        <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => goToPage(currentPage + 1)}>Nasledujúca</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
