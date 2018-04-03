import {
  FETCH_INGREDIENTS,
  SELECT_INGREDIENT,
  DESELECT_INGREDIENT,
  FILTER_INGREDIENTS,
  ADD_RECIPES
} from "./actions";

const initialState = {
  fetchedRecipes: new Map(),
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

    case SELECT_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.ingredient]
      };

    case DESELECT_INGREDIENT:
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

    case ADD_RECIPES:
      return {
        ...state,
        fetchedRecipes: new Map(state.fetchedRecipes).set(
          action.ingredient,
          action.recipes
        )
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

export const mapStateToVisibleRecipes = state => {
  console.log(state.fetchedRecipes);
  return state.selectedIngredients
    .map(ingredient => state.fetchedRecipes.get(ingredient))
    .filter(recipes => recipes)
    .reduce((acc, recipes) => [...acc, ...recipes], []);
  }

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
