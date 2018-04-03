import callApi from "./apiCaller";

export const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";
export const fetchIngredients = ingredients => ({
  type: FETCH_INGREDIENTS,
  ingredients
});

export function fetchIngredientsRequest() {
  return dispatch => {
    return callApi("list.php?i=list").then(res => {
      dispatch(
        fetchIngredients(
          res.meals.map(meal => ({
            id: meal.idIngredient,
            name: meal.strIngredient
          }))
        )
      );
    });
  };
}

export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const selectIngredient = ingredient => ({
  type: SELECT_INGREDIENT,
  ingredient
});

export const DESELECT_INGREDIENT = "DESELECT_INGREDIENT";
export const deselectIngredient = ingredient => ({
  type: DESELECT_INGREDIENT,
  ingredient
});

export const FILTER_INGREDIENTS = "FILTER_INGREDIENTS";
export const filterIngredients = searchText => ({
  type: FILTER_INGREDIENTS,
  searchText
});

export const ADD_RECIPES = "ADD_RECIPES";
export const addRecipes = (ingredient, recipes) => ({
  type: ADD_RECIPES,
  ingredient,
  recipes
});

export function fetchRecipesForIngredientRequest(ingredient) {
  return dispatch => {
    return callApi("filter.php?i=" + ingredient.name).then(res => {
      dispatch(addRecipes(ingredient, res.meals));
    });
  };
}
