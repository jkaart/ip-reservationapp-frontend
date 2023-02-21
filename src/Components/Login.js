import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate a successful login
        navigate("/reserve");
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="user@esedulainen.fi" />
                <Form.Text className="text-muted">
                    Enter your Esedulainen-email
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    Your password is unique to the IP Reservation system
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;