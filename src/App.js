import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Admin from "./Components/Admin";
import User from "./Components/User";
import Register from "./Components/Register";
import { Container } from "react-bootstrap";
import UserInfo from "./Components/UserInfo";
import IPReservationTable from "./Components/IPReservation";
import jwtDecode from "jwt-decode";
import { DEBUG } from "./config";

const App = () => {
    const [user, setUser] = useState({
        token: null,
        name: null,
        email: null,
        group: null
    });

    const updateUser = (userData) => {
        setUser( {...user, ...userData} );
    };

    return (
        <Router>
            <Navigation login={user.token && jwtDecode(user.token).role} updateUser={updateUser} />
            <Container>
                {user.token && <UserInfo name={user.name} email={user.email} group={user.group}></UserInfo>}
                <Routes>
                    <Route exact path="/" element={
                        user.token || DEBUG ?
                            <IPReservationTable user={user} />
                            :
                            <Login user={user} updateUser={updateUser} />
                        }
                    />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;