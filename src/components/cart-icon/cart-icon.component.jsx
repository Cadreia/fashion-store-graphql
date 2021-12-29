import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartCountItems } from '../../redux/cart/cart.selector'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{ itemCount }</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartCountItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
