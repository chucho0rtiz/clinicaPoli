import '../styles/Style.css'
import React from "react";
// Manejo de Rutas.
import { Link } from "react-router-dom";
// Bootstrap.
import {
    Nav, NavItem,
} from 'reactstrap';

function NavBar() {
    return (
        <div>
            <Nav className="NavBarStyle" fill pills >
                <NavItem>
                    <Link to="/citas" >
                        Citas
                    </Link>
                </NavItem>
                {/* <NavItem>
                    <Link to="/especialidades">
                        Especialidades
                    </Link>
                </NavItem> */}
                <NavItem>
                    <Link to="/doctores">
                        Doctores
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/pacientes">
                        Pacientes
                    </Link>
                </NavItem>
            </Nav>
        </div >
    );

}

export default NavBar; 