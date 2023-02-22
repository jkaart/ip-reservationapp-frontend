import React from 'react';
import { Row, Col, Card, Container, Form, Button, FormLabel } from "react-bootstrap";
import UserProfile from './UserInfo';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import PasswordField from './PasswordField';



function UserResetPassword(data) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [group, setGroup] = useState("");
    data = "";

    return (
        <Row>
            <Col md="4" className='mt-4'>
                <Form>
                    <h3>Reset password</h3>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <FormLabel>Current Password</FormLabel>
                        <PasswordField />
                        <Form.Label className="mt-3">New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password" />
                        <Form.Control className='mt-2' type="password" placeholder="New Password confirm" />
                        <Form.Text className="text-muted">
                            Entered passwords must differ.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reset password
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default UserResetPassword;