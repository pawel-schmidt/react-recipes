import React from "react";
import "./Ingredients.css";

const Ingredients = ({
  visibleIngredients,
  addIngredient,
  onSearchTextChange,
  searchText
}) => (
  <div className="col-xl-2 ingredients">
    <h2>Ingredients:</h2>
    <div className="form-group">
      <input className="form-control" value={searchText} onChange={onSearchTextChange} />
    </div>
    <ul className="ingredients-select">
      {visibleIngredients.map(ingredient => (
        <li onClick={() => addIngredient(ingredient)} key={ingredient}>
          {ingredient}
        </li>
      ))}
    </ul>
  </div>
);

export default Ingredients;