import { Mutation } from "react-apollo";
import { TOGGLE_CART_HIDDEN } from "../../graphql/queries";
import CartIcon from "./cart-icon.component";

const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => <CartIcon toggleCartHidden={toggleCartHidden} />}
  </Mutation>
);

export default CartIconContainer;
