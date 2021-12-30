import React from 'react'
import { connect } from 'react-redux'
import { clearItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem }) => {
    const  { name, imageUrl, quantity, price } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item-image" />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>{ quantity }</span>
            <span className='price'>{ price }</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</div> {/* UTF-8 wingdings */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
