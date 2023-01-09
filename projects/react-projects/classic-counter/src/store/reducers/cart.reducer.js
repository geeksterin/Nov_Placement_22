const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default cartReducer;
