import { API_BASE_URL, DEBUG } from '../config';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import PasswordField from "./PasswordField";

export const Login = (props) => {
    const login = props.isLoggedIn;
    const setLogin = props.setIsLoggedIn;
    const admin = props.isAdmin;
    const setAdmin = props.setIsAdmin;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let data = {};

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };
    const updatePassword = (event) => {
        setPassword(event.target.value);
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(DEBUG) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    data.token = 'debug_success' ;
                    setLogin(data.token);
                    resolve();
                }, 1000);
            });
        } else {
            const response = await fetch(API_BASE_URL+'login/', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            });
        
            data = await response.json();
        };
        
        if (data.token) {
            setLogin(data.token);
            navigate("/");
        } else {
            console.log(data.error);
            //TODO: set error alert
        }

        //navigate("/reserve");
    };

    return (
        <Row>
            <Col md='5'>
                <Form>
                    <Form.Label className="text-uppercase fs-2 mt-2">Log in</Form.Label>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="user@esedulainen.fi" onChange={updateEmail}/>
                        <Form.Text className="text-muted">
                            Enter your Esedulainen-email
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <PasswordField id="password" onChangeProp={setPassword}/> {/* */}
                        <Form.Text className="text-muted">
                            Your password is unique to the IP Reservation system
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit" onClick={handleSubmit}>
                        Login
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export const Logout = (props) => {
    const navigate = useNavigate();

    props.setIsLoggedIn(false);
    props.setIsAdmin(false);

    navigate("/");

    console.log(props.isLoggedIn);
    console.log(props.isAdmin);

};
