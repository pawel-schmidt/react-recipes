import recipes from "./data/recipes.json";
import {
  SELECT_CATEGORY,
  FETCH_INGREDIENTS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  FILTER_INGREDIENTS
} from "./actions";

const ALL_CATEGORIES = "All";

const allCategoriesWithDuplicates = [
  ALL_CATEGORIES,
  ...recipes.map(recipe => recipe.category)
];
const categories = [...new Set(allCategoriesWithDuplicates)];

const initialState = {
  allRecipes: recipes,
  visibleRecipes: recipes,

  allIngredients: [],
  visibleIngredients: [],
  selectedIngredients: [],

  allCategories: categories,
  selectedCategory: ALL_CATEGORIES
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category
      };

    case FETCH_INGREDIENTS:
      return {
        ...state,
        allIngredients: action.ingredients,
        visibleIngredients: action.ingredients
      };

    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [action.ingredient, ...state.selectedIngredients],
        visibleIngredients: state.visibleIngredients.filter(
          ingredient => ingredient.id !== action.ingredient.id
        )
      };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          ingredient => ingredient.id !== action.ingredient.id
        ),
        visibleIngredients: [action.ingredient, ...state.visibleIngredients]
      };

    case FILTER_INGREDIENTS:
      return {
        ...state,
        searchText: action.searchText,
        visibleIngredients: state.allIngredients.filter(ingredient =>
          progressiveSearch(action.searchText, ingredient.name)
        )
      };

    default:
      return state;
  }
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

export default reducer;

export const mapStateToVisibleRecipes = state =>
  state.allRecipes
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
