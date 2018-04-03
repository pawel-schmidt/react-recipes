import React from "react";
import "./Ingredients.css";

import { connect } from "react-redux";
import { addIngredient, filterIngredients } from "../actions";
import { mapStateToVisibleIngredients } from "../reducer";

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
    this.props.filterIngredients(event.target.value);
  }
  render() {
    return (
      <div className="col-xl-2 ingredients">
        <h2>Recepiest App</h2>
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.searchText}
            placeholder="Find Ingredient"
            onChange={this.onSearchTextChange.bind(this)}
          />
        </div>
        <ul className="ingredients-select">
          {this.props.visibleIngredients.map(ingredient => (
            <li onClick={() => this.props.addIngredient(ingredient)} key={ingredient.id}>
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visibleIngredients: mapStateToVisibleIngredients(state)
});

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredient => dispatch(addIngredient(ingredient)),
  filterIngredients: searchText => dispatch(filterIngredients(searchText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
