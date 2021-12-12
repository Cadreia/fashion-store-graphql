import { CartActionTypes } from "./cart.types";
import addCartItemUtil from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload)
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItemUtil(state.cartItems, action.payload)
      }

    default:
      return state;
  }
};

export default cartReducer;
