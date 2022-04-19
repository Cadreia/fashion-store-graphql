import { Mutation, Query } from "react-apollo";
import { GET_CART_ITEM_COUNT, TOGGLE_CART_HIDDEN } from "../../graphql/queries";
import CartIcon from "./cart-icon.component";

const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEM_COUNT}>
        {({ data: { cartItemsCount } }) => (
          <CartIcon
            toggleCartHidden={toggleCartHidden}
            itemCount={cartItemsCount}
          />
        )}
      </Query>
    )}
  </Mutation>
);

export default CartIconContainer;
