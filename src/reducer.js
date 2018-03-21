import { combineReducers } from "redux";
import recipes from "./recipes/reducer";

const reducer = combineReducers({
  recipes
});

export default reducer;
