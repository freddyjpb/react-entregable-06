import React from 'react';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { deleteFromCartThunk } from '../../store/slices/cart.slice';
import { modifyQuantityThunk } from '../../store/slices/cart.slice';

const CartProduct = ({ cartProduct, handleClose }) => {

    const dispatch = useDispatch();

    const modifyQuantity = (quantity) => {
        dispatch(modifyQuantityThunk(
            cartProduct.id,
            { quantity }
        ))
    }

    return (
        <li key={cartProduct.id}>
            <div className='product-info-container'>
                <div className="product-info">
                    <img src={cartProduct.product.images?.[0].url} alt="" />
                    <div className='details'>
                        <span className="brand">{cartProduct.brand}</span>
                        <Link
                            to={`/product/${cartProduct.product.id}`}
                            className="name"
                            onClick={handleClose}
                        >
                            {cartProduct.product.title}
                        </Link>

                    </div>
                    <div className="button-delete">
                        <button onClick={() => dispatch(deleteFromCartThunk(cartProduct.id))}>
                            <i className='bx bx-trash' ></i>
                        </button>
                    </div>
                </div>


                <div className='cart-product-3'>
                    <div className="quantity-box">
                        <div className="flex">
                            <button
                                onClick={() => modifyQuantity(cartProduct.quantity - 1)}
                                disabled={cartProduct.quantity <= 1}
                            >
                                <i className='bx bx-minus-circle' ></i>
                            </button>
                            <div className="value">
                                {cartProduct.quantity}
                            </div>
                            <button onClick={() => modifyQuantity(cartProduct.quantity + 1)}>
                                <i className='bx bx-plus-circle' ></i>
                            </button>
                        </div>
                    </div>

                    <div className="total">
                        <span className="label">Total: </span>
                        <b>$ {cartProduct.product.price * cartProduct.quantity}</b>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartProduct;