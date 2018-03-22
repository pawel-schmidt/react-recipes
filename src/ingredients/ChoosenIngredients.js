import React from "react";

const ChoosenIngredients = ({
  selectedIngredients,
  removeIngredient
}) => (
  <div>
  { selectedIngredients.length ? 
  <div className="col-md-12 choosen-column">
    <ul className="choosen-ingredients">
      {selectedIngredients.map(ingredient => (
        <li className="badge badge-warning" key={ingredient} onClick={() => removeIngredient(ingredient)}><span aria-hidden="true">&times;</span>{ingredient}</li>
      ))}
    </ul>
  </div> : ""}
  </div>
);

export default ChoosenIngredients;