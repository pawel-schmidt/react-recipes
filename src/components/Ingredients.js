import React from "react";
import "./Ingredients.css";

const Ingredients = ({
  visibleIngredients,
  selectedIngredients,
  addIngredient,
  onSearchTextChange,
  searchText
}) => (
  <div>
    <p>Dodaj składniki:</p>
    <input value={searchText} onChange={onSearchTextChange} />
    <ul className="Ingredients-list">
      {visibleIngredients.map(ingredient => (
        <li onClick={() => addIngredient(ingredient)} key={ingredient}>
          {ingredient}
        </li>
      ))}
    </ul>
    <h1>Wybrane przez Ciebie składniki</h1>
    <ul className="Ingredients-list">
      {selectedIngredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  </div>
);

export default Ingredients;