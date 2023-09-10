import React, { useState } from 'react';
const SearchList = () => {
    // Sample list of items
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Lemon',
        'Mango',
        'Orange',
        'Peach',
        'Strawberry',
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredItems = items.filter((item) =>
            item.toLowerCase().includes(searchTerm)
        );
        setSearchTerm(searchTerm);
        setFilteredItems(filteredItems);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setFilteredItems(items);
    };

    return (
        <div>
            <h1>Search List</h1>
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button onClick={clearSearch}>Clear</button>
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index } style={{ listStyleType: 'none' }}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchList;
