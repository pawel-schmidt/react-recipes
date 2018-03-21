import { GET_ALL_RECIPES } from "./actions";
import allRecipes from "../data/recipes.json";

function recipes(state = [], action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes
      };

    default:
      return state;
  }
}

export default players;
