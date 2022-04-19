import React from "react";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
