import React from 'react';

const Ingredients = ({allCategories, visibleRecipes, filterRecipes}) => (
  <div>
    <h2>Categories</h2>
    <ul>
      {allCategories.map(category => (
        <li key={category}>
          <button onClick={() => filterRecipes(category)}>{category}</button>
        </li>
      ))}
    </ul>
    <ul>
      {visibleRecipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
    </ul>
  </div>
);

export default Ingredients;
