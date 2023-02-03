import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import setLoginMessage from '../store/slices/app.slice';
import { addToCartThunk } from '../store/slices/cart.slice';
import '../css/product-card.css';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToCart = () => {
        if (localStorage.getItem("token")) {
            const productCart = {
                productId: product.id,
                quantity: 1
            }
            dispatch(addToCartThunk(productCart));
        } else {
            dispatch(setLoginMessage("You must login to add to cart"))
            navigate("/login");
        }
    }

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <div>
            <div className="product-card">
                <div className="product-header" onClick={handleClick}>
                    <img className='product-img' src={product.images[0].url} alt='' />
                    <img className='product-img' src={product.images[1].url} alt='' />
                </div>
                <div className='product-tittle'>
                    <h3 className='product-name'>{product.title}</h3>
                </div>
                <div className='product-body'>
                    <div className='product-price-container'>
                        <span className='product-price-label'>Price</span>
                        <h4 className='product-price-number'>{product.price}</h4>
                    </div>
                    <button className='product-btn' onClick={addToCart}>
                        <i className='bx bxs-cart-add'></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;