import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(props) {
    let login = props.login;
    const {updateUser} = props;

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

    const location = useLocation().pathname;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home">Esedu IP Reserve</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        { login === 'admin' && !(location === '/admin') && <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link> }
                        { login === 'admin' && location === '/admin' && <Nav.Link as={Link} to="/">IP Reservations</Nav.Link> }
                    </Nav>
                    <Nav align="end">
                        { !login && location === '/register' && <Nav.Link as={Link} to="/">Log In</Nav.Link>}
                        { login  && location === '/user' && <Nav.Link as={Link} to="/">IP Reservations</Nav.Link> }
                        { login  && (location === '/' || location === '/admin') && <Nav.Link as={Link} to="/user">User Info</Nav.Link> }
                        { login  && <Nav.Link disabled className="d-none d-lg-block">|</Nav.Link>}
                        { !login && location === '/' && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                        { login  && <Nav.Link onClick={handleLogout} title="Log out"> <span className="d-lg-none">Log out</span> <FiLogOut size='1.5em'></FiLogOut> </Nav.Link> }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;