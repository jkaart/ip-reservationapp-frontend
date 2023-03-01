import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
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
            {/*<Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
            </Row>*/}
            <Form.Group>
                
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="user@esedulainen.fi" />
                <Form.Text className="text-muted">
                    Enter your Esedulainen-email
                </Form.Text>
                <Form.Label>Group</Form.Label>
                <Form.Control type="text" placeholder="Group 1" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <PasswordField className="mb-2" id="Pass1" onChangeProp={setNewPass1} onBlurProp={handleNewPasswordCheck} />
                <PasswordField className="" id="Pass2" onChangeProp={setNewPass2} onBlurProp={handleNewPasswordCheck} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;