import { API_BASE_URL, DEBUG } from '../config';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import PasswordField from './PasswordField';
import axios from 'axios';

const Register = () => {
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newGroup, setNewGroup] = useState('');
    const navigate = useNavigate();

    const handleNewEmail = (event) => {
        setNewEmail(event.target.value);
    };
    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    };
    const handleNewGroup = (event) => {
        setNewGroup(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!DEBUG) {
            try {
                const response = await axios
                    .post(API_BASE_URL + 'users/', {
                        name: "     ",
                        email: newEmail,
                        password: newPassword,
                        group: newGroup,
                        role: 'user' //to be removed
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );

                navigate("/");
            } catch (error) {
                console.log(error.response);
                //TODO: set error alert
            }
            
        } else {
            /*await new Promise((resolve) => {
                setTimeout(() => {
                    data.token = 'debug_success';
                    resolve();
                }, 1000);
            });*/
            console.log("DEBUG: register disabled and does nothing");
        };
    };

    return (
        <Row>
            <Col md="5">
                <Form>
                    <Form.Label className="text-uppercase fs-2 mt-2">Register</Form.Label>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={handleNewEmail} placeholder="user@esedulainen.fi" />
                        <Form.Text className="text-muted">
                            Enter your Esedulainen-email
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <PasswordField id="pass" onChangeProp={handleNewPassword} />
                        <Form.Text className="text-muted">
                            Your password is unique to the IP Reservation system
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Group</Form.Label>
                        <Form.Control type="text" placeholder="Group 1" onChange={handleNewGroup} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3" onClick={handleSubmit}>
                        Register
                    </Button>
                </Form>
            </Col>
        </Row >
    );
};

export default Register;