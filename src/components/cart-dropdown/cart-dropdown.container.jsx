import { Mutation, Query } from "react-apollo";
import { GET_CART_ITEMS, TOGGLE_CART_HIDDEN } from "../../graphql/queries";
import CartDropdown from "./cart-dropdown.component";

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartItems } }) => (
          <CartDropdown
            cartItems={cartItems}
            toggleCartHidden={toggleCartHidden}
          />
        )}
      </Query>
    )}
  </Mutation>
);

export default CartDropdownContainer;
