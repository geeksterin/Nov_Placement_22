const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return [...state, action.payload];

    case "REMOVE_ITEM_FROM_CART":
      const filteredItems = state.filter(item => item.id !== action.payload)
      return [...filteredItems]

    case "INCREASE_QUANTITY":
      const cartItems = state.map(item => {
        if(item.id === action.payload){
          return {...item, quantity: item.quantity + 1}
        }

        return item
      })

      return [...cartItems]

    default:
      return state;
  }
};

export default cartReducer;