import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "../Pages/Contact";
import AdminDash from "../Pages/Dashboard";
const Index = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/contact" component={Contact} />
                    <Route path="/admin" component={AdminDash} />
                    <Route path="/" component={AdminDash} />
                </Switch>
            </Router>
        </div>
    );
};

export default Index;
