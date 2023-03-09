import React from 'react';
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import UserProfile from './UserInfo';
import UserResetPassword from './UserResetPassword';
import UserRequestRemoval from './UserRequestRemoval';


function User(props) {
    const {} = props;
    let data = "";

    return (
        <Container>
            <UserResetPassword userData={data}/>
            <UserRequestRemoval userData={data}/>
        </Container>
    );
}

export default User;