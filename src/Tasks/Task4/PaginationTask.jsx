import React, { useState, useEffect } from 'react';

const Pagination = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        setCurrentItems(items.slice(0, itemsPerPage));
    }, [items, itemsPerPage]);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            const startIndex = (currentPage + 1 - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setCurrentItems(items.slice(startIndex, endIndex));
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            const startIndex = (currentPage - 1 - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setCurrentItems(items.slice(startIndex, endIndex));
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <table style={{ margin: '0 auto', fontSize: '18px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td style={{ borderBottom: '1px solid #ccc' }}>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /> <br />
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    { id: 11, name: 'Item 11' },
    { id: 12, name: 'Item 12' },
];

const itemsPerPage = 5;

const PaginationApp = () => {
    return (
        <div className="App">
            <Pagination items={items} itemsPerPage={itemsPerPage} />
        </div>
    );
};

export default PaginationApp;
