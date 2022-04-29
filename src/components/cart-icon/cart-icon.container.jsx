import { flowRight } from "lodash";
import { graphql } from "react-apollo";
import { GET_CART_ITEM_COUNT, TOGGLE_CART_HIDDEN } from "../../graphql/queries";
import CartIcon from "./cart-icon.component";

const CartIconContainer = ({ data: { cartItemsCount }, toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} itemCount={cartItemsCount} />
);

export default flowRight(
  graphql(GET_CART_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
