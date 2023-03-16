import { API_BASE_URL, DEBUG } from '../config';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import PasswordField from "../Components/PasswordField";
import axios from 'axios';

const Login = (props) => {
    const { user, updateUser } = props;
    const navigate = useNavigate();

    const [password, setPassword] = useState();

    const handleEmailChange = (event) => {
        updateUser({ ...user, email: event.target.value });
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!DEBUG) {
            try {
                const response = await axios
                    .post(API_BASE_URL + 'login/', {
                        email: user.email,
                        password: password,
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                updateUser(response.data);
                navigate("/");
            } catch (error) {
                console.log(error.response);
                //TODO: set error alert
            }
        } 
        else {
            await new Promise((resolve) => {
                setTimeout(() => {
                    updateUser({ ...user, token: 'debug_success'});
                    resolve();
                }, 1000);
            });
        };
    };

    return (
        <Row>
            <Col md='5'>
                <Form>
                    <Form.Label className="text-uppercase fs-2 mt-2">Log in</Form.Label>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="user@esedulainen.fi" onChange={handleEmailChange} />
                        <Form.Text className="text-muted">
                            Enter your Esedulainen-email
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <PasswordField id="password" onChangeProp={handlePasswordChange} /> {/* */}
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

export default Login;