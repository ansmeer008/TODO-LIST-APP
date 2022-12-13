import { ADD_COOKIE, DELETE_COOKIE } from "../actions";
import { initialState } from "./initialState";

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COOKIE:
      return Object.assign({}, state, {
        todo: [...state.cookies, action.payload],
      });
      break;

    case DELETE_COOKIE:
      return Object.assign({}, state, {
        todo: state.cookies.filter((el) => el.itemId !== action.payload.itemId),
      });
      break;

    default:
      return state;
  }
};

export default cookieReducer;
