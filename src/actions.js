import callApi from "./apiCaller";

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
});

export const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";
export const fetchIngredients = ingredients => ({
  type: FETCH_INGREDIENTS,
  ingredients
});

export function fetchIngredientsRequest(lane) {
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

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient
});

export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
});

export const FILTER_INGREDIENTS = "FILTER_INGREDIENTS";
export const filterIngredients = searchText => ({
  type: FILTER_INGREDIENTS,
  searchText
});
