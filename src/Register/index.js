import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import PasswordField from '../Components/PasswordField';
import show from '../utils/AlertManager';
import { submitRegistrationForm } from './API';

const Register = () => {
    const navigate = useNavigate();

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newGroup, setNewGroup] = useState('');

    //initial state 1 -> no immediate error on form validation. Actual state needed for submit pass is true
    const [emailValid, setEmailValid] = useState(1);        
    const [passwordValid, setPasswordValid] = useState(1);
    const [groupValid, setGroupValid] = useState(1);
    
    const handleNewEmail = (event) => {
        setNewEmail(event.target.value);
    };
    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    };
    const handleNewGroup = (event) => {
        setNewGroup(event.target.value);
    };

    const validateNewEmail = (event) => {
        if (event.target.value.split('@')[1] !== 'esedulainen.fi'){
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    }
    const validatePassword = (event) => {
        if (event.target.value.length < 8){
            setPasswordValid(false);
        } else {
            setPasswordValid(true);
        }
    }
    const validateGroup = (event) => {
        if(event.target.value.length < 5){
            setGroupValid(false);
        } else {
            setGroupValid(true);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        validateNewEmail({target:event.target[0]})
        validatePassword({target:event.target[1]})
        validateGroup({target:event.target[3]})

        if (emailValid === true && passwordValid === true && groupValid === true) {
            try {
                await submitRegistrationForm(newEmail, newPassword, newGroup);
                navigate("/");
            } catch (error) {
                console.log(error.response);
                show.error(error.response.data.error, 'regerror', null, 10000);
            }
        } else {
            if (emailValid !== true) show.error("Enter a valid email.", "emailError");
            if (passwordValid !== true)show.error("Password length 8 characters minimum.", "pwdError");
            if (groupValid !== true) show.error("Please enter your Esedu group.", "groupError");
        }
    };

    return (
        <Row>
            <Col md="5">
                <Form noValidate onSubmit={handleSubmit} autoComplete="off">
                    <Form.Label className="text-uppercase fs-2 mt-2">Register</Form.Label>
                    <Form.Group controlId="validationEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" onChange={handleNewEmail} onBlur={validateNewEmail} placeholder="firstname.surname@esedulainen.fi" isInvalid={!emailValid}/>
                        <Form.Text className="text-muted">
                            Enter your Esedulainen-email
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <PasswordField id="pass" onChange={handleNewPassword} onBlur={validatePassword} isInvalid={!passwordValid}/>
                        <Form.Text className="text-muted">
                            Your password is unique to the IP Reservation system<br/>
                            Minimum 8 characters
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Group</Form.Label>
                        <Form.Control type="text" placeholder="Esedu group" onChange={handleNewGroup} onBlur={validateGroup} isInvalid={!groupValid}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Register
                    </Button>
                </Form>
            </Col>
        </Row >
    );
};

export default Register;