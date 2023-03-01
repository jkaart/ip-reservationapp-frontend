import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Reserve from "./Components/Reserve";
import Navigation from "./Components/Navigation";
import Admin from "./Components/Admin";
import User from "./Components/User";
import Register from "./Components/Register";
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/reserve" element={<Reserve />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;