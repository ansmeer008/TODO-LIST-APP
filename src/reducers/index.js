import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cookieReducer from "./cookieReducer";
import todoReducer from "./todoReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoReducer", "cookieReducer"],
};

const rootReducer = combineReducers({
  todoReducer,
  cookieReducer,
});

export default persistReducer(persistConfig, rootReducer);
