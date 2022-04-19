import { gql } from "apollo-boost";
import { addItemToCartUtil } from "../redux/cart/cart.utils";
import { GET_CART_HIDDEN, GET_CART_ITEMS } from "./queries";

export const typeDefs = gql`
  extend type Item {
    quantity: int
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item): [Item]!
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, variables, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {
          cartHidden: !cartHidden,
        },
      });
      return !cartHidden;
    },
    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItems = addItemToCartUtil(cartItems, item);
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
      return newCartItems;
    },
  },
};
