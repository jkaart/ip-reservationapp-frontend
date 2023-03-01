import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import PasswordField from './PasswordField';

const Register = () => {
    const [username, setUsername] = useState("");
    const [Pass1, setNewPass1] = useState('');
    const [Pass2, setNewPass2] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate a successful login
        navigate("/reserve");
    };

const handleNewPasswordCheck = () => {
    if (Pass1 === Pass2) {
        // Passwords match
        console.log('Passwords match!');
    } else {
        // Passwords do not match
        console.log('Passwords do not match!');
    }
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
                <PasswordField className="" id="Pass1" onChangeProp={setNewPass1} onBlurProp={handleNewPasswordCheck} />
                <Form.Text className="mt-1">Enter New Password</Form.Text>
                <PasswordField className="" id="Pass2" onChangeProp={setNewPass2} onBlurProp={handleNewPasswordCheck} />
                <Form.Text>Repeat Password</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;