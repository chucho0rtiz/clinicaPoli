import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import './styles/Style.css';

function Main() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div >
    );

}

export default Main; 