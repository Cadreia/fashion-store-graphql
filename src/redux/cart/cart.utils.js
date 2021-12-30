export const addItemToCartUtil = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
    cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const clearItemFromCartUtil = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}
