import recipes from "./data/recipes.json";
import {
  SELECT_CATEGORY,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  FILTER_INGREDIENTS
} from "./actions";

const ALL_CATEGORIES = "All";

const ingredientsFromRecipes = recipes.reduce(
  (acc, recipe) => [...acc, ...recipe.ingredients],
  []
);
const ingredients = [...new Set(ingredientsFromRecipes)].sort();

const allCategoriesWithDuplicates = [
  ALL_CATEGORIES,
  ...recipes.map(recipe => recipe.category)
];
const categories = [...new Set(allCategoriesWithDuplicates)];

const initialState = {
  allRecipes: recipes,
  visibleRecipes: recipes,

  allIngredients: ingredients,
  visibleIngredients: ingredients,
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

    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [action.ingredient, ...state.selectedIngredients],
        visibleIngredients: state.visibleIngredients.filter(
          i => i !== action.ingredient
        )
      };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          i => i !== action.ingredient
        ),
        visibleIngredients: [action.ingredient, ...state.visibleIngredients]
      };

    case FILTER_INGREDIENTS:
      return {
        ...state,
        searchText: action.searchText,
        visibleIngredients: state.allIngredients.filter(ingredient =>
          progressiveSearch(action.searchText, ingredient)
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
