import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ingredients from "./components/Ingredients";
import RecipesList from "./components/RecipesList";

import allIngredients from "./data/ingredients.json";
import allRecipes from "./data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allIngredients,
      allRecipes,
      visibleIngredients: allIngredients,
      visibleRecipes: allRecipes,
      selectedIngredients: ["boczek", "bażant pieczony"]
    };
    this.addIngredient = this.addIngredient.bind(this);
  }
  addIngredient() {
    console.log("hej");
  }

  render() {
    return (
      <div className="App">
        <Ingredients visibleIngredients={this.state.visibleIngredients} selectedIngredients={this.state.selectedIngredients} addIgredient={this.state.addIgredient} />
        <RecipesList visibleRecipes={this.state.visibleRecipes} />
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
