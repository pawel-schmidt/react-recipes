import React from 'react';

const Ingredients = ({visibleRecipes}) => (
  <ul>
    {visibleRecipes.map(recipe => <li>{recipe.name}</li>)}
  </ul>
);

export default Ingredients;
