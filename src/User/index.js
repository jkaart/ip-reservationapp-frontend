import React from 'react';
import { Container } from "react-bootstrap";
import UserResetPassword from './UserResetPassword';


function User(props) {
    const {} = props;
    let data = "";

    return (
        <Container>
            <UserResetPassword userData={data}/>
        </Container>
    );
}

export default User;