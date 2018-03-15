import React, { Component } from "react";
import "./App.css";
import Ingredients from "./components/Ingredients";
import RecipesList from "./components/RecipesList";

import allIngredients from "./data/ingredients.json";
import allRecipes from "./data/recipes.json";

const ALL_CATEGORIES = "All";

class App extends Component {
  constructor(props) {
    super(props);
    const allCategoriesWithDuplicates = [
      ALL_CATEGORIES,
      ...allRecipes.map(recipe => recipe.category)
    ];
    const allCategories = [...new Set(allCategoriesWithDuplicates)];
    this.state = {
      allIngredients,
      allRecipes,
      allCategories,
      visibleIngredients: allIngredients,
      selectedIngredients: [],
      searchText: "",
      selectedCategory: ALL_CATEGORIES
    };
  }

  get visibleRecipes() {
    return this.state.allRecipes
      .filter(
        recipe =>
          this.state.selectedCategory === ALL_CATEGORIES ||
          this.state.selectedCategory === recipe.category
      )
      .filter(recipe =>
        recipe.ingredients.some(ingredient =>
          this.state.selectedIngredients.includes(ingredient)
        )
      );
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
    return searchPhrase.toLowerCase().split("").reduce((allCharsFulfillCondition, char) => {
      index = stringLowerCase.indexOf(char, index + 1);
      return allCharsFulfillCondition && (index !== -1);
    }, true);
  }

  filterRecipes(selectedCategory) {
    this.setState({ selectedCategory });
  }

  render() {
    return (
      <div className="App">
        <Ingredients
          visibleIngredients={this.state.visibleIngredients}
          selectedIngredients={this.state.selectedIngredients}
          addIngredient={this.addIngredient.bind(this)}
          onSearchTextChange={this.onSearchTextChange.bind(this)}
          searchText={this.state.searchText}
        />
        <RecipesList
          allCategories={this.state.allCategories}
          visibleRecipes={this.visibleRecipes}
          filterRecipes={this.filterRecipes.bind(this)}
        />
      </div>
    );
  }
}

export default App;
