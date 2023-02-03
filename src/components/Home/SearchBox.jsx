import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Filters from './Filters';

import { filterNameThunk } from '../../store/slices/products.slice';

const SearchBox = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const [ search, setSearch ] = useState("");

    const dispatch = useDispatch();

    const handleSearch = e => {
        e.preventDefault();
        dispatch(filterNameThunk(search));
    }

    return (
        <div className='search-box'>
            <form className="input" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="What do you need to Buy?" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button>
                    <i className='bx bx-search-alt-2'></i>
                </button>
            </form>
            <button 
                className='filter-button' 
                onClick={() => setIsOpen(!isOpen)}
                style={{color: isOpen ? 'var(--primary)' : ''}}
            >
                <i className="icon-filter"></i>
                Filters
            </button>
            <div className={`filters-modal ${isOpen ? 'open' : ''}`}>
                <button className='close' onClick={() => setIsOpen(false)}>
                    <i className="icon-x"></i>
                </button>
                <h5>Filters</h5>
                <Filters handleClose={() => setIsOpen(!isOpen)} />
            </div>
            {
                isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>
            }
        </div>
    );
};

export default SearchBox;