export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const FILTER_INGREDIENTS = "FILTER_INGREDIENTS";

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
});

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient
});

export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
});

export const filterIngredients = searchText => ({
  type: FILTER_INGREDIENTS,
  searchText
});
