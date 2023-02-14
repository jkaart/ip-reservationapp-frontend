import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import Reserve from "./Reserve";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/reserve" element={<Reserve />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;