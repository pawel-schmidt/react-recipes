import React, { Component } from "react";
import "./App.css";
import Ingredients from "../ingredients/Ingredients";
import ChoosenIngredients from "../ingredients/ChoosenIngredients";
import RecipesList from "../recipes/RecipesList";

import allIngredients from "../data/ingredients.json";

import { connect } from "react-redux";
import { mapStateToVisibleRecipes } from "../recipes/reducer";
import { selectCategory } from "../recipes/actions";

const ALL_CATEGORIES = "All";

class App extends Component {
  constructor(props) {
    super(props);
    const allCategoriesWithDuplicates = [
      ALL_CATEGORIES,
      ...props.allRecipes.map(recipe => recipe.category)
    ];
    const allCategories = [...new Set(allCategoriesWithDuplicates)];
    this.state = {
      allIngredients,
      allCategories,
      visibleIngredients: allIngredients,
      selectedIngredients: [],
      searchText: ""
    };
  }

  addIngredient(ingredient) {
    this.setState(prevState => ({
      selectedIngredients: [...prevState.selectedIngredients, ingredient],
      visibleIngredients: prevState.visibleIngredients.filter(
        i => i !== ingredient
      )
    }));
  }

  removeIngredient(ingredient) {
    this.setState(prevState => ({
      selectedIngredients: prevState.selectedIngredients.filter(
        i => i !== ingredient
      ),
      visibleIngredients: [...prevState.visibleIngredients, ingredient]
    }));
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
      visibleIngredients: this.state.allIngredients.filter(ingredient =>
        this.progressiveSearch(event.target.value, ingredient)
      )
    });
  }

  progressiveSearch(searchPhrase, string) {
    let index = -1;
    const stringLowerCase = string.toLowerCase();
    return searchPhrase
      .toLowerCase()
      .split("")
      .reduce((allCharsFulfillCondition, char) => {
        index = stringLowerCase.indexOf(char, index + 1);
        return allCharsFulfillCondition && index !== -1;
      }, true);
  }

  filterRecipes(selectedCategory) {
    this.props.dispatch(selectCategory(selectedCategory));
  }

  render() {
    return (
      <div className="App col-md-12 ">
        <div className="row">
          <Ingredients
            visibleIngredients={this.state.visibleIngredients}
            addIngredient={this.addIngredient.bind(this)}
            onSearchTextChange={this.onSearchTextChange.bind(this)}
            searchText={this.state.searchText}
          />
          <div className="col-xl-10 right-column">
            <ChoosenIngredients
              selectedIngredients={this.state.selectedIngredients}
              removeIngredient={this.removeIngredient.bind(this)}
            />
            <RecipesList
              allCategories={this.state.allCategories}
              visibleRecipes={this.props.visibleRecipes}
              filterRecipes={this.filterRecipes.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allRecipes: state.recipes.all,
  visibleRecipes: mapStateToVisibleRecipes(state)
});

export default connect(mapStateToProps)(App);
