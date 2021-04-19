import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ToDoApp from "./pages/ToDoApp";

render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);
