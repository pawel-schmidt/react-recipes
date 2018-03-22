import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../actions";

const RecipesList = ({ allCategories, visibleRecipes }) => (
  <div className="col-md-12 result-column">
    <ul className="hidden">
      {allCategories.map(category => (
        <li key={category}>
          <button onClick={() => this.props.dispatch(selectCategory(category))}>
            {category}
          </button>
        </li>
      ))}
    </ul>
    <div className="row">
      {visibleRecipes.map(recipe => (
        <div key={recipe.id} className="col-xl-3 col-md-6">
          <div className="card border-warning mb-3">
            <div className="card-header">{recipe.name}</div>
            <div className="card-body">
              <img
                className="img-fluid"
                src="http://via.placeholder.com/350x150"
                alt=""
              />
              <p className="card-text">
                Do shakera wrzuć kruszony lód. Wlej wszystkie składniki i
                dokładnie wstrząśnij. Zawartość shakera (wraz z lodem) przelej
                do szklanki typu old-fashioned.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default connect()(RecipesList);
