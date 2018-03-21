import recipes from "../data/recipes.json";

const initialState = {
  all: recipes
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
