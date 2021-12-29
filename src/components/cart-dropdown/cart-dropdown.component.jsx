import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ cartItems }) => {
  let navigate = useNavigate()
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))}
          </div>
          <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
      ) : (
        <span className="empty-message">Cart is Empty</span>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
