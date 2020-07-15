import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./components/App"
import balance from "./reducers/balance";

const store = createStore(combineReducers({ balance }))
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"))