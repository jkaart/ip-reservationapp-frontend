import { DEBUG } from "../config";
import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(props) {
    let login = props.login;
    const {updateUser} = props;
    if(login === 'debug_success' && DEBUG) login = 'admin';

    const handleLogout = () => {
        updateUser({
            token: null,
            name: null,
            email: null,
            group: null
        });
        
        localStorage.removeItem('user');
        localStorage.removeItem('expires');
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home">Esedu IP Reserve {DEBUG && "#DEBUG"}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        { DEBUG || login === 'admin' && <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link> }
                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="collapsible-nav-dropdown" align="end">
                            { !login && <NavDropdown.Item as={Link} to="/">Log In</NavDropdown.Item>}
                            { login && <NavDropdown.Item as={Link} to="/">IP Reservations</NavDropdown.Item> }
                            { login && <NavDropdown.Item as={Link} to="/user">User Info</NavDropdown.Item> }
                            <NavDropdown.Divider />
                            { !login && <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>}
                            { login && <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item> }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;