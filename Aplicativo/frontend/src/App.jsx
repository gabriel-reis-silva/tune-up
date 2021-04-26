// import Nav from './components/Nav';
import HomeMechanic from './pages/HomeMechanic';
import HomeUser from './pages/HomeUser';
import Nav from './components/Nav'
import React from 'react';


export default function Programa() {
    return (
        <React.Fragment>
            <Nav />
            <HomeUser />
        </React.Fragment>
    );
}