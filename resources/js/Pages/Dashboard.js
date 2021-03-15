import React, { Component } from "react";
import { useSelector } from "react-redux";
import AdminDash from "../containers/admin";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "./Login";

const InitialPath = ({ component: Component, authUser, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authUser ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
        }
    />
);

const Admin = () => {
    const user = useSelector((state) => state.authUser.user);

    return (
        <div>
            <Router>
                <Switch>
                    <InitialPath
                        path={`/dashboard`}
                        authUser={user || localStorage.getItem("access_token")}
                        component={AdminDash}
                    />
                    <Route path="/dashboard" component={AdminDash} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route path="/" component={Login} /> */}
                </Switch>
            </Router>
        </div>
    );
};

export default Admin;
