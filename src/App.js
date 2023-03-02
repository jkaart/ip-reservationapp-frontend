import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Login, Logout } from "./Components/Login";
import Reserve from "./Components/Reserve";
import Navigation from "./Components/Navigation";
import Admin from "./Components/Admin";
import User from "./Components/User";
import Register from "./Components/Register";
import { Container } from "react-bootstrap";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    console.log("DEBUG( State of the app: isLoggedIn is", isLoggedIn, "and isAdmin is", isAdmin, ")");

    return (
        <Router>
            <Navigation isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
            <Container>
                <Routes>
                    <Route exact path="/" element={ 
                        isLoggedIn ? <Reserve /> : <Login 
                            isLoggedIn={isLoggedIn}
                            isAdmin={isAdmin}
                            setIsLoggedIn={setIsLoggedIn}
                            setIsAdmin={setIsAdmin} /> 
                    } />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;