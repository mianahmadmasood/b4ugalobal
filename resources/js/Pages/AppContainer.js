import React from "react";

import ReactDOM from "react-dom";

// import { Provider } from "react-redux";
// import { configureStore } from "../redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import "antd/dist/antd.css";
require("../bootstrap");
import { Provider } from "react-redux";
import { configureStore } from "../redux/store";

import AdminDash from "../containers/admin";
import Login from "./Login";

const app = document.getElementById("root");

function initializeStore() {
    let store = configureStore();
    return store;
}

ReactDOM.render(
    <Provider store={initializeStore()}>
        <Dashboard />
    </Provider>,
    app
);
