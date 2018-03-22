import React from "react";
import "./App.css";
import Ingredients from "../ingredients/Ingredients";
import ChoosenIngredients from "../ingredients/ChoosenIngredients";
import RecipesList from "../recipes/RecipesList";

import { connect } from "react-redux";
import { mapStateToVisibleRecipes } from "../reducer";
import { removeIngredient } from "../actions";

const App = ({
  selectedIngredients,
  allCategories,
  visibleRecipes,
  removeIngredient
}) => {
  return (
    <div className="App col-md-12 ">
      <div className="row">
        <Ingredients />
        <div className="col-xl-10 right-column">
          <ChoosenIngredients
            selectedIngredients={selectedIngredients}
            removeIngredient={removeIngredient}
          />
          <RecipesList
            allCategories={allCategories}
            visibleRecipes={visibleRecipes}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  allRecipes: state.allRecipes,
  visibleRecipes: mapStateToVisibleRecipes(state),
  selectedIngredients: state.selectedIngredients,
  allCategories: state.allCategories
});

const mapDispatchToProps = dispatch => ({
  removeIngredient: ingredient => dispatch(removeIngredient(ingredient))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
