import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({item: { imageUrl, price, quantity }}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"></img>
            <div className="item-details">
                <span className="name"></span>
                <span>{ quantity } x { price } CFA</span>
            </div>
        </div>
    )
}

export default CartItem
