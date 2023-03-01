import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import PasswordField from './PasswordField';

const Register = () => {
    const [username, setUsername] = useState("");
    const [pass, setNewPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate a successful login
        navigate("/reserve");
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
            <Row>
                <Col md="5">
                    <Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="user@esedulainen.fi" />
                            <Form.Text className="text-muted">
                                Enter your Esedulainen-email
                            </Form.Text>
                        </Form.Group>
                        <Form.Label>Password</Form.Label>
                        <PasswordField className="mb-2" id="pass" onChangeProp={setNewPass} />
                        <Form.Label>Group</Form.Label>
                        <Form.Control type="text" placeholder="Group 1" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Register
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Register;