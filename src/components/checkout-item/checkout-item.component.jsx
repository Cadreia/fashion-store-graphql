import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const  { name, imageUrl, quantity, price } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item-image" />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10096;</div>
                <span className='value'>{ quantity }</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10097;</div>
            </span>
            <span className='price'>{ price }</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</div> {/* UTF-8 wingdings */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
