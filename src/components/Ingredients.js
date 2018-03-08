import React from 'react';
import './Ingredients.css';

const Ingredients = ({visibleIngredients, selectedIngredients, addIngredient}) => {
    return (
		<div>
			<p>Dodaj składniki:</p>
			<ul className="Ingredients-list">
				{visibleIngredients.map(ingredient => <li onClick={() => addIngredient(ingredient)} key={ingredient}>{ingredient}</li>)}
			</ul>
			<h1>Wybrane przez Ciebie składniki</h1>
			<ul className="Ingredients-list">
				{selectedIngredients.map(ingredient => <li>{ingredient}</li>)}
			</ul>
		</div>
	);
}

export default Ingredients;