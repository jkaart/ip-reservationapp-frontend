//official imports
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//3rd party imports
import { Container } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';

//in-app utilities
import checkExpiredToken from './utils/TokenExpiration';
import show from "./utils/AlertManager";

//in-app common components
import Navigation from "./Components/Navigation";
import UserInfo from "./Components/UserInfo";
import Footer from "./Components/Footer";

//in-app view components
import Register from "./Register";
import Login from "./Login";
import IPReservationTable from "./Reservation";
import Admin from "./Admin";
import User from "./User/";

const App = () => {
    //try to get user from localstorage and check if their token has expired
    let storedUser = localStorage.getItem('user');
    const expiredToken = checkExpiredToken();

    //clear user and localstorage if token expired
    if (expiredToken && storedUser) {
        show.error('Session expired, please log in again', 'session_expired');
        storedUser = false;
        localStorage.clear();
    }

    //set storedUser if possible
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : {
        token: null,
        name: null,
        email: null,
        group: null
    });

    //declare updateUser after getting user state and it's setter has been declared
    const updateUser = (userData) => {
        setUser({ ...user, ...userData });
    };
    
    //if user.token exists, decode its role
    const decodedRole = user.token && jwtDecode(user.token).role;
    
    //if decoded role came back as something else than the string 'null', set role as the decoded role. 
    //  OPTIONS:
    //  null     == not logged in (user.token was set null previously by the state literal above)
    //  false    == tried login but not user or admin
    //  'user'   == logged in as user
    //  'admin'  == logged in as admin
    const role = decodedRole !== 'null' && decodedRole;

    //finally if user logged in but was not user or admin, clear localstorage to prevent error loop
    if (storedUser && !role) 
    {
        show.error('No access privileges. Please wait for an admin to confirm your account.', null, null, 10000);
        localStorage.clear();
    }

    return (
        <Router>
            <Navigation login={role} updateUser={updateUser} />
             {/*Container style sets 'full-height' container, -6.5em: hidden footer, -12em: visible footer*/}
            <Container style={{ "minHeight": 'calc(100vh - 6.5em)' }}>
                <ToastContainer position="top-center" />
                {/* "role &&" is Login check from role, see OPTIONS above for explanation of roles */}
                {role && <UserInfo name={user.name} email={user.email} group={user.group}></UserInfo>}
                <Routes>
                    {role ?
                        <>  {/* Logged in route */}
                            <Route exact path="/" element={<IPReservationTable user={user} />} />
                            <Route path="/admin" element={role === 'admin' ? <Admin user={user}/> : <Navigate to="/" />} />
                            <Route path="/user" element={<User user={user}/>} />
                        </>
                        :
                        <>  {/* Logged out route */}
                            <Route exact path="/" element={<Login user={user} updateUser={updateUser} />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    }
                    {/* Navigate to root at any other path */}
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