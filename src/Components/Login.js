import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

export const Login = (props) => {
    const login = props.isLoggedIn;
    const setLogin = props.setIsLoggedIn;
    const admin = props.isAdmin;
    const setAdmin = props.setIsAdmin;

    const navigate = useNavigate();
    const data = { success: false };

    const handleSubmit = async (event) => {
        event.preventDefault();
        /*
        const response = await fetch('login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password
            })
        });
        
        const data = await response.json();
*/
        //debug

        await new Promise((resolve) => {
            setTimeout(() => {
                data.success = true;
                setLogin(data.success);
                resolve();
            }, 1000);
        });


        if (data.success) {
            navigate("/");
        } else {
            //TODO: set error alert
        }

        //navigate("/reserve");
    };

    return (
        <Row>
            <Col md='5'>
                <Form>
                    <Form.Label></Form.Label>
                    <Form.Group className="mt-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="user@esedulainen.fi" />
                        <Form.Text className="text-muted">
                            Enter your Esedulainen-email
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="mb-2" type="password" placeholder="Password" />
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
