import { DEBUG } from "./config";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Login, Logout } from "./Components/Login";
import Navigation from "./Components/Navigation";
import Admin from "./Components/Admin";
import User from "./Components/User";
import Register from "./Components/Register";
import { Container } from "react-bootstrap";
import UserInfo from "./Components/UserInfo";
import IPReservationTable from "./Components/IPReservation";

const App = () => {
    const [login, setLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [group, setGroup] = useState('');

    const updateLogin = (value) => {
        setLogin(value);
    };
    const updateAdmin = (value) => {
        setAdmin(value);
    };
    const updateName = (value) => {
        setName(value);
    };
    const updateEmail = (value) => {
        setEmail(value);
    };
    const updateGroup = (value) => {
        setGroup(value);
    };

    if (DEBUG) {
        console.log("DEBUG FLAG SET");
    }
    
    return (
        <Router>
            <Navigation isLoggedIn={login} isAdmin={admin} />
            <Container>
                {login ? <UserInfo name={name} email={email} group={group}></UserInfo> : ""}
                <Routes>
                    <Route exact path="/" element={ 
                        login ? 
                        <IPReservationTable
                            login={login}
                            name={name}
                            email={email}   
                            group={group}
                        />
                        : 
                        <Login 
                            updateLogin={updateLogin}
                            updateAdmin={updateAdmin}
                            updateName={updateName}
                            updateEmail={updateEmail} 
                            updateGroup={updateGroup}
                            email={email}
                        /> 
                    } />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/logout" element={<Logout isLoggedIn={login} setIsLoggedIn={setLogin} isAdmin={admin} setIsAdmin={updateAdmin}/>} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;