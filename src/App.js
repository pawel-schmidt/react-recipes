import React, { Component } from "react";
import logo from "./logo.svg";
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
      visibleRecipes: allRecipes,
      selectedIngredients: [],
      selectedCategory: ""
    };
  }
  addIngredient(ingredient) {
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, ingredient]
    })
  }

  filterRecipes(categoryName) {
    this.setState({
      visibleRecipes:
        categoryName === ALL_CATEGORIES
          ? this.state.allRecipes
          : this.state.allRecipes.filter(
              recipe => recipe.category === categoryName
            )
    });
  }

  render() {
    return (
      <div className="App">
        <Ingredients 
          visibleIngredients={this.state.visibleIngredients} 
          selectedIngredients={this.state.selectedIngredients} 
          addIngredient={this.addIngredient.bind(this)} 
        />
        <RecipesList
          allCategories={this.state.allCategories}
          selectedCategory={this.state.selectedCategory}
          visibleRecipes={this.state.visibleRecipes}
          filterRecipes={this.filterRecipes.bind(this)}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
