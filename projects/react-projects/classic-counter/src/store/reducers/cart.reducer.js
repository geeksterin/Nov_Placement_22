const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CART_DATA":
      return [...action.payload];

      
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

    case "DECREASE_QUANTITY":

      // if(actionn)

      const cartItemsDecrease = state.map(item => {
        if(item.id === action.payload && item.quantity > 1){
          return {...item, quantity: item.quantity - 1}
        }

        return item
      })

      return [...cartItemsDecrease]

    
    case "CLEAR_CART":
        return INITIAL_STATE

    default:
      return state;
  }
};

export default cartReducer;
