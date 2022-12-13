import { ADD_TODO, DELETE_TODO, SET_CHECKBOX_STATUS } from "../actions/index";
import { initialState } from "./initialState";

//todo (할 일 리스트)를 변화시키는 reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todo: [
          ...state.todo,
          {
            id: action.payload.itemId,
            content: action.payload.todoContent,
            date: new Date(),
            status: false,
          },
        ],
      });
      break;

    case DELETE_TODO:
      return Object.assign({}, state, {
        todo: state.todo.filter((el) => el.id !== action.payload.itemId),
      });
      break;

    case SET_CHECKBOX_STATUS:
      let idx = state.todo.findIndex((el) => el.id === action.payload.itemId);
      return Object.assign({}, state, {
        todo: [
          ...state.todo.map((el, index) =>
            index === idx
              ? {
                  ...el,
                  status: !el.status,
                }
              : el
          ),
        ],
      });
      break;

    default:
      return state;
  }
};

export default todoReducer;
