import { ADD_COOKIE, DELETE_COOKIE } from "../actions";
import { initialState } from "./initialState";

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COOKIE:
      return Object.assign({}, state, {
        cookies: [
          ...state.cookies,
          {
            id: action.payload.itemId,
            cookie: action.payload.cookieIcon,
            date: action.payload.cookieDate,
          },
        ],
      });
      break;

    case DELETE_COOKIE:
      return Object.assign({}, state, {
        cookies: state.cookies.filter((el) => el.id !== action.payload.itemId),
      });
      break;

    default:
      return state;
  }
};

export default cookieReducer;
