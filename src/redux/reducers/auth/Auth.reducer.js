export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        authData: action.payload,
      };

    default:
      return state;
  }
};
