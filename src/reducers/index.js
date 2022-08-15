import { combineReducers } from "redux";
import product from "./product";

export const appReducer = combineReducers({
  product,
});
export default appReducer;
