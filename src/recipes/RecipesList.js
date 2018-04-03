import React from "react";
import { connect } from "react-redux";

const RecipesList = ({
  visibleRecipes,
  selectedIngredients
}) => (
  <div className="col-md-12 result-column">
    <div className="row">
      {visibleRecipes.map(recipe => (
        <div key={recipe.id} className="result-single col-xl-3 col-md-6">
          <div className="card border-warning mb-3">
            <div className="card-header">{recipe.name}</div>
            <div className="card-body">
              <img
                className="img-fluid"
                src={recipe.image}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients
});

export default connect(mapStateToProps)(RecipesList);
