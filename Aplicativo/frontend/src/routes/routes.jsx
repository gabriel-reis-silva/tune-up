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
import ServiceRequest from "../pages/ServiceRequest";
import CustomerView from "../pages/CustomerView";
import StaffVisualization from "../pages/StaffVisualization";
import ModalCustomer from "../pages/ModalCustomer";
import ModalStaff from "../pages/ModalStaff";
import ModalService from "../pages/ModalService";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="home" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/user-list" component={UsersList} />
                <Route path="/user-registration" component={UserRegistration} />
                <Route path="/home-mechanic" component={HomeMechanic} />
                <Route path="/home-user" component={HomeUser} />
                <Route path="/login" component={LoginSystem} />
                <Route path="/home-system" component={Home_System} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/ordem-de-servico" component={ServiceRequest} />
                <Route path="/visualizacao-cliente" component={CustomerView} />
                <Route path="/visualizacao-funcionario" component={StaffVisualization} />
                <Route path="/modal-cliente/:id" component={ModalCustomer} />
                <Route path="/modal-funcionario/:id" component={ModalStaff} />
                <Route path="/modal-ordem-de-servico/:id" component={ModalService} />
                <Route path="*" component={NotFound} />
                
            </Switch>
        </Router>
    )
}