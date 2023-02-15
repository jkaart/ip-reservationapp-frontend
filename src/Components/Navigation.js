import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/reserve" href="#home">Esedu IP Reserve</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/login">
                                Log In
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Register
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                User Info
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;