import recipes from "./data/recipes.json";
import {
  FETCH_INGREDIENTS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  FILTER_INGREDIENTS
} from "./actions";

const initialState = {
  allRecipes: recipes,
  allIngredients: [],
  selectedIngredients: [],
  searchIngredientText: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return {
        ...state,
        allIngredients: action.ingredients
      };

    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.ingredient]
      };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          ingredient => ingredient.id !== action.ingredient.id
        )
      };

    case FILTER_INGREDIENTS:
      return {
        ...state,
        searchIngredientText: action.searchText
      };

    default:
      return state;
  }
}

export default reducer;

export const mapStateToVisibleIngredients = state =>
  state.allIngredients
    .filter(ingredient => !state.selectedIngredients.includes(ingredient))
    .filter(ingredient =>
      progressiveSearch(state.searchIngredientText, ingredient.name)
    );

export const mapStateToVisibleRecipes = state =>
  state.allRecipes.filter(recipe =>
    recipe.ingredients.some(ingredient =>
      state.selectedIngredients.includes(ingredient)
    )
  );

function progressiveSearch(searchText, string) {
  let index = -1;
  const stringLowerCase = string.toLowerCase();
  return searchText
    .toLowerCase()
    .split("")
    .reduce((allCharsFulfillCondition, char) => {
      index = stringLowerCase.indexOf(char, index + 1);
      return allCharsFulfillCondition && index !== -1;
    }, true);
}
