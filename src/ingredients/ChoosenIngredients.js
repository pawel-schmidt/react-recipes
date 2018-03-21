import React from "react";

const ChoosenIngredients = ({
  selectedIngredients,
  removeIngredient
}) => (
  <div className="col-md-12 choosen-column">
    <h2>Choosen ingredients:</h2>
    <ul className="choosen-ingredients">
      {selectedIngredients.map(ingredient => (
        <li className="badge badge-warning" key={ingredient} onClick={() => removeIngredient(ingredient)}>{ingredient}</li>
      ))}
    </ul>
  </div>
);

export default ChoosenIngredients;