import React from "react";
import ReactDOM from "react-dom";
import "./vendors/css/bootstrap.min.css";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import DevTools from "./DevTools";

import { createStore } from "redux";
import reducer from "./reducer.js";
import { Provider } from "react-redux";
import { getAllRecipes } from "./recipes/actions";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

const store = createStore(reducer, DevTools.instrument());
store.dispatch(getAllRecipes());
