import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserRegistration from "../pages/UserRegistration";
import HomeMechanic from "../pages/HomeMechanic";
import LoginSystem from "../pages/LoginSystem";
import HomeUser from "../pages/HomeUser";
import NotFound from "../pages/NotFound";
import UsersList from "../services/UsuariosLista";
import Home from "../pages/Home";
import Home_System from "../pages/Home_System";
import Dashboard from "../pages/Dashboard";
import OwnerRegistration from "../pages/OwnerRegistration";
import CustomerRegistration from "../pages/CustomerRegistration";
import WorkshopRegistration from "../pages/WorkshopRegistration";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="home" />
                </Route>
                <Route path="/workshop-registration" component={WorkshopRegistration}/>
                <Route path="/customer-registration" component={CustomerRegistration} />
                <Route path="/owner-registration"  component={OwnerRegistration} />
                <Route path="/home" component={Home} />
                <Route path="/user-list" component={UsersList} />
                <Route path="/user-registration" component={UserRegistration} />
                <Route path="/home-mechanic" component={HomeMechanic} />
                <Route path="/home-user" component={HomeUser} />
                <Route path="/login" component={LoginSystem} />
                <Route path="/home-system" component={Home_System} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}