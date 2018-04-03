import React from "react";
import "./App.css";
import Ingredients from "../ingredients/Ingredients";
import ChoosenIngredients from "../ingredients/ChoosenIngredients";
import RecipesList from "../recipes/RecipesList";

import { connect } from "react-redux";
import { mapStateToVisibleRecipes } from "../reducer";
import { fetchIngredientsRequest, deselectIngredient } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchIngredients();
  }
  render() {
    return (
      <div className="App col-md-12">
        <div className="row">
          <Ingredients />
          <div className="col-xl-10 right-column">
            <ChoosenIngredients
              selectedIngredients={this.props.selectedIngredients}
              deselectIngredient={this.props.deselectIngredient}
            />
            <RecipesList
              visibleRecipes={this.props.visibleRecipes}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allRecipes: state.allRecipes,
  visibleRecipes: mapStateToVisibleRecipes(state),
  selectedIngredients: state.selectedIngredients
});

const mapDispatchToProps = dispatch => ({
  deselectIngredient: ingredient => dispatch(deselectIngredient(ingredient)),
  fetchIngredients: () => dispatch(fetchIngredientsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
