import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMechanic from "../pages/HomeMechanic";
import LoginSystem from "../pages/LoginSystem";
import NotFound from "../pages/NotFound";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/home-mechanic" component={HomeMechanic}/>
                <Route path="/login" component={LoginSystem}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}