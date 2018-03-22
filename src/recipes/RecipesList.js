import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../actions";

const RecipesList = ({ allCategories, visibleRecipes, filterCategory, selectedCategory, selectedIngredients }) => (
  <div className="col-md-12 result-column">
    { selectedIngredients.length ? 
    <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-pills nav-fill">
                {allCategories.map(category => (
                  <li key={category} className="nav-item">
                    <a className={(category === selectedCategory)? "active nav-link" : "nav-link"} href="#" onClick={() => filterCategory(category)}>
                      {category}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
    </div> : "" }
    <div className="row">
      {visibleRecipes.map(recipe => (
        <div key={recipe.id} className="result-single col-xl-3 col-md-6">
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

const mapStateToProps = state => ({
  selectedCategory: state.selectedCategory,
  selectedIngredients: state.selectedIngredients
});

const mapDispatchToProps = dispatch => ({
  filterCategory: category => dispatch(selectCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
