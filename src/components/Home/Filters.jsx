//Ecommerce reviewed 2023-02-01
import axios from 'axios';

import { useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';

import DropDown from './DropDown';

import { filterCategoryThunk } from '../../store/slices/products.slice';
import { filterPrice } from '../../store/slices/products.slice';

import '../../css/filters.css'

const Filters = ({ handleClose }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data));
    }, [])

    const dispatch = useDispatch();
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    const selectPrice = e => {
        e.preventDefault();
        dispatch(filterPrice({ priceFrom, priceTo }))
    }

    const selectCategory = id => {
        handleClose();
        dispatch(filterCategoryThunk(id))
    }

    return (
        <div className='filters'>
            <DropDown header='Search by Price' >
                <form className="price-filter" onSubmit={selectPrice}>
                    <label>
                        <span>From</span>
                        <input type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} />
                    </label>
                    <label>
                        <span>To</span>
                        <input type="number" value={priceTo} onChange={e => setPriceTo(e.target.value)} />
                    </label>
                    <button>
                        Filter by Price
                    </button>
                </form>
            </DropDown>
            <DropDown header='Search by Category'>
                <ul className='category-filter'>
                    {
                        categories.map(category => (
                            <li key={category.id}>
                                <button onClick={() => selectCategory(category.id)}>
                                    {category.name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </DropDown>
        </div>
    );
};

export default Filters;