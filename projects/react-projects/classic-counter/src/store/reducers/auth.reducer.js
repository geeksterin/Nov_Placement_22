const INITIAL_STATE = {
  authorization: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AUTHORIZATION":
      return { ...state, authorization: action.payload };

    case "REVOKE_AUTHORIZATION":
      return { authorization: null };

    default:
      return state;
  }
};

export default authReducer;
