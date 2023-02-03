import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { purchaseCartThunk } from '../../store/slices/purchases.slice';

import CartProduct from './CartProduct';

import '../../css/cart.css';

const Cart = ({ handleClose }) => {

    const cartProducts = useSelector(state => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let total = 0;

    cartProducts.forEach(product => {
        total += product.product.price * product.quantity
    })

    const checkout = () => {
        dispatch(purchaseCartThunk());
        navigate("/purchases");
        handleClose();
    }

    return (
        <div className='cart'>
            <div className="minimalist-scrollbar">

                <h4>Shopping Cart</h4>

                <ul className="cart-products-list">
                    {
                        cartProducts?.map(cartProduct => (
                            <CartProduct
                                cartProduct={cartProduct}
                                handleClose={handleClose}
                                key={cartProduct.id}
                            />
                        ))
                    }
                </ul>
            </div>

            <div className="checkout-section">
                <div className="total">
                    <span className="label">Total:</span>
                    <b>$ {total}</b>
                </div>

                <button className='buy-button' onClick={checkout} disabled={!Boolean(cartProducts)}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
