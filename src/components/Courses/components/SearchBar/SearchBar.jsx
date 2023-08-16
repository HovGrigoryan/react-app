import React, { useState } from 'react';
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <div className="search-bar">
            <Input
                type="text"
                placeholder="Search by title or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button buttonText="Search" onClick={handleSearch} />
            <Button buttonText="Clear" onClick={handleClearSearch} />
        </div>
    );
};

export default SearchBar;
