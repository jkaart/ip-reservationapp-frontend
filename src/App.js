import './App.css';

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { DEBUG } from "./config";
import checkExpiredToken from './utils/TokenExpiration';

import Navigation from "./Components/Navigation";
import UserInfo from "./Components/UserInfo";

import Register from "./Register";
import Login from "./Login";
import IPReservationTable from "./Reservation";
import Admin from "./Admin";
import User from "./User/";
import show from "./utils/AlertManager";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Components/Footer";

const App = () => {
    let storedUser = localStorage.getItem('user');
    const expiredToken = checkExpiredToken();

    if (expiredToken && storedUser) {
        show.error('Session expired, please log in again', 'session_expired');
        storedUser = false;
        localStorage.clear();
    }

    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : {
        token: null,
        name: null,
        email: null,
        group: null
    });

    const updateUser = (userData) => {
        setUser({ ...user, ...userData });
    };

    const role = user.token && jwtDecode(user.token).role;

    return (
        <Router>
            <Navigation login={role} updateUser={updateUser} />
            <Container style={{ "minHeight": 'calc(100vh - 6.5em)' }}> {/*<-- 'full-height' container, -6.5em: hidden footer, -12em: visible footer*/}
                <ToastContainer position="top-center" />
                {role && <UserInfo name={user.name} email={user.email} group={user.group}></UserInfo>}
                <Routes>
                    {role || DEBUG ?
                        <>
                            <Route exact path="/" element={<IPReservationTable user={user} />} />
                            <Route path="/admin" element={role === 'admin' ? <Admin user={user}/> : <Navigate to="/" />} />
                            <Route path="/user" element={<User user={user}/>} />
                        </>
                        :
                        <>
                            <Route exact path="/" element={<Login user={user} updateUser={updateUser} />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    }
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Container>
            <Container fluid className="mt-5 bg-dark">
                <Footer />
            </Container>
        </Router>
    );
};

export default App;