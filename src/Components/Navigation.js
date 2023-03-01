import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(props) {
    
    const { isLoggedIn, setIsLoggedIn, isAdmin } = props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home">Esedu IP Reserve</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        { isAdmin && <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link> }
                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="collapsible-nav-dropdown">
                            { !isLoggedIn && <NavDropdown.Item as={Link} to="/">Log In</NavDropdown.Item>}
                            { isLoggedIn && <NavDropdown.Item as={Link} to="/user">User Info</NavDropdown.Item> }
                            <NavDropdown.Divider />
                            { !isLoggedIn && <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>}
                            { isLoggedIn && <NavDropdown.Item as={Link} to="/logout">Log Out</NavDropdown.Item> }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;