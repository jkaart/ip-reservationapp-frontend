import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-3 ">
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Button variant="primary" className="mr-2">
                        Login
                    </Button>
                    <Button variant="outline-primary">Register</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;