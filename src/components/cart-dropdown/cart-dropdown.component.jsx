import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  let navigate = useNavigate();
  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <div>
          <CartItemsContainer>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))}
          </CartItemsContainer>
          <CustomButton
            onClick={() => {
              navigate("/checkout");
              toggleCartHidden();
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        </div>
      ) : (
        <EmptyMessageContainer>Cart is Empty</EmptyMessageContainer>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
