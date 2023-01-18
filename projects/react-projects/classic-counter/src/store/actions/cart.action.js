export function setCartData(cart) {
  return {
    type: "SET_CART_DATA",
    payload: cart,
  };
}

export function addItemToCart(item) {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  };
}

export function removeItemFromCart(id) {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  };
}

export function increaseQuantityByOne(id) {
    return {
        type: "INCREASE_QUANTITY",
        payload: id
    }
}

export function decreaseQuantityByOne(id) {
    return {
        type: "DECREASE_QUANTITY",
        payload: id
    }
}


export function clearCart() {
  return {
    type: "CLEAR_CART"
  }
}