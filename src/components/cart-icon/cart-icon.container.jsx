import { Mutation, Query } from "react-apollo";
import { GET_CART_ITEMS, TOGGLE_CART_HIDDEN } from "../../graphql/queries";
import CartIcon from "./cart-icon.component";

const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartItems } }) => {
          const itemCount = cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
              accumulatedQuantity + cartItem.quantity,
            0
          );
          return (
            <CartIcon
              toggleCartHidden={toggleCartHidden}
              itemCount={itemCount}
            />
          );
        }}
      </Query>
    )}
  </Mutation>
);

export default CartIconContainer;
