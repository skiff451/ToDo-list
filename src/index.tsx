import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { render } from "react-dom";
import ToDoApp from "./pages/ToDoApp";

console.log(store.getState())
render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);
