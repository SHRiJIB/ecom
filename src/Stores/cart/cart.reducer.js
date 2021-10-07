import { types } from "./actionTypes";
const INITIAL_STATE = {
  isOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
