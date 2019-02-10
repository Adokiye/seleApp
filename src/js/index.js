import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);