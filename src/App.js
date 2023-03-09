import { DEBUG } from "./config";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Login, Logout } from "./Components/Login";
import Reserve from "./Components/Reserve";
import Navigation from "./Components/Navigation";
import Admin from "./Components/Admin";
import User from "./Components/User";
import Register from "./Components/Register";
import { Container } from "react-bootstrap";
import UserInfo from "./Components/UserInfo";

const App = () => {
    const [login, setLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [group, setGroup] = useState('');

    if (DEBUG) {
        console.log("DEBUG FLAG SET 'TRUE' JUST LETTING YOU KNOW. CHECK CONFIG.JS IF IT SHOULD BE FALSE. BE SURE TO SET API_BASE_URL CORRECTLY");
        console.log("DEBUG( State of the app: isLoggedIn is", login, "and isAdmin is", isAdmin, ")");
    }
    return (
        <Router>
            <Navigation isLoggedIn={login} isAdmin={isAdmin} />
            <Container>
                {login ? <UserInfo name={name} email={email} group={group}></UserInfo> : ""}
                <Routes>
                    <Route exact path="/" element={ 
                        login ? 
                        <Reserve
                            login={login}
                            name={name}
                            email={email}   
                            group={group}
                        />
                        : 
                        <Login 
                            login={login}
                            isAdmin={isAdmin}
                            setLogin={setLogin}
                            setIsAdmin={setIsAdmin} 
                            email={email}
                            name={name}
                            group={group}
                            setName={setName}
                            setEmail={setEmail}
                            setGroup={setGroup}
                        /> 
                    } />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/logout" element={<Logout isLoggedIn={login} setIsLoggedIn={setLogin} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;