import recipes from "../data/recipes.json";
import { SELECT_CATEGORY } from "./actions";

const ALL_CATEGORIES = "All";

const initialState = {
  all: recipes,
  visible: recipes,
  selectedCategory: ALL_CATEGORIES
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category
      };

    default:
      return state;
  }
}

export default reducer;

export const mapStateToVisibleRecipes = state =>
  state.recipes.all
    .filter(
      recipe =>
        state.selectedCategory === ALL_CATEGORIES ||
        state.selectedCategory === recipe.category
    )
    .filter(recipe =>
      recipe.ingredients.some(ingredient =>
        state.selectedIngredients.includes(ingredient)
      )
    );
